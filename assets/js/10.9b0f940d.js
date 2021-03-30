(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{361:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),e("p",[t._v("本节将介绍如何在全局环境安装 X-BUILD 和通过命令行快速的生成项目。")]),t._v(" "),e("h2",{attrs:{id:"安装-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-cli"}},[t._v("#")]),t._v(" 安装 CLI")]),t._v(" "),e("h3",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),e("ul",[e("li",[t._v("需要在本地安装 "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("git"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("（可选）全局安装 vue-cli@4.5，本项目基于 vue-cli@4.5 构建，理论上支持所有功能。")])]),t._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("我们推荐使用 npm 的方式进行"),e("strong",[t._v("全局")]),t._v("安装：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install x-build -g\n")])])]),e("p",[t._v("mac、linux 用户需要权限增加 sudo。")]),t._v(" "),e("p",[t._v("使用方式类似于 @vue/cli，提供了终端里的 x-build 或 x（简写）命令。")]),t._v(" "),e("h2",{attrs:{id:"相关工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关工具"}},[t._v("#")]),t._v(" 相关工具")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Dev-Tools"),e("OutboundLink")],1),t._v(": Vue 在浏览器下的调试工具。")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/vuejs/vetur",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vetur"),e("OutboundLink")],1),t._v(": VS Code 插件。")])])]),t._v(" "),e("h2",{attrs:{id:"创建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),e("h3",{attrs:{id:"创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),e("p",[t._v("通过以下指令创建一个新项目：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("x create [name]\n")])])]),e("h3",{attrs:{id:"安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),e("ul",[e("li",[t._v("输入命令后，模板文件会自动创建名字为[name] 的文件夹，并将模板文件复制到此文件夹内。")]),t._v(" "),e("li",[t._v("自动初始化 Git。")]),t._v(" "),e("li",[t._v("依赖会自动安装，会跟你你所安装的包管理工具按优先级选择：")])]),t._v(" "),e("p",[t._v("优先级：yarn > npm")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 yarn 替代 npm。")])]),t._v(" "),e("h3",{attrs:{id:"创建完成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建完成"}},[t._v("#")]),t._v(" 创建完成")]),t._v(" "),e("p",[t._v("根据安装后的相关提示，输入相关命令以继续。")]),t._v(" "),e("h3",{attrs:{id:"开发与生产"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发与生产"}},[t._v("#")]),t._v(" 开发与生产")]),t._v(" "),e("p",[t._v("开发与生产环境与 @vue/cli 命令一致。")]),t._v(" "),e("p",[t._v("开发：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm run serve\n")])])]),e("p",[t._v("生产（测试环境）：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm run build:test\n")])])]),e("p",[t._v("生产（正式环境）：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm run build\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);