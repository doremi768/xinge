<template>
	<view class="content">
		<view class="status_bar"></view>
			<!-- <view class="navigation">
				<view class="title">飞鸽传书</view>
				<view class="add-user">
					<image src="../../static/navigationImg/addFriends.png"></image>
				</view>
			</view> -->
			<NavBar :leftTitle="leftTitle" :icon="icon"/>
		<view class="main">
			<view class="user-list" v-for="(item,index) in userData" :key="index">
				<image :src="item.img"></image>
				<view class="num">{{item.tip}}</view>
				<view class="right">
					<text class="username">{{item.username}}</text>
					<text class="information">{{item.information}}</text>
					<text class="time">{{item.time}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import user from '../../commons/js/data.js'//用户假数据
	import whenChanged from '../../commons/js/whenChanged.js'//整理时间
	import NavBar from '../../components/NavBar.vue'
	export default {
		data() {
			return {
				userData: [],
				leftTitle: '飞鸽传书',
				icon: '../../static/navigationImg/addFriends.png'
			}
		},
		components:{
			NavBar
		},
		created(){
			this.users();
		},
		methods: {
			users(){
				let usersData = user.userAry();
				usersData.forEach(item => {
					item.time = whenChanged(item.time)
				});
				this.userData = usersData;
			},

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		.status_bar{
			width: 100%;
			height: var(--status-bar-height);
			background-color: $uni-bg-color;
		}
		
		.main{
			padding: 0 30rpx;
			box-sizing: border-box;
			
			.user-list{
				position: relative;
				padding: 20rpx 0;
					image{
						margin-right: 30rpx;
						width: 100rpx;
						height: 100rpx;
						border-radius: $uni-border-radius-lg;
					}
				.num{
					position: absolute;
					left: 70rpx;
					top:10rpx;
					width: 40rpx;
					height: 40rpx;
					background-color: red;
					color: white;
					font-size: 24rpx;
					border-radius: 20rpx;
					line-height: 40rpx;
					text-align: center;
				}
				.right{
					float: right;
					width: 560rpx;
					height: 100rpx;
					padding-bottom: 20rpx;
					border-bottom: 1px solid $uni-border-color;
					.username{
						position: absolute;
						left: 130rpx;
						vertical-align: 60rpx;
						font-size: 36rpx;
					}
					.information{
						position: absolute;
						width: 560rpx;
						left: 130rpx;
						bottom: 30rpx;
						font-size: 28rpx;
						color: $uni-text-color-grey;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.time{
						position: absolute;
						right: 0;
						font-size: 28rpx;
						color: $uni-text-color-grey;
					}
				}
			}
		}
	}


</style>
