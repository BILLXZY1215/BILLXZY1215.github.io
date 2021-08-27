---
title: "Js Closure"
date: "2021-08-27"
type: Programming
description: "浅谈 JS 闭包"
cover: "https://z3.ax1x.com/2021/07/29/WbRYJH.png"
---

## 执行上下文

JS 是通过执行上下文来运行的。一般来说，从启动程序开始，我们从 `全局执行上下文` 开始。在 `全局执行上下文` 中定义的变量，被称之为 `全局变量`。当程序调用一个函数时，将经历如下几个步骤：

```
1. JS 创建一个新的执行上下文，可以将其命名为 `XX函数执行上下文`，或 `本地执行上下文`。

2. 在这个 `本地执行上下文` 中，可能定义了一些变量，我们把它们叫做执行这个执行上下文的 `本地变量`。

3. 新的执行上下文被推到到执行堆栈中。可以将执行堆栈看作是一种保存程序在其执行中的位置的容器。
```

当函数遇到 `return` 或 `}` 时，将会结束：

```
1. 这个本地执行上下文从执行堆栈中弹出。

2. (Important) 函数将返回值返回给 `调用执行上下文` （也就是调用目前本地执行上下文的执行上下文），它可以是 `全局执行上下文`，也可以是另外一个函数的 `本地执行上下文`。返回的值可以是一个对象、一个数组、一个函数、一个布尔值等等，如果函数没有 return 语句，则返回 undefined 。

3. 这个本地执行上下文被销毁，这个本地执行上下文中声明的所有变量都将被删除。

```

## 词法作用域

```
一个函数可以访问在它的调用执行上下文中定义的变量。
```

来个简单的例子：

```
1: let val1 = 2
2: function multiplyThis(n) {
3:   let ret = n * val1
4:   return ret
5: }
6: let multiplied = multiplyThis(6)
7: console.log('example of scope:', multiplied)
```

在这里先说一下 JS 寻找变量的方法：先在 `本地执行上下文` 中找，如果找不到就往 `调用执行上下文` 中找，直到 `全局执行上下文`，如果还是找不到，那就为 `undefined`。

接下来详细说一下上面这个例子的执行过程：

1. 在全局执行上下文中声明一个新的变量 `val1`，并将其赋值为 `2`。

2. 第 `2-5` 行，声明一个新的变量 `multiplyThis`，并给它分配一个函数定义。

3. 第 `6` 行，声明一个在全局执行上下文 `multiplied` 新变量。

4. 从全局执行上下文内存中查找变量 `multiplyThis`，并将其作为函数执行，传递数字 `6` 作为参数。

5. 新函数调用(创建新执行上下文），创建一个新的 `multiplyThis` 函数执行上下文。

6. 在 `multiplyThis` 执行上下文中，声明一个变量 `n` 并将其赋值为 `6`。

7. 第 `3` 行，在 `multiplyThis` 执行上下文中，声明一个变量 `ret`。

8. 继续第 `3` 行。对两个操作数 `n` 和 `val1` 进行乘法运算.在 `multiplyThis` 执行上下文中查找变量 `n`。我们在步骤 `6` 中声明了它，它的内容是数字 `6`。在 `multiplyThis` 执行上下文中查找变量 `val1`。`multiplyThis` 执行上下文没有一个标记为 `val1` 的变量。我们向调用上下文查找，调用上下文是全局执行上下文，在全局执行上下文中寻找 `val1`。它在步骤 `1` 中定义，数值是 `2`。

9. 继续第 `3` 行。将两个操作数相乘并将其赋值给 `ret` 变量，`6 \* 2 = 12`，`ret` 现在值为 `12`。

10. 返回 `ret` 变量，销毁 `multiplyThis` 执行上下文及其变量 `ret` 和 `n` 。变量 `val1` 没有被销毁，因为它是全局执行上下文的一部分。

11. 回到第 `6` 行。在调用上下文中，数字 `12` 赋值给 `multiplied` 的变量。

12. 最后在第 `7` 行，我们在控制台中打印 `multiplied` 变量的值。

## 返回函数的函数

```
 1: let val = 7
 2: function createAdder() {
 3:   function addNumbers(a, b) {
 4:     let ret = a + b
 5:     return ret
 6:   }
 7:   return addNumbers
 8: }
 9: let adder = createAdder()
10: let sum = adder(val, 8)
11: console.log('example of function returning a function: ', sum)
```

1. 第 `2-8` 行。我们在全局执行上下文中声明了一个名为 `createAdder` 的变量，并为其分配了一个函数定义。第 `3-7` 行描述了上述函数定义，和以前一样，在这一点上，我们没有直接讨论这个函数。我们只是将函数定义存储到那个变量 (`createAdder`) 中。

2. 第 `9` 行。我们在全局执行上下文中声明了一个名为 `adder` 的新变量，暂时，值为 `undefined`。

3. 第 `9` 行。我们看到括号 `()`，我们需要执行或调用一个函数，查找全局执行上下文的内存并查找名为 `createAdder` 的变量，它是在步骤 `2` 中创建的。好吧，我们调用它。

4. 调用函数时，执行到第 `2` 行。创建一个新的 `createAdder` 执行上下文。我们可以在 `createAdder` 的执行上下文中创建自有变量。`js` 引擎将 `createAdder` 的上下文添加到调用堆栈。这个函数没有参数，让我们直接跳到它的主体部分。

5. 第 `3-6` 行。我们有一个新的函数声明，我们在 createAdder 执行上下文中创建一个变量 `addNumbers`。这很重要，`addnumber` 只存在于 `createAdder` 执行上下文中。我们将函数定义存储在名为 `addNumbers` 的自有变量中。

6. 第 `7` 行，我们返回变量 `addNumbers` 的内容。js 引擎查找一个名为 `addNumbers` 的变量并找到它，这是一个函数定义。<strong>好的，函数可以返回任何东西，包括函数定义。我们返 `addNumbers` 的定义。</strong>第 `4` 行和第 `5` 行括号之间的内容构成该函数定义。

7. 返回时，`createAdder` 执行上下文将被销毁。`addNumbers` 变量不再存在。但 `addNumbers` 函数定义仍然存在，因为它返回并赋值给了 `adder` 变量。

8. 第 `10` 行。我们在全局执行上下文中定义了一个新的变量 `sum`，先赋值为 `undefined`;

9. 第 `1` 行。我们在全局执行上下文中声明一个变量 `val` 并赋值为 `7`。

10. 接下来我们需要执行一个函数。哪个函数? 是名为 `adder` 变量中定义的函数。我们在全局执行上下文中查找它，果然找到了它，这个函数有两个参数。

11. 让我们查找这两个参数，第一个是我们在步骤 `1` 中定义的变量 `val`，它表示数字 `7`，第二个是数字 `8`。

12. 现在我们要执行这个函数，函数定义概述在第 `3-5` 行，因为这个函数是匿名，为了方便理解，我们暂且叫它 `adder` 吧。这时创建一个 `adder` 函数执行上下文，在 `adder` 执行上下文中创建了两个新变量 `a` 和 `b`。它们分别被赋值为 `7` 和 `8`，因为这些是我们在上一步传递给函数的参数。

13. 第 `4` 行。在 `adder` 执行上下文中声明了一个名为 `ret` 的新变量。

14. 第 `4` 行。将变量 `a` 的内容和变量 `b` 的内容相加得 `15` 并赋给 `ret` 变量。

15. `ret` 变量从该函数返回。这个匿名函数执行上下文被销毁，从调用堆栈中删除，变量 `a`、`b` 和 `ret` 不再存在。

16. 返回值被分配给我们在步骤 `9` 中定义的 `sum` 变量。

17. 我们将 `sum` 的值打印到控制台。

18. 如预期，控制台将打印 15。我们在这里确实经历了很多困难，我想在这里说明几点。首先，函数定义可以存储在变量中，函数定义在程序调用之前是不可见的。其次，每次调用函数时，都会 (临时) 创建一个本地执行上下文。当函数完成时，执行上下文将消失。函数在遇到 `return` 或右括号 `}` 时执行完成。

## 一个闭包

下面这段代码会输出什么？

```
 1: function createCounter() {
 2:   let counter = 0
 3:   const myFunction = function() {
 4:     counter = counter + 1
 5:     return counter
 6:   }
 7:   return myFunction
 8: }
 9: const increment = createCounter()
10: const c1 = increment()
11: const c2 = increment()
12: const c3 = increment()
13: console.log('example increment: ', c1, c2, c3)
```

答案：`example increment: 123`

为什么不是 `example increment: 111` 呢？ 在第 `9` 行 `increment` 变量不是只是一个 `myFunction` 的函数定义吗？那么当 `c1` `c2` `c3` 调用它的时候， `counter` 不是会从 `undefined` 开始加 `1`，然后被销毁吗？不知怎么滴，`increment` 函数记住了那个 `cunter` 的值。这是怎么回事?

==> `闭包机制`

```
无论何时声明新函数并将其赋值给变量，都要存储函数定义和闭包。闭包包含在函数创建时作用域（函数内部）中的所有变量，它类似于背包。函数定义附带一个小背包，它的包中存储了函数定义创建时作用域中的所有变量。
```

```
闭包本质就是：上级作用域内变量的生命周期，因为被下级作用域内引用，而没有被释放。就导致上级作用域内的变量，等到下级作用域执行完以后才正常得到释放。

「函数」和「函数内部能访问到的变量」的总和，就是一个闭包。
```

## 另一个闭包

下面这段代码会输出什么？

```
let c = 4
function addX(x) {
  return function(n) {
     return n + x
  }
}
// const addX = x => n => n + x
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application: ', d)
```

答案：`example partial application: 7`

简单来说，`addThree` 调用了函数 `addX`，并且得到一个 function 的定义 + 一个闭包（这个闭包中有变量 `X = 3`）。

紧接着，变量 `d` 调用了 `addThree`，相当于调用了一个带有闭包的 function，最终得到了结果 `7`。

## 闭包的应用

### 1. 模拟 Java Class 中的 私有变量

下面这个程序会输出什么？

```
function foo() {
  const secret = Math.trunc(Math.random()*100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() // `secret` is not directly accessible from outside `foo`
f() // The only way to retrieve `secret`, is to invoke `f`
```

答案：`The secret number is 70.` (一个 `0-100` 之间的随机整数)

上面的例子告诉我们，`secret` 是一个 “私有变量”。因为 `f` 调用了 `foo()`，得到的是另一个 function 叫做 `inner`，并且带有一个闭包。而实际上这个闭包中，存在变量 `secret`。因此，只有当调用 `f()` 时，`secrect` 变量才能够显示出来。

### 2. 函数柯里化

```
function curry(fn) {
  const args = []
  return function inner(arg) {
    if(args.length === fn.length) return fn(...args)
    args.push(arg)
    return inner
  }
}

function add(a, b) {
  return a + b
}

const curriedAdd = curry(add)
console.log(curriedAdd(2)(3)()) // 5
```

在上面的例子中，`curry` 函数接收一个 `fn` 参数（是一个函数定义）。`curriedAdd` 调用 `curry` 并将函数 `add` 的定义传入 `curry`，返回 [ 函数 `inner`的定义，并带有一个闭包，这个闭包中存在变量 `args = [], fn = add` ]1⃣️。

此时，先看 `curriedAdd(2)`，相当于调用了一次 1⃣️，此时 `args.length = 0`， `fn.length = 2`。所以，`args = [2]`。

再看 `curriedAdd(2)(3)`，那么同理，此时 `args.length = 1`， `fn.length = 2`，所以 `args = [2, 3]`。

让我们再调用一次，`curriedAdd(2)(3)()`，此时 `args.length = fn.length = 2`，因此返回的不再是 1⃣️ 了，而是 `fn`，也就是 `add` 函数，`...args` 代表对 `args` 中的内容进行解构，所以我们可以认为，它返回的就是 `add(2,3)` 的结果，也就是 `5`。

### 3. 事件驱动式编程

```
const $ = document.querySelector.bind(document)
const BACKGROUND_COLOR = 'rgba(200,200,242,1)'

function onClick() {
  $('body').style.background = BACKGROUND_COLOR
}

$('button').addEventListener('click', onClick)
```

```
<button>Set background color</button>
```

`BACKGROUND_COLOR` 作为 `onClick` 函数的闭包变量。

### 4. 函数模块化

```
let namespace = {};

(function foo(n) {
  let numbers = []
  function format(n) {
    return Math.trunc(n)
  }
  function tick() {
    numbers.push(Math.random() * 100)
  }
  function toString() {
    return numbers.map(format)
  }
  n.counter = {
    tick,
    toString
  }
}(namespace))

const counter = namespace.counter
counter.tick()
counter.tick()
console.log(counter.toString())
```

变量 `numbers` 被放在闭包中被更新。

## Reference

1. [掘金：（前端小智）我从来不理解 JavaScript 闭包，直到有人这样向我解释它](https://juejin.cn/post/6844903858636849159)

2. [StackOverflow: How do JavaScript closures work?](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
