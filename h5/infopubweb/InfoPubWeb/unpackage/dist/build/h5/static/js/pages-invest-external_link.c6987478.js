(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invest-external_link"],{"2caf":function(t,e,n){"use strict";n.r(e);var i=n("c293"),a=n("b976");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var s,o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"3d460d9a",null,!1,i["a"],s);e["default"]=c.exports},"429c":function(t,e,n){t.exports=n.p+"static/img/loading-white.d715a84e.gif"},"7f54":function(t,e,n){"use strict";(function(t){n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{link:"",showLoading:!0}},onLoad:function(e){t("log",e," at pages/invest/external_link.vue:26"),void 0!==e.link&&(this.link=e.link,this.getUrl(this.link))},methods:{getUrl:function(e){var n=this;t("log","getUrl"," at pages/invest/external_link.vue:34");var i="http:"===window.location.protocol?"http:":"https:",a=i+"//cors-anywhere.herokuapp.com/"+e;this.$axios.get(a).then((function(t){var e=t.data;e=e.replace(/data-src/g,"src").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g,"").replace(/https/g,"http");var i=e,a=document.getElementById("iFrame");a.src=i;var r=a.contentDocument||a.document;r.write(i),r.getElementById("js_content").style.visibility="visible",n.showLoading=!1}),(function(e){t("log",e," at pages/invest/external_link.vue:58")}))}}};e.default=i}).call(this,n("0de9")["log"])},b976:function(t,e,n){"use strict";n.r(e);var i=n("7f54"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c293:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-purple2",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"})],2),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],staticClass:"bg-white flex-sub radius shadow-lg",attrs:{id:"loading"}},[i("v-uni-image",{staticClass:"gif-white response",staticStyle:{height:"240upx"},attrs:{src:n("429c"),mode:"aspectFit"}})],1),i("v-uni-view",[i("iframe",{staticStyle:{height:"1440upx",width:"100%"},attrs:{id:"iFrame",frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",scrolling:"yes",allowtransparency:"yes"}})])],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))}}]);