---
title: "React Hooks: useRef"
date: "2021-07-09"
type: Programming
description: " useRef 的基本用法，以及与 useState 的区别"
---

## 什么是 useRef()

`useRef(initialValue)` 是一个 react 自建的 hook，可以传一个初始参数，并返回一个 reference (是一个 object 且自带属性 `current`)。

```
import { useRef } from 'react';

function MyComponent() {
  const reference = useRef(initialValue);

  const someHandler = () => {
    // Access reference value: (GET)
    const value = reference.current;

    // Update reference value: (SET)
    reference.current = newValue;
  };

  // ...
}
```

## Mutable Value

### useRef() 与 useState() 的区别

我们来看一个简单的例子：点击按钮组件，分别用 useRef() 和 useState() 来实现：

- useRef() 实现

```
import { useRef } from 'react';

function LogButtonClicks() {
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log('I rendered!');

  return <button onClick={handle}>Click me</button>;
}
```

console 中只会出现一次 `I rendered!`

- useState() 实现

```
import { useState } from 'react';

function LogButtonClicks() {
  const [count, setCount] = useState(0);

  const handle = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };

  console.log('I rendered!');

  return <button onClick={handle}>Click me</button>;
}
```

每 click 一次，console 都会出现一次 `I rendered!`

总结：

1. 更新一个 reference 不会触发重新渲染，而更新 state 会使组件重新渲染。

2. Reference 更新是同步的（更新后立即可用），而 state 更新是异步的（state 必须重新渲染后才能更新）。

Tips: state 和 reference 合用的例子：（实现一个计时器）

```
import { useRef, useState, useEffect } from 'react';

function Stopwatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}
```

## Accessing DOM elements

用 useRef 锁定 DOM 元素三部曲：

1. 定义：`const elementRef = useRef()`

2. 组件设置 ref ：`<div ref={elementRef}></div>`

3. Mounting 过后，`elementRef.current` 就指向了 DOM 元素。

举例：（focus 一个 input）

```
import { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    // Logs `HTMLInputElement`
    console.log(inputRef.current);

    inputRef.current.focus();
  }, []); // 只会在第一次渲染过后触发一次，源于 useEffect dependency 为 [] 的机制。

  // Logs `undefined` during initial rendering
  console.log(inputRef.current);

  return <input ref={inputRef} type="text" />;
}
```

## Reference

1. [react-useref-guide](https://dmitripavlutin.com/react-useref-guide/)
