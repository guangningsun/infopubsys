(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invest-apart_building_detail"],{1228:function(e,n,t){"use strict";t("acd8"),t("ac1f"),t("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{iframeURL:"https://mp.weixin.qq.com/s/0E2-jdsmE5JonoPVG6ekBg",nav_title:"公寓",detail_info:null,js_sdk_info:{nonceStr:"",timestamp:0,signature:""}}},onLoad:function(e){if(this.getAssetToken(),console.log(e),void 0!==e.detailInfo){var n=JSON.parse(decodeURIComponent(e.detailInfo));this.detail_info=n,this.iframeURL=this.detail_info.article_url,console.log("apartment building detail"),console.log(n)}void 0!==e.navTitle&&(this.nav_title=e.navTitle)},onShow:function(){this.getUrl(this.iframeURL)},methods:{successAccessCb:function(e){this.js_sdk_info.timestamp=e.data.timestamp,this.js_sdk_info.nonceStr=e.data.nonceStr,this.js_sdk_info.signature=e.data.signature,console.log(this.js_sdk_info);var n=t("b159");n.config({debug:!1,appId:getApp().globalData.appid,timestamp:this.js_sdk_info.timestamp,nonceStr:this.js_sdk_info.nonceStr,signature:this.js_sdk_info.signature,scale:22,jsApiList:["openLocation","getLocation"]}),n.ready((function(){console.log("ready!")})),n.error((function(e){console.log(e)}))},failAccessCb:function(e){console.log("api_get_access_token failed",e)},completeAccessCb:function(e){},getAssetToken:function(){this.requestWithMethod(getApp().globalData.api_get_access_token,"GET","",this.successAccessCb,this.failAccessCb,this.completeAccessCb)},onCall:function(e){console.log(e),uni.makePhoneCall({phoneNumber:e,success:function(e){console.log("调用成功!")},fail:function(e){console.log("调用失败!")}})},goToTecentMap:function(e){console.log("wx");var n=t("b159");n.openLocation({latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude),name:e.name,address:e.address})},onNavigate:function(e){this.goToTecentMap(e)},getUrl:function(e){var n="http:"===window.location.protocol?"http:":"https:",t=n+"//cors-anywhere.herokuapp.com/"+e;this.$axios.get(t).then((function(e){var n=e.data;n=n.replace(/data-src/g,"src").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g,"").replace(/https/g,"http");var t=n,i=document.getElementById("iFrame");i.src=t;var o=i.contentDocument||i.document;o.write(t),o.getElementById("js_content").style.visibility="visible"}),(function(e){console.log(e)}))}}};n.default=i},1803:function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,"#iframeContain[data-v-3a526b60]{width:100%;height:100%}",""]),e.exports=n},"40df":function(e,n,t){"use strict";var i=t("ff42"),o=t.n(i);o.a},5757:function(e,n){function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}e.exports=t},"63d2":function(e,n,t){"use strict";t.r(n);var i=t("1228"),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=o.a},"63d20":function(e,n,t){"use strict";var i,o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("cu-custom",{attrs:{bgColor:"bg-gradual-purple2",isBack:!0}},[t("template",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.nav_title))])],2),t("iframe",{staticStyle:{height:"1100upx",width:"100%"},attrs:{id:"iFrame",frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",scrolling:"yes",allowtransparency:"yes"}}),t("v-uni-view",{staticClass:"cu-card"},[t("v-uni-view",{staticClass:"cu-item shadow padding"},[t("v-uni-view",{staticClass:"action margin-botom-xl"},[t("v-uni-text",{staticClass:"cuIcon-titles text-purple "}),t("v-uni-text",{staticClass:"title text-purple"},[e._v("联系方式")])],1),t("v-uni-view",{staticClass:"flex justify-between margin-top solid-bottom padding-bottom",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onNavigate(e.detail_info)}}},[t("v-uni-view",{staticClass:"text-dark-grey margin-right"},[e._v("地址")]),t("v-uni-view",{staticClass:"flex"},[t("v-uni-text",{staticClass:"text-right margin-right-sm"},[e._v(e._s(e.detail_info.address))]),t("v-uni-text",{staticClass:"cuIcon-locationfill xl text-red"})],1)],1),t("v-uni-view",{staticClass:"flex justify-between margin-top",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onCall(e.detail_info.tel)}}},[t("v-uni-view",{staticClass:"text-dark-grey margin-right"},[e._v("电话")]),t("v-uni-view",{staticClass:"flex"},[t("v-uni-text",{staticClass:"text-right margin-right-sm"},[e._v(e._s(e.detail_info.tel))]),t("v-uni-text",{staticClass:"cuIcon-phone xl text-olive"})],1)],1)],1)],1)],1)},a=[];t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},b159:function(e,n,t){var i;t("c975"),t("ac1f"),t("466d"),t("5319"),t("1276");var o=t("5757");!function(o,a){i=function(){return a(o)}.call(n,t,n,e),void 0===i||(e.exports=i)}(window,(function(e,n){if(!e.jWeixin){var t,i,a={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},r=function(){var e={};for(var n in a)e[a[n]]=n;return e}(),s=e.document,c=s.title,d=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),u=!(!l.match("mac")&&!l.match("win")),p=-1!=d.indexOf("wxdebugger"),f=-1!=d.indexOf("micromessenger"),g=-1!=d.indexOf("android"),m=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),h=(i=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",v={initStartTime:E(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},_={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:m?1:g?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},w={},y={_completes:[]},S={state:0,data:{}};O((function(){v.initEndTime=E()}));var I=!1,k=[],T=(t={config:function(n){B("config",w=n);var t=!1!==w.check;O((function(){if(t)C(a.config,{verifyJsApiList:L(w.jsApiList),verifyOpenTagList:L(w.openTagList)},function(){y._complete=function(e){v.preVerifyEndTime=E(),S.state=1,S.data=e},y.success=function(e){_.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):S.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(u||p||w.debug||h<"6.0.2"||_.systemType<0)){var e=new Image;_.appId=w.appId,_.initTime=v.initEndTime-v.initStartTime,_.preVerifyTime=v.preVerifyEndTime-v.preVerifyStartTime,T.getNetworkType({isInnerInvoke:!0,success:function(n){_.networkType=n.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+_.version+"&o="+_.isPreVerifyOk+"&s="+_.systemType+"&c="+_.clientVersion+"&a="+_.appId+"&n="+_.networkType+"&i="+_.initTime+"&p="+_.preVerifyTime+"&u="+_.url;e.src=t}})}}()})),y.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();y._completes=[]},y}()),v.preVerifyStartTime=E();else{S.state=1;for(var e=y._completes,n=0,i=e.length;n<i;++n)e[n]();y._completes=[]}})),T.invoke||(T.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,A(t),i)},T.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},ready:function(e){0!=S.state?e():(y._completes.push(e),!f&&w.debug&&e())},error:function(e){h<"6.0.2"||(-1==S.state?e(S.data):y._fail=e)},checkJsApi:function(e){C("checkJsApi",{jsApiList:L(e.jsApiList)},(e._complete=function(e){if(g){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=r[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){M(a.onMenuShareTimeline,{complete:function(){C("shareTimeline",{title:e.title||c,desc:e.title||c,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){M(a.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?C("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):C("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){M(a.onMenuShareQQ,{complete:function(){C("shareQQ",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){M(a.onMenuShareWeibo,{complete:function(){C("shareWeiboApp",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){M(a.onMenuShareQZone,{complete:function(){C("shareQZone",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){C("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){C("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){C("startRecord",{},e)},stopRecord:function(e){C("stopRecord",{},e)},onVoiceRecordEnd:function(e){M("onVoiceRecordEnd",e)},playVoice:function(e){C("playVoice",{localId:e.localId},e)},pauseVoice:function(e){C("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){C("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){M("onVoicePlayEnd",e)},uploadVoice:function(e){C("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){C("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){C("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){C("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(g){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){C(a.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){C("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){C("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,C("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<k.length){var n=k.shift();wx.getLocalImgData(n)}},e))):k.push(e)},getNetworkType:function(e){C("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),o=n.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){C("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},o(t,"getLocation",(function(e){C(a.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),o(t,"hideOptionMenu",(function(e){C("hideOptionMenu",{},e)})),o(t,"showOptionMenu",(function(e){C("showOptionMenu",{},e)})),o(t,"closeWindow",(function(e){C("closeWindow",{},e=e||{})})),o(t,"hideMenuItems",(function(e){C("hideMenuItems",{menuList:e.menuList},e)})),o(t,"showMenuItems",(function(e){C("showMenuItems",{menuList:e.menuList},e)})),o(t,"hideAllNonBaseMenuItem",(function(e){C("hideAllNonBaseMenuItem",{},e)})),o(t,"showAllNonBaseMenuItem",(function(e){C("showAllNonBaseMenuItem",{},e)})),o(t,"scanQRCode",(function(e){C("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(m){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))})),o(t,"openAddress",(function(e){C(a.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),o(t,"openProductSpecificView",(function(e){C(a.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),o(t,"addCard",(function(e){for(var n=e.cardList,t=[],i=0,o=n.length;i<o;++i){var r=n[i],s={card_id:r.cardId,card_ext:r.cardExt};t.push(s)}C(a.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var o=n[t];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))})),o(t,"chooseCard",(function(e){C("chooseCard",{app_id:w.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),o(t,"openCard",(function(e){for(var n=e.cardList,t=[],i=0,o=n.length;i<o;++i){var r=n[i],s={card_id:r.cardId,code:r.code};t.push(s)}C(a.openCard,{card_list:t},e)})),o(t,"consumeAndShareCard",(function(e){C(a.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),o(t,"chooseWXPay",(function(e){C(a.chooseWXPay,P(e),e)})),o(t,"openEnterpriseRedPacket",(function(e){C(a.openEnterpriseRedPacket,P(e),e)})),o(t,"startSearchBeacons",(function(e){C(a.startSearchBeacons,{ticket:e.ticket},e)})),o(t,"stopSearchBeacons",(function(e){C(a.stopSearchBeacons,{},e)})),o(t,"onSearchBeacons",(function(e){M(a.onSearchBeacons,e)})),o(t,"openEnterpriseChat",(function(e){C("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),o(t,"launchMiniProgram",(function(e){C("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)})),o(t,"openBusinessView",(function(e){C("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(g){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))})),o(t,"miniProgram",{navigateBack:function(e){e=e||{},O((function(){C("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){O((function(){C("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){O((function(){C("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){O((function(){C("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){O((function(){C("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){O((function(){C("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){O((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),t),x=1,b={};return s.addEventListener("error",(function(e){if(!g){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=x++,n["wx-id"]=o),b[o])return;b[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}),!0),s.addEventListener("load",(function(e){if(!g){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(b[i]=!1)}}}),!0),n&&(e.wx=e.jWeixin=T),T}function C(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,A(t),(function(e){V(n,e,i)})):B(n,i)}function M(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),V(n,e,t)})):B(n,i||t)}function A(e){return(e=e||{}).appId=w.appId,e.verifyAppId=w.appId,e.verifySignType="sha1",e.verifyTimestamp=w.timestamp+"",e.verifyNonceStr=w.nonceStr,e.verifySignature=w.signature,e}function P(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function V(e,n,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=r[t];i&&(t=i);var o="ok";if(n){var a=n.indexOf(":");"confirm"==(o=n.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t+":"+o}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",w.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function L(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],o=a[i];o&&(e[n]=o)}return e}}function B(e,n){if(!(!w.debug||n&&n.isInnerInvoke)){var t=r[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function E(){return(new Date).getTime()}function O(n){f&&(e.WeixinJSBridge?n():s.addEventListener&&s.addEventListener("WeixinJSBridgeReady",n,!1))}}))},c4a0:function(e,n,t){"use strict";t.r(n);var i=t("63d20"),o=t("63d2");for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("40df");var r,s=t("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3a526b60",null,!1,i["a"],r);n["default"]=c.exports},ff42:function(e,n,t){var i=t("1803");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("22f7f352",i,!0,{sourceMap:!1,shadowMode:!1})}}]);