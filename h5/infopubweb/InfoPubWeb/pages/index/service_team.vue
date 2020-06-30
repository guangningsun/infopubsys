<template>
	<view>
		 <image class="bg-set" src="../../static/team_bg.png"></image>

		 <view class=" justify-center" style="padding-top: 250upx; width:100%; margin-left: 250upx;">
		 	<!-- <image  src="../../static/service_title.png" style="width: 530upx; height: 350upx;" id="animat" @tap="onClickServiceTeam"></image> -->
		 	<image  src="../../static/service_title.png" style="width: 150px; height: 330upx;" id="animat" @tap="onClickServiceTeam"></image>
		 </view>
		 
		 <view class=" justify-center">
			<view class="flex padding-right padding-left-xl" style="margin-top: 160upx;">
				<view style="background-color: #ffffff; width: 10upx; height: 200upx;"></view>
				<view class="margin-left-sm">
					 <view class="text-white text-xl margin-left-sm ">
						天津经济技术开发区管理委员会
					 </view>
					 <view class="text-white text-lg margin-left-sm margin-top-sm" style="opacity: 0.7;">
						联系方式：022-25201111
					 </view>
					 <view class="text-white text-lg margin-left-sm" style="opacity: 0.7;">
						地址：于家堡金融区融义路与金滨道交口宝信大厦
					 </view>
				 </view>
			</view>
		 			
		 </view>
	</view> 
</template>

<script>
export default {
	data() {
		return {
			team_list:[]
		}
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
		
		onClickServiceTeam(){
			uni.navigateTo({
				url:'../service_team_list/service_team_list'
			})
		}
	}
}
</script>

<style>
	.bg-set{
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    z-index: -1;
	}
	.btnlg{
		padding: 130upx 80upx;
		font-size: 50upx;
		height: 100upx;
	}
	#animat{
		position:relative;
		animation:mymove 3s infinite;
		-webkit-animation:mymove 3s infinite; /*Safari and Chrome*/
		animation-direction:alternate;/*轮流反向播放动画。*/
		animation-timing-function: ease-in-out; /*动画的速度曲线*/
		/* Safari 和 Chrome */
		-webkit-animation:mymove 3s infinite;
		-webkit-animation-direction:alternate;/*轮流反向播放动画。*/
		-webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
	}
	@keyframes mymove
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.1); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.1);
		}

	}
	
	@-webkit-keyframes mymove /*Safari and Chrome*/
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.1); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.1);
		}
	}
</style>
