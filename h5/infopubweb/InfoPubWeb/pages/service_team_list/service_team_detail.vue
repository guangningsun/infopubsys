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
							<text class="text-black text-bold">{{ team_detail_info.name }}</text>
						</view>
					</view>
				</view>

				<view class="margin-left margin-right">
					<view class="action">
						<text class="cuIcon-titles text-purple text-lg "></text>
						<text class="text-black text-df text-bold" style="margin-left: 5upx;">
							负责内容
						</text>
					</view>
					<view
						v-html="team_detail_info.responsibilities"
						class="text-content margin-top margin-botom"
					></view>
				</view>
			</view>
		</view>

		<view class="cu-card article">
			<view class="cu-item shadow padding">
				<view>
					<view class="action">
						<text class="cuIcon-titles text-purple text-lg "></text>
						<text class="text-black text-df text-bold" style="margin-left: 5upx;">
							联系方式
						</text>
					</view>
				</view>

				<view class="flex justify-between margin-top" @tap="onNavigate(team_detail_info)">
					<view class=" margin-right">地址</view>
					<view class="flex">
						<text class="text-right margin-right-sm">{{ team_detail_info.address }}</text>
						<text class="cuIcon-locationfill xl"></text>
					</view>
				</view>

				<view
					class="flex justify-between margin-top"
					@tap="onCall(team_detail_info.phone_number)"
				>
					<view class=" margin-right">电话</view>
					<view class="flex">
						<text class="text-right margin-right-sm">
							{{ team_detail_info.phone_number }}
						</text>
						<text class="cuIcon-phone xl"></text>
					</view>
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName == 'ChooseNavModal' ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">选择导航软件</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-purple"></text>
					</view>
				</view>

				<view class="padding flex flex-direction">
					
					<a :href="baiduHref" style="text-decoration:none;">
						<button class="cu-btn bg-blue lg">百度地图</button>
					</a>
					
					<a :href="gaodeHref" style="text-decoration:none;">
						<button class="cu-btn bg-light-red margin-tb-sm lg">高德地图</button>
					</a>
					
					<a style="text-decoration:none;">
						<button class="cu-btn bg-olive lg" @tap="goToTecentMap(team_detail_info)">
							腾讯地图
						</button>
					</a>
					
				</view>

				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-purple text-purple" @tap="hideModal">
							取消
						</button>
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
			modalName: null,

			team_detail_info: null,
			//经度
			longitude: '',
			//纬度
			latitude: '',
			loc_name: '',

			baiduHref: '',

			gaodeHref: ''

			// gaodeHref: https://uri.amap.com/marker?position=117.689565,39.001066&name=宝信大厦
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

			this.baiduHref =
				'http://api.map.baidu.com/marker?location=' +
				this.latitude +
				',' +
				this.longitude +
				'&title=' +
				this.loc_name +
				'&content=即将前往目的地&output=html';
				
			this.gaodeHref = 'https://uri.amap.com/marker?position='
				+ this.longitude
				+ ','
				+ this.latitude
				+ '&name='
				+ this.loc_name;

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
		showModal() {
			this.modalName = 'ChooseNavModal';
		},
		hideModal() {
			this.modalName = null;
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
			uni.openLocation({
				address: item.address,
				name:item.name,
				latitude: parseFloat(item.latitude),
				longitude: parseFloat(item.longitude),
				success: res => {
					console.log('succ');
					console.log(res);
				},
				fail: res => {
					console.log('fail');
					console.log(res);
				}
			});
		},
		onNavigate(item) {
			this.showModal();
			
		}
	}
};
</script>

<style>
a {
	display: block; //将a设置为块级元素
}
</style>
