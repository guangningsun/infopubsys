<template>
	<view>
		<iframe id="iframeContain" name="iframeContain" seamless scrolling="yes" :src="iframeURL">
			您当前的浏览器不支持页面上的功能，请升级您当前的浏览器版本或使用谷歌浏览器访问当前页面
		</iframe>
	</view>
</template>

<script>
export default {
	data() {
		return {
			iframeURL: 'https://mp.weixin.qq.com/s/0E2-jdsmE5JonoPVG6ekBg'
		};
	},
	methods: {
		// getUrl(URL){
		// //url 为微信公众号文章链接
		//      let http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
		//      let realurl = http + '//cors-anywhere.herokuapp.com/' + URL;
		//      axios.get(realurl).then((response)=>{
		//        console.log(response)
		//        let html = response.data;
		//        html = html.replace(/data-src/g, "src")
		//                   .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '')
		//                   .replace(/https/g,'http');
		//        let html_src = 'data:text/html;charset=utf-8,' + html;
		//        let iframe = document.getElementById('iFrame');
		//        iframe.src = html_src;
		//      },(err)=>{console.log(err);});
		// }
	}
}
</script>

<style>
#iframeContain {
	width: 100%;
	height: 400px;
}
</style>
