(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-13a9"],{"4Z42":function(t,e,s){},STwk:function(t,e,s){"use strict";var n=s("vXhw");s.n(n).a},YCfC:function(t,e,s){"use strict";var n=s("4Z42");s.n(n).a},agKp:function(t,e,s){"use strict";s.r(e);var n={data:function(){return{cmd1:["undo","redo","painter","eraser"],cmd2:[{title:"正文",size:"H1"},{title:"标题",size:"H2"},{title:"副标题",size:"H3"},{title:"标题1",size:"H4"},{title:"标题2",size:"H5"},{title:"标题3",size:"H6"}]}},methods:{command:function(t,e){switch(e){case"main":t.target.className.indexOf("expanded")<0?t.target.className+=" byq-picker-expanded":t.target.className="byq-picker-label";break;case"undo":document.execCommand("underline",!1)}},artList:function(t){document.execCommand("Bold",!1)}}},i=(s("i2sA"),s("KHd+")),a=Object(i.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"byq-toolbar"},[s("span",{staticClass:"byq-formats"},t._l(t.cmd1,function(e){return s("button",{key:e,staticClass:"byq-cmd",class:e,on:{click:function(s){t.command(s,e)}}},[s("svg-icon",{attrs:{name:e}})],1)}),0),t._v(" "),s("span",{staticClass:"byq-formats"},[s("span",{staticClass:"byq-header byq-picker"},[s("span",{staticClass:"byq-picker-label",attrs:{"area-label":"正文"},on:{mouseenter:function(e){e.stopPropagation(),t.command(e,"main")}}},[s("svg-icon",{attrs:{name:"arrowBottom",size:12}})],1),t._v(" "),s("ul",{directives:[{name:"exc",rawName:"v-exc"}],staticClass:"byq-picker-options"},t._l(t.cmd2,function(e){return s("li",{key:e.title,style:{fontSize:e.size},on:{click:function(s){t.artList(e.size)}}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),0)])])])},[],!1,null,null,null);a.options.__file="rich-head.vue";var c=a.exports,r={props:{styles:{type:Object,default:function(){return{}}}},components:{ByqHead:c},methods:{},mounted:function(){}},o=(s("STwk"),Object(i.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"byq-editor-wrap",style:this.styles},[e("byq-head"),this._v(" "),this._m(0)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"byq-editor"},[e("div",{staticClass:"byq-title-box"},[e("input",{attrs:{type:"text",placeholder:"标题"}})]),this._v(" "),e("div",{staticClass:"byq-wrap",attrs:{contentEditable:"true"}})])}],!1,null,null,null));o.options.__file="index.vue";var l={components:{RichEditor:o.exports}},u=(s("YCfC"),Object(i.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rich-editor components-wrap"},[e("rich-editor")],1)},[],!1,null,null,null));u.options.__file="richEditor.vue";e.default=u.exports},gaWZ:function(t,e,s){},i2sA:function(t,e,s){"use strict";var n=s("gaWZ");s.n(n).a},vXhw:function(t,e,s){}}]);