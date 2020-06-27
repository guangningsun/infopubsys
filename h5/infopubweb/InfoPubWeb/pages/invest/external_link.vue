<template>
	<view>
		<cu-custom bgColor="bg-gradual-purple2" :isBack="true">
			<block slot="content"></block>
		</cu-custom>
		
		<view v-show="showLoading" id="loading" class="bg-white flex-sub radius shadow-lg">
			<image src="../../static/loading-white.gif" mode="aspectFit" class="gif-white response" style="height:240upx"></image>
		</view>
		
		<view>
			<iframe id="iFrame" style="height: 1440upx; width: 100%;" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				link:'',
				showLoading:true,
			}
		},
		onLoad(option) {
			console.log(option);
			if (option.link !== undefined) {
				this.link = option.link;
				this.getUrl(this.link);
			}
		},
		methods: {
			getUrl(URL) {
				console.log('getUrl');
				let http = window.location.protocol === 'http:' ? 'http:' : 'https:';
				//调用跨域API
				let realurl = http + '//cors-anywhere.herokuapp.com/' + URL;
				this.$axios.get(realurl).then(
					response => {
						// console.log(response)
						let html = response.data;
						html = html
							.replace(/data-src/g, 'src')
							.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/g, '')
							.replace(/https/g, 'http');
						//let html_src = 'data:text/html;charset=utf-8,' + html;
						let html_src = html;
						let iframe = document.getElementById('iFrame');
						iframe.src = html_src;
						var doc = iframe.contentDocument || iframe.document;
						doc.write(html_src);
						doc.getElementById('js_content').style.visibility = 'visible';
						
						this.showLoading = false;
						
					},
					err => {
						console.log(err);
					}
				);
			}
		}
	}
</script>

<style>

</style>
