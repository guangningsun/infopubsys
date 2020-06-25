<template>
	<view>
		<view class="fixed">
			<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
				<block slot="backText">返回</block>
				<block slot="content">公寓、楼宇、厂房</block>
			</cu-custom>
		</view>
		<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in 5" :key="index">
				<image :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+ '.jpg'" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabTitle" :key="index" @tap="tabSelect" :data-id="index">
				{{tabTitle[index]}}
			</view>
		</scroll-view>
		
		<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(93vh - 375upx)">
			<!-- 公寓list -->
			<view v-show="TabCur == 0" class="cu-list bg-white solid-top margin-top" >
				<view class="flex solid-bottom padding justify-between" v-for="(item,index) in 10">
					<view class="flex align-center">
						<view class="text-bold text-lg text-black">title</view>
					</view>
					<view class="margin-left cu-avatar xxl" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				</view>
			</view>
			
			<!-- 楼宇List -->
			<view v-show="TabCur == 1" class="cu-list bg-white solid-top" >
				<view class="flex solid-bottom padding justify-between" v-for="(item,index) in 2">
					<view class="flex align-center">
						<view class="text-bold text-lg text-black">title</view>
					</view>
					<view class="margin-left cu-avatar xxl" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				</view>
			</view>
			
			<!-- 厂房List -->
			<view v-show="TabCur == 2" class="cu-list bg-white solid-top" >
				<view class="flex solid-bottom padding justify-between" v-for="(item,index) in 2">
					<view class="flex align-center">
						<view class="text-bold text-lg text-black">title</view>
					</view>
					<view class="margin-left cu-avatar xxl" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				tabTitle:['公寓','楼宇','厂房'],
				
				all_property_info:null
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			
			this.loadData();
		},

		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				console.log(this.TabCur);
				
			},
			
			successCb(rsp) {
				console.log(rsp.data);
				if (rsp.data.error === 0) {
					this.all_property_info = rsp.data.msg.all_property_info;
				}
			},
			failCb(err) {
				console.log('api_get_all_property_info failed', err);
			},
			completeCb(rsp) {
				uni.hideLoading();
			},
			
			loadData() {
				this.requestWithMethod(
					getApp().globalData.api_get_all_property_info,
					'GET',
					'',
					this.successCb,
					this.failCb,
					this.completeCb
				);
			},
		},
	}
</script>

<style>
	.fixed {
		position: fixed;
		z-index: 99;
	}
	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
	
</style>
