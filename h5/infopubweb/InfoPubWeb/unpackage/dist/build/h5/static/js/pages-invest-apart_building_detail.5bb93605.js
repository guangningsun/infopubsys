(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invest-apart_building_detail"],{1228:function(e,t,i){"use strict";(function(e){i("acd8"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{iframeURL:"https://mp.weixin.qq.com/s/0E2-jdsmE5JonoPVG6ekBg",nav_title:"公寓",detail_info:null,js_sdk_info:{nonceStr:"",timestamp:0,signature:""},showLoading:!0}},onLoad:function(t){if(this.getAssetToken(),e("log",t," at pages/invest/apart_building_detail.vue:76"),void 0!==t.detailInfo){var i=JSON.parse(decodeURIComponent(t.detailInfo));this.detail_info=i,this.iframeURL=this.detail_info.article_url,e("log","apartment building detail"," at pages/invest/apart_building_detail.vue:81"),e("log",i," at pages/invest/apart_building_detail.vue:82"),this.getUrl(this.iframeURL)}void 0!==t.navTitle&&(this.nav_title=t.navTitle)},onShow:function(){e("log","onShow!======"," at pages/invest/apart_building_detail.vue:92")},onReady:function(){e("log","ready!!!!!!!!!!!!!"," at pages/invest/apart_building_detail.vue:95")},methods:{successAccessCb:function(t){this.js_sdk_info.timestamp=t.data.timestamp,this.js_sdk_info.nonceStr=t.data.nonceStr,this.js_sdk_info.signature=t.data.signature,e("log",this.js_sdk_info," at pages/invest/apart_building_detail.vue:104");var n=i("b159");n.config({debug:!1,appId:getApp().globalData.appid,timestamp:this.js_sdk_info.timestamp,nonceStr:this.js_sdk_info.nonceStr,signature:this.js_sdk_info.signature,scale:22,jsApiList:["openLocation","getLocation"]}),n.ready((function(){e("log","ready!"," at pages/invest/apart_building_detail.vue:118")})),n.error((function(t){e("log",t," at pages/invest/apart_building_detail.vue:123")}))},failAccessCb:function(t){e("log","api_get_access_token failed",t," at pages/invest/apart_building_detail.vue:127")},completeAccessCb:function(e){},getAssetToken:function(){this.requestWithMethod(getApp().globalData.api_get_access_token,"GET","",this.successAccessCb,this.failAccessCb,this.completeAccessCb)},onCall:function(t){e("log",t," at pages/invest/apart_building_detail.vue:143"),uni.makePhoneCall({phoneNumber:t,success:function(t){e("log","调用成功!"," at pages/invest/apart_building_detail.vue:150")},fail:function(t){e("log","调用失败!"," at pages/invest/apart_building_detail.vue:155")}})},goToTecentMap:function(t){e("log","wx"," at pages/invest/apart_building_detail.vue:160");var n=i("b159");n.openLocation({latitude:parseFloat(t.latitude),longitude:parseFloat(t.longitude),name:t.name,address:t.address})},onNavigate:function(e){this.goToTecentMap(e)},getUrl:function(t){var i=this;e("log","getUrl"," at pages/invest/apart_building_detail.vue:176");var n="http:"===window.location.protocol?"http:":"https:",a=n+"//cors-anywhere.herokuapp.com/"+t;this.$axios.get(a).then((function(e){var t=e.data;t=t.replace(/data-src/g,"src").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g,"").replace(/https/g,"http");var n=t,a=document.getElementById("iFrame");a.src=n;var o=a.contentDocument||a.document;o.write(n),o.getElementById("js_content").style.visibility="visible",i.showLoading=!1}),(function(t){e("log",t," at pages/invest/apart_building_detail.vue:203")}))}}};t.default=n}).call(this,i("0de9")["log"])},"429c":function(e,t,i){e.exports=i.p+"static/img/loading-white.d715a84e.gif"},5757:function(e,t){function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.exports=i},"597e":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"#iframeContain[data-v-406d70d3]{width:100%;height:100%}.loading_bg[data-v-406d70d3]{position:fixed;width:100%;height:100%;top:0;left:0;z-index:-1}",""]),e.exports=t},"63d2":function(e,t,i){"use strict";i.r(t);var n=i("1228"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"728b":function(e,t,i){"use strict";var n=i("c25a"),a=i.n(n);a.a},b159:function(e,t,i){(function(n){var a;i("c975"),i("ac1f"),i("466d"),i("5319"),i("1276");var o=i("5757");!function(n,o){a=function(){return o(n)}.call(t,i,t,e),void 0===a||(e.exports=a)}(window,(function(e,t){if(!e.jWeixin){var i,a,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},s=function(){var e={};for(var t in r)e[r[t]]=t;return e}(),c=e.document,d=c.title,l=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),p=!(!u.match("mac")&&!u.match("win")),f=-1!=l.indexOf("wxdebugger"),g=-1!=l.indexOf("micromessenger"),m=-1!=l.indexOf("android"),v=-1!=l.indexOf("iphone")||-1!=l.indexOf("ipad"),h=(a=l.match(/micromessenger\/(\d+\.\d+\.\d+)/)||l.match(/micromessenger\/(\d+\.\d+)/))?a[1]:"",_={initStartTime:O(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},w={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:m?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},y={},S={_completes:[]},I={state:0,data:{}};N((function(){_.initEndTime=O()}));var k=!1,b=[],x=(i={config:function(t){E("config",y=t);var i=!1!==y.check;N((function(){if(i)M(r.config,{verifyJsApiList:B(y.jsApiList),verifyOpenTagList:B(y.openTagList)},function(){S._complete=function(e){_.preVerifyEndTime=O(),I.state=1,I.data=e},S.success=function(e){w.isPreVerifyOk=0},S.fail=function(e){S._fail?S._fail(e):I.state=-1};var e=S._completes;return e.push((function(){!function(){if(!(p||f||y.debug||h<"6.0.2"||w.systemType<0)){var e=new Image;w.appId=y.appId,w.initTime=_.initEndTime-_.initStartTime,w.preVerifyTime=_.preVerifyEndTime-_.preVerifyStartTime,x.getNetworkType({isInnerInvoke:!0,success:function(t){w.networkType=t.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+w.version+"&o="+w.isPreVerifyOk+"&s="+w.systemType+"&c="+w.clientVersion+"&a="+w.appId+"&n="+w.networkType+"&i="+w.initTime+"&p="+w.preVerifyTime+"&u="+w.url;e.src=i}})}}()})),S.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();S._completes=[]},S}()),_.preVerifyStartTime=O();else{I.state=1;for(var e=S._completes,t=0,n=e.length;t<n;++t)e[t]();S._completes=[]}})),x.invoke||(x.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,P(i),n)},x.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=I.state?e():(S._completes.push(e),!g&&y.debug&&e())},error:function(e){h<"6.0.2"||(-1==I.state?e(I.data):S._fail=e)},checkJsApi:function(e){M("checkJsApi",{jsApiList:B(e.jsApiList)},(e._complete=function(e){if(m){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=s[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){A(r.onMenuShareTimeline,{complete:function(){M("shareTimeline",{title:e.title||d,desc:e.title||d,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){A(r.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?M("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):M("sendAppMessage",{title:e.title||d,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){A(r.onMenuShareQQ,{complete:function(){M("shareQQ",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){A(r.onMenuShareWeibo,{complete:function(){M("shareWeiboApp",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){A(r.onMenuShareQZone,{complete:function(){M("shareQZone",{title:e.title||d,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){M("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){M("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){M("startRecord",{},e)},stopRecord:function(e){M("stopRecord",{},e)},onVoiceRecordEnd:function(e){A("onVoiceRecordEnd",e)},playVoice:function(e){M("playVoice",{localId:e.localId},e)},pauseVoice:function(e){M("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){M("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){A("onVoicePlayEnd",e)},uploadVoice:function(e){M("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){M("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){M("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){M("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){M(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){M("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){M("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===k?(k=!0,M("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(k=!1,0<b.length){var t=b.shift();wx.getLocalImgData(t)}},e))):b.push(e)},getNetworkType:function(e){M("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),a=t.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){M("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},o(i,"getLocation",(function(e){M(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),o(i,"hideOptionMenu",(function(e){M("hideOptionMenu",{},e)})),o(i,"showOptionMenu",(function(e){M("showOptionMenu",{},e)})),o(i,"closeWindow",(function(e){M("closeWindow",{},e=e||{})})),o(i,"hideMenuItems",(function(e){M("hideMenuItems",{menuList:e.menuList},e)})),o(i,"showMenuItems",(function(e){M("showMenuItems",{menuList:e.menuList},e)})),o(i,"hideAllNonBaseMenuItem",(function(e){M("hideAllNonBaseMenuItem",{},e)})),o(i,"showAllNonBaseMenuItem",(function(e){M("showAllNonBaseMenuItem",{},e)})),o(i,"scanQRCode",(function(e){M("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(v){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),o(i,"openAddress",(function(e){M(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),o(i,"openProductSpecificView",(function(e){M(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),o(i,"addCard",(function(e){for(var t=e.cardList,i=[],n=0,a=t.length;n<a;++n){var o=t[n],s={card_id:o.cardId,card_ext:o.cardExt};i.push(s)}M(r.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))})),o(i,"chooseCard",(function(e){M("chooseCard",{app_id:y.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),o(i,"openCard",(function(e){for(var t=e.cardList,i=[],n=0,a=t.length;n<a;++n){var o=t[n],s={card_id:o.cardId,code:o.code};i.push(s)}M(r.openCard,{card_list:i},e)})),o(i,"consumeAndShareCard",(function(e){M(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),o(i,"chooseWXPay",(function(e){M(r.chooseWXPay,L(e),e)})),o(i,"openEnterpriseRedPacket",(function(e){M(r.openEnterpriseRedPacket,L(e),e)})),o(i,"startSearchBeacons",(function(e){M(r.startSearchBeacons,{ticket:e.ticket},e)})),o(i,"stopSearchBeacons",(function(e){M(r.stopSearchBeacons,{},e)})),o(i,"onSearchBeacons",(function(e){A(r.onSearchBeacons,e)})),o(i,"openEnterpriseChat",(function(e){M("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),o(i,"launchMiniProgram",(function(e){M("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)})),o(i,"openBusinessView",(function(e){M("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),o(i,"miniProgram",{navigateBack:function(e){e=e||{},N((function(){M("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){N((function(){M("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){N((function(){M("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){N((function(){M("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){N((function(){M("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){N((function(){M("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){N((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),i),T=1,C={};return c.addEventListener("error",(function(e){if(!m){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=T++,t["wx-id"]=a),C[a])return;C[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!m){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(C[n]=!1)}}}),!0),t&&(e.wx=e.jWeixin=x),x}function M(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,P(i),(function(e){V(t,e,n)})):E(t,n)}function A(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){n&&n.trigger&&n.trigger(e),V(t,e,i)})):E(t,n||i)}function P(e){return(e=e||{}).appId=y.appId,e.verifyAppId=y.appId,e.verifySignType="sha1",e.verifyTimestamp=y.timestamp+"",e.verifyNonceStr=y.nonceStr,e.verifySignature=y.signature,e}function L(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function V(e,t,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=s[i];n&&(i=n);var a="ok";if(t){var o=t.indexOf(":");"confirm"==(a=t.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==i&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return i+":"+a}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",y.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var a=n.indexOf(":");switch(n.substring(a+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function B(e){if(e){for(var t=0,i=e.length;t<i;++t){var n=e[t],a=r[n];a&&(e[t]=a)}return e}}function E(e,t){if(!(!y.debug||t&&t.isInnerInvoke)){var i=s[e];i&&(e=i),t&&t._complete&&delete t._complete,n("log",'"'+e+'",',t||""," at node_modules/jweixin-module/lib/index.js:1")}}function O(){return(new Date).getTime()}function N(t){g&&(e.WeixinJSBridge?t():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",t,!1))}}))}).call(this,i("0de9")["log"])},c25a:function(e,t,i){var n=i("597e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("646da2d3",n,!0,{sourceMap:!1,shadowMode:!1})},c4a0:function(e,t,i){"use strict";i.r(t);var n=i("f0aa"),a=i("63d2");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("728b");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"406d70d3",null,!1,n["a"],r);t["default"]=c.exports},f0aa:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"fixed"},[n("cu-custom",{attrs:{isBack:!0,bgColor:"bg-shadeTop text-white"}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.nav_title))])],2)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}],staticClass:"bg-white flex-sub radius shadow-lg",attrs:{id:"loading"}},[n("v-uni-image",{staticClass:"gif-white response",staticStyle:{height:"240upx"},attrs:{src:i("429c"),mode:"aspectFit"}})],1),n("iframe",{staticStyle:{height:"1100upx",width:"100%"},attrs:{id:"iFrame",frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",scrolling:"yes",allowtransparency:"yes"}}),n("v-uni-view",{staticClass:"cu-card"},[n("v-uni-view",{staticClass:"cu-item shadow padding"},[n("v-uni-view",{staticClass:"action margin-botom-xl"},[n("v-uni-text",{staticClass:"cuIcon-titles text-purple "}),n("v-uni-text",{staticClass:"title text-purple"},[e._v("联系方式")])],1),n("v-uni-view",{staticClass:"flex justify-between margin-top solid-bottom padding-bottom",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onNavigate(e.detail_info)}}},[n("v-uni-view",{staticClass:"text-dark-grey margin-right"},[e._v("地址")]),n("v-uni-view",{staticClass:"flex"},[n("v-uni-text",{staticClass:"text-right margin-right-sm"},[e._v(e._s(e.detail_info.address))]),n("v-uni-text",{staticClass:"cuIcon-locationfill xl text-red"})],1)],1),n("v-uni-view",{staticClass:"flex justify-between margin-top",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCall(e.detail_info.tel)}}},[n("v-uni-view",{staticClass:"text-dark-grey margin-right"},[e._v("电话")]),n("v-uni-view",{staticClass:"flex"},[n("v-uni-text",{staticClass:"text-right margin-right-sm"},[e._v(e._s(e.detail_info.tel))]),n("v-uni-text",{staticClass:"cuIcon-phone xl text-olive"})],1)],1)],1)],1)],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))}}]);