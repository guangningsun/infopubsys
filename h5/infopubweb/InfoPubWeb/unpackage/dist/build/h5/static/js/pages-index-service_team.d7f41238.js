(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-service_team"],{"01bb":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{team_list:[]}},onLoad:function(){},methods:{successCb:function(t){console.log(t),0===t.data.error&&(this.team_list=t.data.msg.user_info)},failCb:function(t){console.log("api_get_team failed",t)},completeCb:function(t){},loadData:function(){this.requestWithMethod(getApp().globalData.api_get_team,"GET","",this.successCb,this.failCb,this.completeCb)},onClickServiceTeam:function(){uni.navigateTo({url:"../service_team_list/service_team_list"})}}};e.default=a},"03ec":function(t,e,i){"use strict";var a=i("ee80"),n=i.n(a);n.a},"05e9":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".bg-set[data-v-46415b18]{position:fixed;width:100%;height:100%;top:0;left:0;z-index:-1}.btnlg[data-v-46415b18]{padding:%?130?% %?80?%;font-size:%?50?%;height:%?100?%}#animat[data-v-46415b18]{position:relative;animation:mymove-data-v-46415b18 3s infinite;-webkit-animation:mymove-data-v-46415b18 3s infinite; /*Safari and Chrome*/animation-direction:alternate;/*轮流反向播放动画。*/animation-timing-function:ease-in-out; /*动画的速度曲线*/\n\t/* Safari 和 Chrome */-webkit-animation:mymove-data-v-46415b18 3s infinite;-webkit-animation-direction:alternate;/*轮流反向播放动画。*/-webkit-animation-timing-function:ease-in-out /*动画的速度曲线*/}@keyframes mymove-data-v-46415b18{0%{-webkit-transform:scale(1);transform:scale(1)  /*开始为原始大小*/}25%{-webkit-transform:scale(1.1);transform:scale(1.1) /*放大1.06倍*/}50%{-webkit-transform:scale(1);transform:scale(1)}75%{-webkit-transform:scale(1.1);transform:scale(1.1)}}@-webkit-keyframes mymove-data-v-46415b18{0%{-webkit-transform:scale(1);transform:scale(1)  /*开始为原始大小*/}25%{-webkit-transform:scale(1.1);transform:scale(1.1) /*放大1.06倍*/}50%{-webkit-transform:scale(1);transform:scale(1)}75%{-webkit-transform:scale(1.1);transform:scale(1.1)}}",""]),t.exports=e},"22a4":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-image",{staticClass:"bg-set",attrs:{src:i("3536")}}),a("v-uni-view",{staticClass:" justify-center",staticStyle:{"padding-top":"250upx",width:"100%","margin-left":"120upx"}},[a("v-uni-image",{staticStyle:{width:"530upx",height:"350upx"},attrs:{src:i("4684"),id:"animat"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickServiceTeam.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:" justify-center"},[a("v-uni-view",{staticClass:"flex margin-top-lg padding-right padding-left-xl"},[a("v-uni-view",{staticStyle:{"background-color":"#ffffff",width:"10upx",height:"200upx"}}),a("v-uni-view",{staticClass:"margin-left-sm"},[a("v-uni-view",{staticClass:"text-white text-xl margin-left-sm"},[t._v("天津经济技术开发区管理委员会")]),a("v-uni-view",{staticClass:"text-white text-lg margin-left-sm margin-top-sm",staticStyle:{opacity:"0.7"}},[t._v("联系方式：022-25201111")]),a("v-uni-view",{staticClass:"text-white text-lg margin-left-sm",staticStyle:{opacity:"0.7"}},[t._v("地址：于家堡金融区融义路与金滨道交口宝信大厦")])],1)],1)],1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},3536:function(t,e,i){t.exports=i.p+"static/img/team_bg.f1cd114f.png"},"370e":function(t,e,i){"use strict";i.r(e);var a=i("22a4"),n=i("a64d");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("03ec");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"46415b18",null,!1,a["a"],o);e["default"]=c.exports},4684:function(t,e,i){t.exports=i.p+"static/img/service_title.5f7f9642.png"},a64d:function(t,e,i){"use strict";i.r(e);var a=i("01bb"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},ee80:function(t,e,i){var a=i("05e9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1816c0ca",a,!0,{sourceMap:!1,shadowMode:!1})}}]);