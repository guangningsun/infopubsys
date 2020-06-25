<template>
	<view>
		<image class="bg-set" src="../../static/invest_bg.jpeg"></image>

		<view class=" justify-center" style="padding-top: 280upx; width:100%; margin-left: 80upx;">
			<image
				src="../../static/circle_title.png"
				style="width: 600upx; height: 400upx;"
			></image>
		</view>

		<view class="invisible_top flex solid-bottom padding justify-center">
			<view class="padding-sm margin-xs radius" style="background-color:#00000000; width: 200upx; height: 80upx;" @tap="onPolicy"></view>
		</view>
		
		<view class="invisible_center flex">
			<view class="flex-sub padding-sm margin-xs radius" style="background-color:#00000000; width: 220upx; height: 80upx;" @tap="onProEnv"></view>
			<view class="flex-sub padding-sm margin-xs radius" style="background-color:#00000000; width: 220upx; height: 80upx;" ></view>
			<view class="flex-sub padding-sm margin-xs radius" style="background-color:#00000000; width: 220upx; height: 80upx;" @tap="onSocietyEnv"></view>
		</view>
		
		<view class="invisible_bottom flex">
			<view class="flex-sub padding-sm margin-xs radius" style="background-color:#00000000; width: 350upx; height: 90upx;" @tap="onHumanities"></view>
			<view class="flex-sub margin-xs radius" style="background-color:#00000000; width: 350upx; height: 90upx;" @tap="onApartBuilding"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			team_list: []
		};
	},
	onLoad() {
		// this.loadData();
	},
	methods: {
		successCb(rsp) {
			console.log(rsp);
			if (rsp.data.error === 0) {
				this.team_list = rsp.data.msg.user_info;
			}
		},
		failCb(err) {
			console.log('api_get_team failed', err);
		},
		completeCb(rsp) {},

		loadData() {
			this.requestWithMethod(
				getApp().globalData.api_get_team,
				'GET',
				'',
				this.successCb,
				this.failCb,
				this.completeCb
			);
		},

		onClickServiceTeam() {
			uni.navigateTo({
				url: '../service_team_list/service_team_list'
			});
		},
		onPolicy(){
			
		},
		onProEnv(){
			
		},
		onSocietyEnv(){
			
		},
		onHumanities(){
			
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
