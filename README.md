# front-end-navigation

一个前端导航，可附加到谷歌扩展程序。

[![Build Status](https://travis-ci.com/yhlben/front-end-navigation.svg?branch=master)](https://travis-ci.com/yhlben/front-end-navigation)

## 使用方式

### 线上访问

直接访问线上地址：[Online](https://yhlben.github.io/front-end-navigation/)

### 添加到 Chrome 扩展。

添加到 Chrome 扩展后，每打开一个新标签页，就会默认打开导航页面。

1、 生成 chrome 扩展。

```sh
git clone https://github.com/yhlben/front-end-navigation.git
npm i
npm run build:chrome
```

2、 进入谷歌扩展 [Chrome extensions](chrome://extensions/)

3、 打开开发者模式。

4、 加载已解压的扩展程序。

## 贡献代码

本项目基于 element 设计，简洁直观，使用纯静态数据进行渲染，速度很快。

您可以自定义导航链接：

1、Fork it.

2、修改文件 src/db/db.js.

3、create pull request.

> 如果您有好的想法和建议，欢迎提 issue 或者直接 pull request，谢谢！
