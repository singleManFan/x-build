# X-BUILD

<a href="https://v3.cn.vuejs.org/" target="blank">
  <img src="https://img.shields.io/badge/vue-3.2.6-brightgreen.svg" />
</a>
<a href="https://www.npmjs.com/package/x-build" target="blank">
  <img src="https://img.shields.io/npm/v/x-build/next" />
</a>
<a href="https://github.com/code-device/x-build/actions" target="blank">
  <img src="https://github.com/code-device/x-build/workflows/GitHub%20Actions/badge.svg" />
</a>
<a href="https://github.com/code-device/x-build/blob/next/LICENSE" target="blank">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg" />
</a>
<a href="https://github.com/code-device/x-build" target="blank">
  <img src="https://img.shields.io/github/stars/code-device/x-build.svg?style=social&label=Stars" />
</a>

<style>
a img{ padding-right: 5px; }
</style>

一款协助你快速从"零"搭建大型应用的前端脚手架。

## 简介

**X-BUILD** 基于 [vue3](https://v3.cn.vuejs.org/) + typescript，使用 Vite 构建项目，支持众多的开箱即用的功能和针对项目进行了不同程度的优化。不同于众多的中后台解决方案（[ant-design-pro](https://pro.ant.design/docs/getting-started-cn)、[vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/)、[d2-admin](https://d2.pub/zh/doc/d2-admin/) 等）。它的宗旨是快速创建一套**纯净**却具备强大基础功能的模板，协助开发者自由发挥快速搭建任何类型的项目。

另一个强大的功能，就是基于 Lerna 实现的包管理功能，如果你正负责一个前端团队，那这项功能将极大的提升你的团队开发效率，具体使用请查看[packages](/packages)。

::: tip 基础
在使用此脚手架前，请确保你对以下的技术有足够的知识储备：

- [Vue3](https://v3.cn.vuejs.org/)
- [VueRouter](https://next.router.vuejs.org/)
- [Pinia](https://pinia.esm.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://cn.vitejs.dev/)
- [Tailwind.css](https://tailwindcss.com/)
:::

## 如何使用？

### CLI

你可以通过全局安装 `X-BUILD`，它本质上是一款 `CLI` (command-line interface，中文：命令行界面) ，提供了一系列的选项，为你生成一套适合于你的前端开发模板，这套模板已经提供了许多通用的基础功能，为你的项目打下坚实的基础。

### 基于 X-BUILD 打造自己的脚手架

通常情况下，每个团队的习惯不同，尽管 `X-BUILD` 提供了可选项辅助生成个性化模板，但不能满足所有人的需求，所以基于 `X-BUILD` 打造一套自己的脚手架是一个更好的选择，你可以通过 `Fork` 本仓库，修改成你的团队的开发习惯。

并且你可以私人订制[拓展](/packages)功能，为你的团队创建更多通用的业务组件或工具。

## 核心功能

脚手架可以快速帮你创建一份空白模板，提供了许多通用的功能：

### 应用

- 提供`环境变量`：开发环境、预生产环境、生产环境
- 基于 `Pinia` 实现的全局状态管理，更好的支持 TS
- 提供一个基于 `mitt` 的组件联动交互的解决方案
- 提供实用 `Hooks`，更多情况下推荐使用 [vueuse](https://vueuse.org/guide/)
- 基于 `axios` 异步请求封装
- 基于环境变量的静态资源组件
- 自动加载 `SVG` 的图标组件，雪碧图打包
- 页面登录访问权限、指令权限
- 页面缓存（基于 `keep-alive` 实现）
- 支持 `gzip`

### UI

- 可选 `Less` 或 `Sass/Scss` 预处理器
- 根据路由与环境变量自动变化标签栏 Title
- 静态资源加载页面
- 页面载入进度条

### 规范

- ESLint **Airbnb** 规范
- Stylelint
- husky & Commitlint

> 虽然严格的规范让开发过程中产生不快，但坚持一阵你会发现这种功能很棒！

## 浏览器支持

本地开发：推荐使用 <Badge text="Chrome" vertical="middle" /> 最新版浏览器，不支持 Chrome 80 以下版本。

生产环境：支持现代浏览器, **不支持 <Badge type="danger" text="IE" vertical="middle" />**。

| IE          | Edge            | Firefox         | Chrome          | Safari          |
| ----------- | --------------- | --------------- | --------------- | --------------- |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 贡献代码

文档代码在项目的 `/document` 中，由于文档中有部分 vue3 的功能演示，所以采用 vuepress2 开发。

有任何修改和建议都可以该项目 pr 和 issue，详情请参考 [贡献代码](/Contribution/README.md)。
