<template>
	<view class="padding-left-sm">
		<image class="bg-set" src="../../static/invest_bg.jpg"></image>

		<view class="flex justify-center" style="padding-top: 140upx; width:100%;">
			<image  src="../../static/teda_logo.png" style="width: 300upx; height: 100upx;" mode="aspectFit"></image>
		</view>

		<view class="flex justify-center" id="animat" style="padding-top: 150upx; width:100%; margin-left: 6upx;">
			<view @tap="onProEnv">
				<image
					src="../../static/invest_business.png"
					style="width: 150upx; height: 150upx;"
				></image>
			</view>
		</view>

		<view class="flex justify-center" style="margin-left: 10upx;">
			<image
				src="../../static/invest_center.png"
				style="width: 320upx; height: 285upx;"
			></image>
		</view>

		<view class="invisible_center flex justify-center" style="width:100%; ">
			<view class="flex flex-sub justify-center" id="animat2" @tap="onPolicy">
				<image
					src="../../static/invest_policy.png"
					style="width: 150upx; height: 150upx;"
				></image>
			</view>
			<view class="flex flex-sub justify-center" id="animat3" @tap="onSocietyEnv">
				<image
					src="../../static/invest_society.png"
					style="width: 150upx; height: 150upx;"
				></image>
			</view>
		</view>

		<view class="invisible_bottom flex justify-center" style="width:100%; ">
			<view class="flex flex-sub justify-start margin-left-xl" id="animat" @tap="onHumanities">
				<image
					src="../../static/invest_humanity.png"
					style="width: 150upx; height: 150upx;"
				></image>
			</view>
			<view class="flex flex-sub justify-end margin-right-xl" id="animat2" @tap="onApartBuilding">
				<image
					src="../../static/invest_property.png"
					style="width: 150upx; height: 150upx;"
				></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			link: {},
			policy_link: '',
			industry_link: '',
			society_link: '',
			humanity_link: ''
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
				for (let i = 0; i < this.link.length; i++) {
					let temp = this.link[i];
					console.log(temp);
					if (temp.url_type.indexOf('policy') != -1) {
						console.log('set policy_link');
						this.policy_link = temp.url_address;
					} else if (temp.url_type.indexOf('industry') != -1) {
						console.log('set industry_link');
						this.industry_link = temp.url_address;
					} else if (temp.url_type.indexOf('society') != -1) {
						console.log('set society_link');
						this.society_link = temp.url_address;
					} else if (temp.url_type.indexOf('humanity') != -1) {
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

		onPolicy() {
			console.log('policy_link');

			uni.navigateTo({
				url: 'external_link?link=' + this.policy_link
			});
		},
		onProEnv() {
			console.log('industry_link');

			uni.navigateTo({
				url: 'external_link?link=' + this.industry_link
			});
		},
		onSocietyEnv() {
			console.log('society_link');

			uni.navigateTo({
				url: 'external_link?link=' + this.society_link
			});
		},
		onHumanities() {
			console.log('humanity_link');

			uni.navigateTo({
				url: 'external_link?link=' + this.humanity_link
			});
		},
		onApartBuilding() {
			uni.navigateTo({
				url: './apart_building_factory_index'
			});
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

.invisible_center {
	position: absolute;
	top: 495upx;
/* 	width: 300px;
	height: 300px; */
}
.invisible_bottom {
	position: absolute;
	top: 650upx;
/* 	width: 300px;
	height: 300px; */
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
			transform: scale(1.025); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.025);
		}

	}

	@-webkit-keyframes mymove /*Safari and Chrome*/
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.025); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.025);
		}
	}
	
#animat2{
		position:relative;
		animation:mymove 4s infinite;
		-webkit-animation:mymove 4s infinite; /*Safari and Chrome*/
		animation-direction:alternate;/*轮流反向播放动画。*/
		animation-timing-function: ease-in-out; /*动画的速度曲线*/
		/* Safari 和 Chrome */
		-webkit-animation:mymove 4s infinite;
		-webkit-animation-direction:alternate;/*轮流反向播放动画。*/
		-webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
	}
	@keyframes mymove
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.025); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.025);
		}

	}

	@-webkit-keyframes mymove /*Safari and Chrome*/
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.025); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.025);
		}
	}
	
#animat3{
		position:relative;
		animation:mymove 2.5s infinite;
		-webkit-animation:mymove 2.5s infinite; /*Safari and Chrome*/
		animation-direction:alternate;/*轮流反向播放动画。*/
		animation-timing-function: ease-in-out; /*动画的速度曲线*/
		/* Safari 和 Chrome */
		-webkit-animation:mymove 2.5s infinite;
		-webkit-animation-direction:alternate;/*轮流反向播放动画。*/
		-webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
	}
	@keyframes mymove
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.025); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.025);
		}

	}

	@-webkit-keyframes mymove /*Safari and Chrome*/
	{
		0%{
		transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.025); /*放大1.06倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.025);
		}
	}
	
	
</style>
