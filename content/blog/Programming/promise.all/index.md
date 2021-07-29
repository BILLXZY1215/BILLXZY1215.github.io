---
title: Promise.all
date: "2021-06-24"
type: Programming
description: "Promise.all race 和 any 的用法及区别"
cover: "https://z3.ax1x.com/2021/07/29/WbyZ0e.png"
---

## 概述

- `Promise.all()` 中的 Promise 序列会全部执行通过才认为是成功，否则认为是失败
- `Promise.race()` 中的 Promise 序列只关心第一个执行完毕的：如果第一个执行完毕的是通过，则认为成功，如果第一个执行完毕的 Promise 是拒绝，则认为失败
- `Promise.any()` 中的 Promise 序列只要有一个执行通过，则认为成功，如果全部拒绝，则认为失败 (有点像 OR)

## 思考 🤔

```
假设有三个async任务放进Promise，每个任务成功的概率为50%，那么对于 Promise.all, Promise.race 和 Promise.any 来说，成功的概率分别是多少？
```

- `Promise.all()` 50% \* 50% \*50% = 12.5%
- `Promise.race()` 50%
- `Promise.any()` 1 - 50% \* 50% \* 50% = 87.5%

## 使用场景

- `Promise.all()`
  在图片批量上传的时候很有用，可以知道什么时候这批图片全部上传完毕，保证了并行，同时知道最终的上传结果。
  又例如，页面进行请求的时候，如果请求时间太短，loading 图标就会一闪而过，体验并不好。`Promise.all()`可以保证最低 loading 时间。

- `Promise.race()`
  上面的 loading 策略仔细一想，有些怪怪的，请求本来很快，还非要显示一个 loading，这不是舍本逐末了吗？
  所以需求应该是这样，如果请求可以在 200ms 内完成，则不显示 loading，如果要超过 200ms，则至少显示 200ms 的 loading。
  这个需求可以用`Promise.race()`来实现。

- `Promise.any()`
  适合用在通过不同路径请求同一个资源的需求上。只要有一个路径请求成功就算成功。
  它是一个新出的规范，兼容性没有上面两个强。

---

## Reference

1. [张鑫旭的个人博客](https://www.zhangxinxu.com/wordpress/2021/05/promise-all-race-any/)
