<template>
	<view style="height: 600upx;">
		<iframe id="iFrame" style="height: 1024upx; width: 100%;" ></iframe>
		<view>test</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			iframeURL: 'https://mp.weixin.qq.com/s/0E2-jdsmE5JonoPVG6ekBg'
		};
	},
	onLoad() {
		this.getUrl(this.iframeURL);
	},
	methods: {
		getUrl(URL) {
			// let http = window.location.protocol === 'http:' ? 'http:' : 'https:';
			// //调用跨域API
			// let realurl = http + '//cors-anywhere.herokuapp.com/' + URL;
			// this.$axios.get(realurl).then(
			// 	response => {
			// 		// console.log(response)
			// 		let html = response.data;
			// 		html = html
			// 			.replace(/data-src/g, 'src')
			// 			.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '')
			// 			.replace(/https/g, 'http');
			// 		//let html_src = 'data:text/html;charset=utf-8,' + html;
			// 		let html_src = html;
			// 		let iframe = document.getElementById('iFrame');
			// 		iframe.src = html_src;
			// 		var doc = iframe.contentDocument || iframe.document;
			// 		doc.write(html_src);
			// 		doc.getElementById('js_content').style.visibility = 'visible';
			// 		//var doc = iframe.contentDocument || iframe.document;
			// 		//doc.body.innerHTML = html_src;
			// 		//iframe.document.getElementsByTagName('body').innerHTML = html_src;
			// 	},
			// 	err => {
			// 		console.log(err);
			// 	}
			// );
			
			let http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
			     let realurl = http + '//cors-anywhere.herokuapp.com/' + URL;
			     this.$axios.get(realurl).then((response)=>{
			       console.log(response)
			       let html = response.data;
			       html = html.replace(/data-src/g, "src")
			                  .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '')
			                  .replace(/https/g,'http');
			       let html_src =html;
			       let iframe = document.getElementById('iFrame');
			       iframe.src = html_src;
				   var doc = iframe.contentDocument || iframe.document;
					doc.write(html_src);
					doc.getElementById('js_content').style.visibility = 'visible';
			     },(err)=>{console.log(err);});
		}
	}
};
</script>

<style>
#iframeContain {
	width: 100%;
	height: 100%;
}
</style>
