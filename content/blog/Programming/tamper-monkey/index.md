---
title: tamperMonkey
date: "2021-06-28"
type: Programming
description: "tamperMonkey 初探，userScript 网页脚本的研究"
---

## 什么是 userScript 网页脚本

```
userscript 是一个程序，通常用JavaScript编写，用于修改网页以增强浏览。其用途包括添加快捷键、键盘快捷键、控制播放速度、向网站添加功能以及增强浏览历史记录。
```

## 什么是 tamperMonkey

Tampermonkey 是一个用户脚本管理器，可作为浏览器扩展提供。这个软件允许用户添加和使用 userscripts，这是可以用来修改网页的 JavaScript 程序。

在 [chrome 插件商城](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)中可以找到。

安装成功后，进入管理页面，可以控制现有 userScript 的启用或终止。

## tamperMonkey userScript

xxx.user.js 文件 头部:

```
// ==UserScript==
// @name         <文件名> xxx
// @namespace    一般习惯上写作用网址域名的反向：com.xxx.xxx
// @version      <版本号>
// @description  <描述说明>
// @author       <作者>
// @include    <url: 该userScript作用的地址>
// @run-at 触发这个 userScript 的时间，默认是 document-idle
// @grant <需要用到的API的名字>
// ==/UserScript==
```

注意要在前面加上 // 注释符号

详见 [tampermonkey doc](https://www.tampermonkey.net/documentation.php)

## Reference

1. [WikiPedia: UserScript](https://en.wikipedia.org/wiki/Userscript)
