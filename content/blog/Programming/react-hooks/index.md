---
title: "React Hooks 实现隔代组件传值"
date: "2021-07-05"
type: Programming
description: "useContext + useReducer 搭配用法"
---

## useContext 基础

先来看一个基本的例子：

```
// 第一步：创建需要共享的context
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // 第二步：使用 Provider 提供 ThemeContext 的值，Provider所包含的子树都可以直接访问ThemeContext的值
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
// Toolbar 组件并不需要透传 ThemeContext
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  // 第三步：使用共享 Context
  const theme = useContext(ThemeContext);
  render() {
    return <Button theme={theme} />;
  }
}
```

- 通过 `createContext` 方法， 我们可以设定某一个 context 的初始值。

- 通过 `Provider`，我们可以限定 context 的作用范围。当 Provider 的 value 发生变化时，其所有子级消费者 （用到了 useContext 的子组件）都会 rerender。

- 在上述例子中，`App` 和 `ThemedButton` 很明显是一个爷孙关系的组件，现在我们的需求很简单，如何绕过父亲，直接将爷爷拥有的东西传给孙子？答案是：在爷爷那里 `createContext`， 在孙子那里 `useContext`。

接下来，问题来了：如果说孙子不想只拿到爷爷的宝贝，他很有想法，想将这个宝贝经过加工后变得更好，并和爷爷一起分享，这时候应该怎么做呢？

传统的 react class component 的做法是，将爷爷的宝贝变成一个可修改的`state`， 并将 `setState` 方法一层层传递至孙子。这样，孙子就拥有了 `setState` 的权利。但我们现在有 context 了，不需要一层层传递就可以实现。想必读到这里我们已经可以猜到，在 `createContext` 的时候，直接传一个类似 `setState` 的方法，就可以解决这个问题。

现在，你可能会说，这个简单，直接传一个 `useState` 不就解决问题了吗？这理论上当然没有问题，但实际上你可能并不希望直接用`setState` 的方法直接更新 state (可能会遇到一些比较复杂的 state 更新逻辑)，而是希望通过某种标准化的 action(dispatch) 来更新 state, 而且 dispatch 还避免了回调函数，所以使用 useContext() + useReducer()的组合会更加 flexible。

## useReducer 基础

先来看一个例子：

```
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

- 先定义和 `useReducer` 有关的东西：
  - state: 可更改的值
  - dispatch: 用来更改 state 的函数，参数形式是 ({xxx: <希望 set 的值>})
  - reducer: 用来判断 state 更改逻辑的函数，参数形式是 (state, action), 上面 dispatch 中的 xxx, 对应 action.xxx。这样就很浅显易懂了，得到了 action.xxx，便可以判断 state 将要如何变化，最后 return 和 initialState 的 type 相等的数据即可。
  - initialState: 顾名思义，表示 state 的初始值。

## useState 和 useReducer 搭配使用

```
//爷组件：
const initialState = {xxx}
const reducer = (state, action) => {
  // 举例说明
  switch (action.type){
    case 'yyy':
      return {xxx} // 对 state 进行更改并返回原有 state 格式
    ...
    ...
  }
}
export const context = createContext({state: initialState, dispatch: () => null})
const [state, dispatch] = useReducer(reducer, initialState)

//孙组件：
import { context } from 爷组件;
const { state, dispatch } = useContext(context)
//在后面合适的地方展示 state，或通过 dispatch 方法 修改 state。搞定！!
```

## 总结

- 如果你的页面 state 很简单，可以直接使用 `useState`
- 如果你的页面 state 比较复杂（state 是一个对象或者 state 非常多散落在各处）请使用 `userReducer`
- 如果你的页面组件层级比较深，并且需要子组件触发 state 的变化，可以考虑 `useReducer` + `useContext`

## Reference

1. [React Documents: useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

2. [简书：这一次彻底搞定 useReducer - useContext 使用](https://www.jianshu.com/p/eddb25cda5f0)

3. [StackOverflow: useState vs useReducer](https://stackoverflow.com/questions/54646553/usestate-vs-usereducer)
