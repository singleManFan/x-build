(self.webpackChunk=self.webpackChunk||[]).push([[6376],{6376:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return s}});var n=a(6252),o=a(3577);const t=(0,n.HX)("data-v-6d7760d7");(0,n.dD)("data-v-6d7760d7");const r={style:{"padding-top":"16px"}},c=(0,n.Wm)("li",{class:"head"},[(0,n.Wm)("div",null,"说明"),(0,n.Wm)("div",null,"值"),(0,n.Wm)("div",null,"变量"),(0,n.Wm)("span",null,"操作")],-1);(0,n.Cn)();const i=t(((e,l,a,t,i,u)=>((0,n.wg)(),(0,n.j4)("div",r,[(0,n.Wm)("ul",null,[c,((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.colorData,((l,a)=>((0,n.wg)(),(0,n.j4)("li",{class:["size","标题"===l.name?"colors":""],key:a,style:{color:l.value}},[(0,n.Wm)("div",null,(0,o.zw)(l.explain),1),(0,n.Wm)("div",null,(0,o.zw)(l.value),1),(0,n.Wm)("div",null,(0,o.zw)(l.variable),1),(0,n.Wm)("span",null,[(0,n.Wm)("a",{onClick:a=>e.copyText(l.variable)},"复制",8,["onClick"])])],6)))),128))])]))));var u=a(2262),d=a(5684),v=(0,n.aZ)({setup(){let{copyText:e}=(0,d.Z)();return{colorData:(0,u.qj)([{explain:"主色调",value:"#1BA2FF",variable:"$primary-color"},{explain:"成功",value:"#24CBB2",variable:"$success-color"},{explain:"失败",value:"#DF0140",variable:"$error-color"},{explain:"警告",value:"#FAE053",variable:"$warning-color"},{explain:"正文",value:"#051724",variable:"$text-color"},{explain:"标题",value:"$text-color",variable:"$title-color"},{explain:"注释",value:"#CDD0D3",variable:"$notes-color"},{explain:"数字",value:"#1BA2FF",variable:"$number-color"}]),copyText:e}}});v.render=i,v.__scopeId="data-v-6d7760d7";var s=v},5684:function(e,l){"use strict";l.Z=()=>{const e=(()=>{const e=document.createElement("div");return e.style.whiteSpace="pre",e})();return{copyText:l=>{if(!l)return;const a=window.getSelection();if(!a)return;const n=document.createRange();e.textContent=l,document.body.appendChild(e),n.selectNode(e),a.removeAllRanges(),a.addRange(n);try{document.execCommand("Copy")}catch(e){console.error("copy failed!")}a.removeAllRanges(),e.textContent="",document.body.removeChild(e)}}}}}]);