<template>
	<view>
		<image class="bg-set" src="../../static/auth_bg.png"></image>
		
		<view class="fixed">
			<cu-custom :isBack="true" bgColor=" text-white">
				<block slot="backText"></block>
				<block slot="content"></block>
			</cu-custom>
		</view>
		
		

		<!------------------- Grid 样式 -------------------->
		<view class="cu-bar margin-top-xs">
			<view class=" action" style="margin-left: 200upx;">
				
				<image
					src="../../static/authority_list.png"
					style="width: 380upx; height: 55upx;"
				></image>
			</view>
			
		</view>
		
		<view class="cu-list grid no-border" style="background-color: rgba(0,0,0,0);" :class="['col-' + gridCol]">
			<view class="cu-item" style="background-color: rgba(0,0,0,0);" v-for="(item,index) in team_list" :key="index" @tap="goToDetail(item)">
				<view class="flex align-center justify-center margin-top-xs"  style="background-color: rgba(0,0,0,0);">
					<image
						:src="'../../static/auth_icons/' + item.name +'.png'"
						style="width: 130upx; height: 130upx;"
						mode="aspectFit"
					></image>
				</view>
				
				<view :class="item.name.length <= 12 ? 'margin-left-xs margin-right-xs' : '' " class="btn-border margin-top cu-btn text-content round bg-purple-light text-xs " style="height: 100upx;" >{{item.name}}</view>
			</view>
		</view>
		
		<!-- <view class="cu-modal" :class="modalName == 'SubModal' ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{ clickSubItem.name }}</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-light-purple"></text>
					</view>
				</view>
				
				<view class="cu-card no-card margin-top-sm margin-botom-sm">
					<view class="cu-item shadow padding">
						<view class="flex action justify-start">
							<text class="cuIcon-title text-purple"></text>
							<text class="text-grey text-df" style="margin-left: 5upx;">负责内容</text>
						</view>
						<view
							v-html="clickSubItem.responsibilities"
							class="flex justify-start text-content margin-top margin-botom"
						></view>
						<view class="flex justify-between margin-top" @tap="onCall(clickSubItem.phone_number)">
							<view class="flex">
								<text class="cuIcon-title text-purple"></text>
								<view class="text-grey margin-right">电话</view>
							</view>
				
							<view class="flex">
								<text class="text-right margin-right-sm">{{ clickSubItem.phone_number }}</text>
								<text class="cuIcon-phone xl text-olive"></text>
							</view>
						</view>
					</view>
				</view>
		
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-purple" @tap="hideModal">OK</button>
					</view>
				</view>
			</view>
		</view> -->

		<!------------------- 列表 样式 -------------------->
		<!-- <view class="">
			<view
				class="cu-card article"
				style="margin-top: -10upx;"
				v-for="(item, index) in team_list"
				:key="index"
				@tap="goToDetail(item)"
			>
				<view class="cu-item shadow padding">
					<view class="action padding-bottom" >
						<text class="cuIcon-titles text-purple text-lg "></text>
						<text class="title-sm " style="margin-left: -20upx;">{{ item.name }}</text>
					</view>

					<view class="text-content" style="margin-top: -10upx;">
						<view class="">联系方式：{{item.phone_number}}</view>
					</view>
					
					<view class="text-content">
						<view class="">地址：{{item.address}}</view>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			team_list: [],
			gridCol: 3,
		};
	},
	onLoad(option) {},
	onShow() {
		this.loadData();
	},
	methods: {
		successCb(rsp) {
			console.log(rsp.data);
			if (rsp.data.error === 0) {
				this.team_list = rsp.data.msg.authority_info;
			}
		},
		failCb(err) {
			console.log('api_get_authority_list failed', err);
		},
		completeCb(rsp) {},

		loadData() {
			this.requestWithMethod(
				getApp().globalData.api_get_authority_list,
				'GET',
				'',
				this.successCb,
				this.failCb,
				this.completeCb
			);
		},

		goToDetail(item) {
			console.log(item);
			uni.navigateTo({
				url: 'service_team_detail?teamDetailInfo=' + encodeURIComponent(JSON.stringify(item))
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
.btn-border{
	border:1px solid rgb(234, 247, 243);
}
</style>
