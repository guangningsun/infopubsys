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
			<swiper-item v-for="(item,index) in banner" :key="index">
				<image :src="domain + item.banner_image" mode="aspectFill"></image>
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
				<view class="flex solid-bottom padding justify-between" v-for="(item,index) in apartment_info_list" :key="index" @tap="goToApartBuildDetail(item,'公寓')">
					<view class="flex align-center">
						<view class="text-bold text-lg text-black">{{item.title}}</view>
					</view>
					<view class="margin-left cu-avatar xxl" :style=" item.title_img === null ? 'background-image:url(../../static/default_img.jpg);' : 'background-image:url(' + domain + item.title_img + ');'"></view>
				</view>
			</view>
			
			<!-- 楼宇List -->
			<view v-show="TabCur == 1" class="cu-list bg-white solid-top margin-top" >
				<view class="flex solid-bottom padding justify-between" v-for="(item,index) in building_info_list" :key="index" @tap="goToApartBuildDetail(item,'楼宇')">
					<view class="flex align-center">
						<view class="text-bold text-lg text-black">{{item.title}}</view>
					</view>
					<view class="margin-left cu-avatar xxl" :style="item.title_img === null ? 'background-image:url(../../static/default_img.jpg);' : 'background-image:url(' + domain + item.title_img + ');'"></view>
				</view>
			</view>
			
			<!-- 厂房List -->
			<view v-show="TabCur == 2" class="cu-list bg-white solid-top margin-top" >
				<view class="flex solid-bottom padding justify-between" v-for="(item,index) in factory_info_list" :key="index" @tap="goToFactoryDetail(item)">
					<view class="flex align-center">
						<view class="text-bold text-lg text-black">{{item.title}}</view>
					</view>
					<view class="margin-left cu-avatar xxl" :style="item.title_img === null ? 'background-image:url(../../static/default_img.jpg);' : 'background-image:url(' + domain + item.title_img + ');'"></view>
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
				
				all_property_info:null,
				
				domain: getApp().globalData.domain,
				
				apartment_info_list:[],
				building_info_list:[],
				factory_info_list:[],
				
				banner:[],
				
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
			
			goToApartBuildDetail(item, nav_title){
				uni.navigateTo({
					url: 'apart_building_detail?navTitle='+ nav_title +'&detailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			
			goToFactoryDetail(item){
				uni.navigateTo({
					url: 'factory_detail?factoryDetailInfo=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			
			successCb(rsp) {
				console.log(rsp.data);
				if (rsp.data.error === 0) {
					if(!this.isEmpty(rsp.data.msg.banner_info)){
						this.banner = rsp.data.msg.banner_info;
						
					}
					if(!this.isEmpty(rsp.data.msg.apartment_info)){
						this.apartment_info_list = rsp.data.msg.apartment_info;
					}
					if(!this.isEmpty(rsp.data.msg.building_info)){
						this.building_info_list = rsp.data.msg.building_info;
					}
					if(!this.isEmpty(rsp.data.msg.factory_info)){
						this.factory_info_list = rsp.data.msg.factory_info;
					}
				}
				uni.hideLoading();
			},
			failCb(err) {
				console.log('api_get_all_property_info failed', err);
			},
			completeCb(rsp) {
			},
			
			loadData() {
				this.requestWithMethod(
					getApp().globalData.api_get_banner_info,
					'GET',
					'',
					this.successCb,
					this.failCb,
					this.completeCb
				);
				this.requestWithMethod(
					getApp().globalData.api_get_apartment_info,
					'GET',
					'',
					this.successCb,
					this.failCb,
					this.completeCb
				);
				this.requestWithMethod(
					getApp().globalData.api_get_building_info,
					'GET',
					'',
					this.successCb,
					this.failCb,
					this.completeCb
				);
				this.requestWithMethod(
					getApp().globalData.api_get_factory_info,
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
