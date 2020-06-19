<template>
	<view>
		<cu-custom bgColor="bg-gradual-purple2" :isBack="true">
			<block slot="content">服务团队</block>
		</cu-custom>
		<!-- <view style="margin-top: -50upx;">
			<view class="cu-card" v-for="(item, index) in team_list" :key="index" @tap="goToDetail(item)">
				<view class="cu-item" >
					<view class=" cu-list menu-avatar" >
						<view class=" padding-left" >
							
						</view>
					</view>
				</view>
			</view>
		</view> -->

		<view class="" style="margin-top: -80upx;">
			<view
				class="cu-card article"
				style="margin-top: -10upx;"
				v-for="(item, index) in team_list"
				:key="index"
			>
				<view class="cu-item shadow padding">
					<view class="action" style="margin-top: -20upx;">
						<text class="cuIcon-titles text-purple text-lg "></text>
						<text class="title" style="margin-left: -20upx;">{{ item.name }}</text>
					</view>

					<view class="text-content" style="margin-top: -10upx;">
						<view class="">联系方式：{{item.phone_number}}</view>
					</view>
					
					<view class="text-content">
						<view class="">地址：{{item.address}}</view>
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
			team_list: []
		};
	},
	onLoad(option) {},
	onShow() {
		this.loadData();
	},
	methods: {
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

		successCb(rsp) {
			console.log(rsp.data);
			if (rsp.data.error === 0) {
				this.team_list = rsp.data.msg.user_info;
			}
		},
		failCb(err) {
			console.log('get_all_order_list failed', err);
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

		goToDetail(item) {
			console.log(item);
			// uni.navigateTo({
			// 	url: 'order_detail?orderDetailInfo=' + encodeURIComponent(JSON.stringify(item))
			// })
		}
	}
};
</script>

<style></style>
