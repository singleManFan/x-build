(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{383:function(t,v,r){"use strict";r.r(v);var a=r(26),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vue-代码规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-代码规范"}},[t._v("#")]),t._v(" Vue 代码规范")]),t._v(" "),r("h2",{attrs:{id:"数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),r("ul",[r("li",[t._v("当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数 "),r("code",[t._v("data() { return {...} }")]),t._v("。")]),t._v(" "),r("li",[t._v("prop 的定义应该尽量详细，至少需要指定其类型。")]),t._v(" "),r("li",[t._v("布尔类型的 attribute， 为 true 时直接写属性值。")]),t._v(" "),r("li",[t._v("不要在computed中对vue变量进行操作。")]),t._v(" "),r("li",[t._v("应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。")])]),t._v(" "),r("h2",{attrs:{id:"v-for"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v-for"}},[t._v("#")]),t._v(" v-for")]),t._v(" "),r("ul",[r("li",[t._v("在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。")]),t._v(" "),r("li",[t._v("v-if 和 v-for 不能同时使用")])]),t._v(" "),r("h2",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),r("ul",[r("li",[t._v("公共方法尽量不要挂到原型上, 可以写在 utils 文件，也可以使用 mixin 文件。不要将业务公共组件注册到全局。")]),t._v(" "),r("li",[t._v("不要将任何第三方插件挂载到 vue 原型上。")]),t._v(" "),r("li",[t._v("具有高度通用性的方法，要封装到 libs、全局组件或指令集里。")]),t._v(" "),r("li",[t._v("为组件样式设置作用域。")]),t._v(" "),r("li",[t._v("尽量使用指令缩写。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);