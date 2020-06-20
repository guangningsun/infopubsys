<template>
	<view>
		<cu-custom bgColor="bg-gradual-purple2" :isBack="true">
			<block slot="content">团队详情</block>
		</cu-custom>

		<view class="cu-card article">
			<view class="cu-item shadow">
				<view class="padding-xs flex align-center">
					<view class="flex-sub text-center">
						<view class="text-xl padding">
							<text class="text-black text-bold">{{team_detail_info.name}}</text>
						</view>
					</view>
				</view>

				<view class="margin-left margin-right">
					<view class="action">
						<text class="cuIcon-titles text-purple text-lg "></text>
						<text class="text-black text-df text-bold" style="margin-left: 5upx;">负责内容</text>
					</view>
					<view class="text-content margin-top margin-botom">
						{{team_detail_info.responsibilities}}
					</view>
				</view>
			</view>
		</view>

		<view class="cu-card article">
			<view class="cu-item shadow padding">

				<view >
					<view class="action">
						<text class="cuIcon-titles text-purple text-lg "></text>
						<text class="text-black text-df text-bold" style="margin-left: 5upx;">联系方式</text>
					</view>
				</view>
				
				<view class="flex justify-between margin-top">
					<view class=" margin-right">地址</view>
					<view class="flex">
						<a :href="baiduHref" class="content_flex">
							<text class="text-right">{{team_detail_info.address}}</text>
							<text class="cuIcon-locationfill xl" ></text>
						</a>
					</view>
				</view>
				
				<view class="flex justify-between margin-top" @tap="onCall(team_detail_info.phone_number)">
					<view class=" margin-right">电话</view>
					<view class="flex">
						<text class="text-right margin-right-sm">{{team_detail_info.phone_number}}</text>
						<text class="cuIcon-phone xl" >
						</text>
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
			team_detail_info: null,
			//经度
			longitude:'',
			//纬度
			latitude:'',
			loc_name:'',
			
			baiduHref:'',
			// baiduHref:'http://api.map.baidu.com/marker?location=39.001066,117.689565&title=宝信大厦&content=即将前往目的地&output=html',
		};
	},
	onLoad(option) {
		console.log(option);
		if (option.teamDetailInfo !== undefined) {
			let info = JSON.parse(decodeURIComponent(option.teamDetailInfo));
			this.team_detail_info = info;
			console.log('team detail');
			console.log(info);
			this.longitude = info.longitude;
			this.latitude = info.latitude;
			this.loc_name = info.name;
			
			this.baiduHref = 'http://api.map.baidu.com/marker?location=' 
						+ this.latitude 
						+ ',' 
						+ this.longitude
						+'&title='
						+ this.loc_name 
						+'&content=即将前往目的地&output=html';
						
			// this.baiduHref = 'http://api.map.baidu.com/marker?location=' 
			// 			+ '39.001066' 
			// 			+ ',' 
			// 			+ '117.689565'
			// 			+'&title='
			// 			+ '定在'
			// 			+'&content=即将前往目的地&output=html';
			console.log(this.baiduHref);
					
		}
	},
	methods: {
		onCall(num){
			console.log(num);
			uni.makePhoneCall({
				
			 	// 号码
			    phoneNumber: num, 
			
				// 成功回调
				success: (res) => {
					console.log('调用成功!')	
				},
			
				// 失败回调
				fail: (res) => {
					console.log('调用失败!')
				}
			  });
		},
		
	}
};
</script>

<style></style>
