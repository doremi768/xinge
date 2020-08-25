<template>
	<view class="navigation">
		<view class="title">{{leftTitle}}</view>
		<view class="add-user">
			<image :src="icon" v-if="icon"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props: {
			leftTitle: String,
			icon: String
		}
	}
</script>

<style lang="scss">
	.navigation{
		width:750rpx;
		height:88rpx;
		display: flex;
		justify-content: space-between;
		background-color: $uni-bg-color;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
		.title{
			font-size: 36rpx;
		}
		.add-user image{
			width: 	40rpx;
			height: 41rpx;
			margin-right: 10rpx;
		}
	}
		
</style>
