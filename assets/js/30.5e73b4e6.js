(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{381:function(s,t,e){"use strict";e.r(t);var v=e(26),a=Object(v.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"风格指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#风格指南"}},[s._v("#")]),s._v(" 风格指南")]),s._v(" "),e("p",[s._v("x-build 的风格指南主要是参照 vue 官方的"),e("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("风格指南"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"项目命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目命名"}},[s._v("#")]),s._v(" 项目命名")]),s._v(" "),e("p",[s._v("全部采用小写方式，以中划线分隔。")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("查看示例")]),s._v(" "),e("ul",[e("li",[s._v("x-build")])])]),s._v(" "),e("h2",{attrs:{id:"目录命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录命名"}},[s._v("#")]),s._v(" 目录命名")]),s._v(" "),e("p",[s._v("全部采用小写方式，以中划线分隔，有复数结构时，要采用复数命名法，缩写不用复数。")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("查看示例")]),s._v(" "),e("ul",[e("li",[s._v("styles")]),s._v(" "),e("li",[s._v("demo-styles")])])]),s._v(" "),e("h2",{attrs:{id:"命名严谨性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命名严谨性"}},[s._v("#")]),s._v(" 命名严谨性")]),s._v(" "),e("p",[s._v("代码中的命名严禁使用拼音，一律使用英文。")]),s._v(" "),e("ul",[e("li",[s._v("使用有意义，可读性好的变量名。")]),s._v(" "),e("li",[s._v("使用易于检索名称，例如常量需要定义全大写以下划线拼接的变量名。")])]),s._v(" "),e("h2",{attrs:{id:"组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[s._v("#")]),s._v(" 组件")]),s._v(" "),e("p",[s._v("所有的Component文件都是以大写开头 (PascalCase)，这也是"),e("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方"),e("OutboundLink")],1),s._v("所推荐的。")]),s._v(" "),e("p",[s._v("排除 index.vue 和 内置组件 wm-***。")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("查看示例")]),s._v(" "),e("ul",[e("li",[s._v("@/components/BackToTop/index.vue")]),s._v(" "),e("li",[s._v("@/components/Charts/Line.vue")]),s._v(" "),e("li",[s._v("@/views/example/components/Button.vue")])])]),s._v(" "),e("h2",{attrs:{id:"js-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-文件"}},[s._v("#")]),s._v(" JS 文件")]),s._v(" "),e("p",[s._v("所有的.js文件都遵循横线连接 (kebab-case)。")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("查看示例")]),s._v(" "),e("ul",[e("li",[s._v("@/utils/open-window.js")]),s._v(" "),e("li",[s._v("@/views/svg-icons/require-icons.js")]),s._v(" "),e("li",[s._v("@/components/MarkdownEditor/default-options.js")])])]),s._v(" "),e("h2",{attrs:{id:"页面-views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面-views"}},[s._v("#")]),s._v(" 页面 Views")]),s._v(" "),e("p",[s._v("在views文件下，代表路由的.vue文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("查看示例")]),s._v(" "),e("ul",[e("li",[s._v("@/views/svg-icons/index.vue")]),s._v(" "),e("li",[s._v("@/views/svg-icons/require-icons.js")])])]),s._v(" "),e("p",[s._v("使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。")]),s._v(" "),e("ul",[e("li",[s._v("横线连接 (kebab-case) 是官方推荐的命名规范")]),s._v(" "),e("li",[s._v("views 下的.vue文件代表的是一个路由，所以它需要和component进行区分(component 都是大写开头)")]),s._v(" "),e("li",[s._v("页面的url 也都是横线连接的，比如https://www.xxx.com/xxx，所以路由对应的view应该要保持统一")]),s._v(" "),e("li",[s._v("没有大小写敏感问题")])]),s._v(" "),e("h2",{attrs:{id:"注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),e("ul",[e("li",[s._v("只对存在一定业务逻辑复杂性的代码进行注释。")]),s._v(" "),e("li",[s._v("不要在代码库中遗留被注释掉的代码。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);