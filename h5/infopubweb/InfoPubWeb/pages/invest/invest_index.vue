<template>
	<view>
		<image class="bg-set" src="../../static/invest_bg.png"></image>

		<view class=" justify-center" style="padding-top: 280upx; width:100%; margin-left: 80upx;">
			<image
				src="../../static/circle_title.png"
				style="width: 600upx; height: 400upx;"
			></image>
		</view>

		<view class="invisible_top flex padding justify-center">
			<view class="padding-sm margin-xs radius" style="background-color:#00000000; width: 250upx; height: 100upx;" @tap="onPolicy"></view>
		</view>
		
		<view class="invisible_center flex">
			<view class="flex-sub padding-sm margin-xs radius" style="background-color:#00000000; width: 300upx; height: 100upx;" @tap="onProEnv"></view>
			<view class="flex-sub padding-sm margin-xs radius" style="background-color:#00000000; width: 100upx; height: 100upx;" ></view>
			<view class="flex-sub padding-sm margin-xs radius" style="background-color:#00000000; width: 300upx; height: 100upx;" @tap="onSocietyEnv"></view>
		</view>
		
		<view class="invisible_bottom flex">
			<view class="flex-sub padding-sm radius" style="background-color:#00000000; width: 350upx; height: 130upx;" @tap="onHumanities"></view>
			<view class="flex-sub margin-left radius" style="background-color:#00000000; width: 350upx; height: 130upx;" @tap="onApartBuilding"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			link:{},
			policy_link:'',
			industry_link:'',
			society_link:'',
			humanity_link:''
		};
	},
	onLoad() {
		this.loadData();
	},
	methods: {

		successCb(rsp) {
			console.log(rsp);
			if (rsp.data.error === 0) {
				this.link = rsp.data.msg.url_info;
				for(let i = 0; i < this.link.length; i++){
					let temp = this.link[i];
					console.log(temp);
					if(temp.url_type.indexOf("policy") != -1){
						console.log('set policy_link');
						this.policy_link = temp.url_address;
					}
					else if(temp.url_type.indexOf("industry") != -1){
						console.log('set industry_link');
						this.industry_link = temp.url_address;
					}
					else if(temp.url_type.indexOf("society") != -1){
						console.log('set society_link');
						this.society_link = temp.url_address;
					}
					else if(temp.url_type.indexOf("humanity") != -1){
						console.log('set humanity_link');
						this.humanity_link = temp.url_address;
					}
				}
				console.log(this.policy_link);
				console.log(this.industry_link);
				console.log(this.society_link);
				console.log(this.humanity_link);
			}
		},
		failCb(err) {
			console.log('api_get_invest_index_link failed', err);
		},
		completeCb(rsp) {},
		
		loadData() {
			this.requestWithMethod(
				getApp().globalData.api_get_invest_index_link,
				'GET',
				'',
				this.successCb,
				this.failCb,
				this.completeCb
			);
		},

		onPolicy(){
			console.log('policy_link');
			
			uni.navigateTo({
				url: 'external_link?link=' + this.policy_link,
			})
		},
		onProEnv(){
			console.log('industry_link');
			
			uni.navigateTo({
				url: 'external_link?link=' + this.industry_link,
			})
		},
		onSocietyEnv(){
			console.log('society_link');
			
			uni.navigateTo({
				url: 'external_link?link=' + this.society_link,
			})
		},
		onHumanities(){
			console.log('humanity_link');
			
			uni.navigateTo({
				url: 'external_link?link=' + this.humanity_link,
			})
		},
		onApartBuilding(){
			uni.navigateTo({
				url:'./apart_building_factory_index'
			})
		}
	}
};
</script>

<style>
.bg-set {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
}
.btnlg {
	padding: 130upx 80upx;
	font-size: 50upx;
	height: 100upx;
}
.invisible_top {
	position: absolute;
	left: 120px;
	top: 230upx;
/* 	width: 300px;
	height: 300px; */
}
.invisible_center {
	position: absolute;
	top: 400upx;
/* 	width: 300px;
	height: 300px; */
}
.invisible_bottom {
	position: absolute;
	top: 580upx;
/* 	width: 300px;
	height: 300px; */
}
</style>
