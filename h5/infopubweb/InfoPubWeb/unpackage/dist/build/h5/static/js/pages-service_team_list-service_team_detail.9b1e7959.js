(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-service_team_list-service_team_detail"],{2217:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-purple2",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("团队详情")])],2),e("v-uni-view",{staticClass:"cu-card article"},[e("v-uni-view",{staticClass:"cu-item shadow"},[e("v-uni-view",{staticClass:"padding-xs flex align-center"},[e("v-uni-view",{staticClass:"flex-sub text-center"},[e("v-uni-view",{staticClass:"text-xl padding"},[e("v-uni-text",{staticClass:"text-black text-bold"},[t._v(t._s(t.team_detail_info.name))])],1)],1)],1),e("v-uni-view",{staticClass:"margin-left margin-right"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-purple text-lg "}),e("v-uni-text",{staticClass:"text-black text-df text-bold",staticStyle:{"margin-left":"5upx"}},[t._v("负责内容")])],1),e("v-uni-view",{staticClass:"text-content margin-top margin-botom",domProps:{innerHTML:t._s(t.team_detail_info.responsibilities)}})],1)],1)],1),e("v-uni-view",{staticClass:"cu-card article"},[e("v-uni-view",{staticClass:"cu-item shadow padding"},[e("v-uni-view",[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-purple text-lg "}),e("v-uni-text",{staticClass:"text-black text-df text-bold",staticStyle:{"margin-left":"5upx"}},[t._v("联系方式")])],1)],1),e("v-uni-view",{staticClass:"flex justify-between margin-top"},[e("v-uni-view",{staticClass:" margin-right"},[t._v("地址")]),e("v-uni-view",{staticClass:"flex"},[e("a",{staticClass:"content_flex",attrs:{href:t.baiduHref}},[e("v-uni-text",{staticClass:"text-right"},[t._v(t._s(t.team_detail_info.address))]),e("v-uni-text",{staticClass:"cuIcon-locationfill xl"})],1)])],1),e("v-uni-view",{staticClass:"flex justify-between margin-top",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onCall(t.team_detail_info.phone_number)}}},[e("v-uni-view",{staticClass:" margin-right"},[t._v("电话")]),e("v-uni-view",{staticClass:"flex"},[e("v-uni-text",{staticClass:"text-right margin-right-sm"},[t._v(t._s(t.team_detail_info.phone_number))]),e("v-uni-text",{staticClass:"cuIcon-phone xl"})],1)],1)],1)],1)],1)},s=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},2305:function(t,i,e){"use strict";e.r(i);var a=e("2217"),n=e("5521");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);var l,o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5bb0cb2a",null,!1,a["a"],l);i["default"]=c.exports},5521:function(t,i,e){"use strict";e.r(i);var a=e("5a51"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"5a51":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{team_detail_info:null,longitude:"",latitude:"",loc_name:"",baiduHref:""}},onLoad:function(t){if(console.log(t),void 0!==t.teamDetailInfo){var i=JSON.parse(decodeURIComponent(t.teamDetailInfo));this.team_detail_info=i,console.log("team detail"),console.log(i),this.longitude=i.longitude,this.latitude=i.latitude,this.loc_name=i.name,this.baiduHref="http://api.map.baidu.com/marker?location="+this.latitude+","+this.longitude+"&title="+this.loc_name+"&content=即将前往目的地&output=html",console.log(this.baiduHref)}},methods:{onCall:function(t){console.log(t),uni.makePhoneCall({phoneNumber:t,success:function(t){console.log("调用成功!")},fail:function(t){console.log("调用失败!")}})}}};i.default=a}}]);