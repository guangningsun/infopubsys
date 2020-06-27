<template>
	<view>
		<cu-custom bgColor="bg-gradual-purple2" :isBack="true">
			<block slot="content">厂房</block>
		</cu-custom>

		<view class="cu-card article">
			<view class="cu-item shadow">
				<view class="padding-xs flex align-center">
					<view class="flex-sub text-center">
						<view class="text-xl padding">
							<text class="text-black text-bold">{{ detail_info.name == undefined ? detail_info.title : detail_info.name}}</text>
							<!-- <text class="text-black text-bold">xxx厂</text> -->
						</view>
					</view>
				</view>

				<view class="margin-left margin-right">
					<view class="cu-bar justify-start bg-white" style="margin-left: -30upx;">
						<view class="action sub-title">
							<text class="text-lg text-bold text-purple">简介</text>
							<text class="bg-purple" style="width:2rem"></text>
						</view>
					</view>
					
					<view class="text-content margin-botom">
						{{detail_info.info}}
					</view>
					
					<view class="margin-top">
						
						<view class="padding-bottom-sm"  v-for="(item,index) in detail_info.image_list" :key="index" >
							<image :src="domain + '/media/' + item" mode="aspectFit"></image>
						</view>
						
					</view>
					
				</view>
			</view>
		</view>

		<view class="cu-card">
			<view class="cu-item shadow padding">
				<view class="action margin-botom-xl">
					<text class="cuIcon-titles text-purple "></text>
					<text class="title text-purple">联系方式</text>
				</view>
				
				<view
					class="flex justify-between margin-top solid-bottom padding-bottom"
					@tap="onNavigate(detail_info)"
		
				>
					<view class="text-dark-grey margin-right">地址</view>
					<view class="flex">
						<text class="text-right margin-right-sm">
							{{ detail_info.address }}
						</text>
						<text class="cuIcon-locationfill xl text-red"></text>
					</view>
				</view>
				
				<view
					class="flex justify-between margin-top"
					@tap="onCall(detail_info.tel)"
				>
					<view class="text-dark-grey margin-right">电话</view>
					<view class="flex">
						<text class="text-right margin-right-sm">
							{{ detail_info.tel }}
						</text>
						<text class="cuIcon-phone xl text-olive"></text>
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
			
			js_sdk_info: {
				nonceStr: '',
				timestamp: 0,
				signature: ''
			},
			
			domain: getApp().globalData.domain,
			
			detail_info: null,

		};
	},
	onLoad(option) {
		this.getAssetToken();

		console.log(option);
		if (option.factoryDetailInfo !== undefined) {
			let info = JSON.parse(decodeURIComponent(option.factoryDetailInfo));
			this.detail_info = info;
			console.log('factory detail');
			console.log(info);
		}

	},
	methods: {

		successAccessCb(rsp) {
			this.js_sdk_info.timestamp = rsp.data.timestamp;
			this.js_sdk_info.nonceStr = rsp.data.nonceStr;
			this.js_sdk_info.signature = rsp.data.signature;
			console.log(this.js_sdk_info);
			var jweixin = require('jweixin-module');
			jweixin.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: getApp().globalData.appid, // 必填，公众号的唯一标识
				timestamp: this.js_sdk_info.timestamp, // 必填，生成签名的时间戳
				nonceStr: this.js_sdk_info.nonceStr, // 必填，生成签名的随机串
				signature: this.js_sdk_info.signature, // 必填，签名
				scale: 22, // 地图缩放级别,整形值,范围从1~28。默认为最大
				jsApiList: ['openLocation', 'getLocation'] // 必填，需要使用的JS接口列表
			});

			jweixin.ready(function() {
				// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
				console.log('ready!');
			});

			jweixin.error(function(res) {
				// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
				console.log(res);
			});
		},
		failAccessCb(err) {
			console.log('api_get_access_token failed', err);
		},
		completeAccessCb(rsp) {},

		getAssetToken() {
			this.requestWithMethod(
				getApp().globalData.api_get_access_token,
				'GET',
				'',
				this.successAccessCb,
				this.failAccessCb,
				this.completeAccessCb
			);
		},

		onCall(num) {
			console.log(num);
			uni.makePhoneCall({
				// 号码
				phoneNumber: num,

				// 成功回调
				success: res => {
					console.log('调用成功!');
				},

				// 失败回调
				fail: res => {
					console.log('调用失败!');
				}
			});
		},
		goToTecentMap(item) {
			console.log('wx');
			var jweixin = require('jweixin-module');
			jweixin.openLocation({
				latitude: parseFloat(item.latitude), // 纬度，浮点数，范围为90 ~ -90
				longitude: parseFloat(item.longitude), // 经度，浮点数，范围为180 ~ -180。
				name: item.name, // 位置名
				address: item.address // 地址详情说明
			});
		},
		onNavigate(item) {
			// this.showModal();

			this.goToTecentMap(item);
		}
	}
};
</script>

<style>
a {
	display: block; //将a设置为块级元素
}
</style>
