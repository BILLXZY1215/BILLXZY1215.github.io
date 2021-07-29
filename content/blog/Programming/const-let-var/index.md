---
title: "Const vs Let vs Var"
date: "2021-07-09"
type: Programming
description: " JS 三种定义变量的方式"
cover: "https://z3.ax1x.com/2021/07/29/WbRYJH.png"
---

## Const

### 定义时必须初始化

```
const hero = 'Batman';
```

```
const hero; // SyntaxError: Missing initializer in const declaration
```

```
const hero = 'Batman';
console.log(hero);              // logs 'Batman'
console.log(`Hello, ${hero}!`); // logs 'Hello, Batman!'
```

### 不能 reassign value

```
const hero = 'Batman';

hero = 'Joker'; // TypeError: Assignment to constant variable
```

### 块作用域限制

```
if (true) {
  // Code block scope
  const hero = 'Batman';
  console.log(hero); // logs 'Batman'
}
console.log(hero); // throws ReferenceError
```

```
function greetBatman() {
  // Function scope
  const hero = 'Batman';
  console.log(`Hello, ${hero}!`); // logs 'Hello, Batman!'
}
console.log(`Hello, ${hero}!`); // throws ReferenceError

greetBatman();
```

## Let

### 定义时不必初始化

```
let myVariable1 = initialValue;
// or
let myVariable2;
```

```
let villain = 'Joker';

let name;
```

```
let villain = 'Joker';

console.log(villain);              // logs 'Joker'
console.log(`Hello, ${villain}!`); // logs 'Hello, Joker!'

let name;
console.log(name); // logs undefined
```

### 可以 reassign value

```
let villain = 'Joker';

villain = 'Bane';
console.log(villain); // logs 'Bane'
```

### 块作用域限制

```
if (true) {
  // Code block scope
  let villain = 'Joker';
  console.log(villain); // logs 'Joker'
}
console.log(villain); // throws ReferenceError
```

```
function greetJoker() {
  // Function scope
  let villain = 'Joker';
  console.log(`Hello, ${villain}!`); // logs 'Hello, Joker!'
}
console.log(`Hello, ${villain}!`); // throws ReferenceError

greetJoker();
```

## Var

### 定义时不必初始化

```
var myVariable1 = initialValue;
// or
var myVariable2;
```

```
var city = 'Gotham';

var name;
```

```
var city = 'Gotham';

console.log(city);                  // logs 'Gotham'
console.log(`Welcome to ${city}!`); // logs 'Welcome to Gotham!'

var name;
console.log(name); // logs undefined
```

### 可以 reassign value

```
var city = 'Gotham';

city = 'New York';
console.log(city); // logs 'New York'
```

### 块作用域限制 （仅限 fucntion）

```
function welcomeTo() {
  // Function scope
  var city = 'Gotham';
  console.log(`Welcome to ${city}!`); // logs 'Welcome to Gotham!'
}
console.log(`Welcome to ${city}!`); // throws ReferenceError

welcomeTo();
```

```
if (true) {
  // Code block scope
  var city = 'Gotham';
  console.log(city); // logs 'Gotham'
}
console.log(city); // logs 'Gotham'
```

## 在定义之前调用？

```
console.log(hero); // throws ReferenceError
const hero = 'Batman';
```

```
console.log(villain); // throws ReferenceError
let villain = 'Joker';
```

```
console.log(city); // logs undefined
var city = 'Gotham';
```
