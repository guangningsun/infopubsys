<template>
	<view>
		 <image class="bg-set" src="../../static/team_bg.png"></image>

		 <view class="solid-bottom justify-center" style="padding-top: 250upx; width:100%; margin-left: 120upx;">
		 	<image  src="../../static/service_title.png" style="width: 530upx; height: 350upx;" id="animat" @tap="onClickServiceTeam"></image>

			<view class="flex margin-top-lg">
				<view style="background-color: #ffffff; width: 10upx; height: 150upx;"></view>
				<view class="margin-left-sm">
					 <view class="text-white text-xl margin-left-sm ">
						{{team_list[0].name}}
					 </view>
					 <view class="text-white text-lg margin-left-sm margin-top-sm" style="opacity: 0.7;">
					 	联系方式：{{team_list[0].phone_number}}
					 </view>
					 <view class="text-white text-lg margin-left-sm" style="opacity: 0.7;">
					 	地址：{{team_list[0].address}}
					 </view>
				 </view>
			</view>
			
		 </view>
		 
		<!-- <view class="flex solid-bottom padding justify-center" style="padding-top: 100upx; width:100%;height:100vh">
		 	<image  src="../../static/service_title.png" style="width: 530upx; height: 350upx;"></image>
		 </view> -->
		<!-- <view class="">
			 <view class="text-white">
			 	dddd
			 </view>
		 </view> -->
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
		this.loadData();
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
		animation:mymove 5s infinite;
		-webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
		animation-direction:alternate;/*轮流反向播放动画。*/
		animation-timing-function: ease-in-out; /*动画的速度曲线*/
		/* Safari 和 Chrome */
		-webkit-animation:mymove 5s infinite;
		-webkit-animation-direction:alternate;/*轮流反向播放动画。*/
		-webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
	}
	@keyframes mymove
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.03); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.03);
		}

	}
	
	@-webkit-keyframes mymove /*Safari and Chrome*/
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.03); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.03);
		}
	}
</style>
