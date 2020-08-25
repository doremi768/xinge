<template>
	<view class="content">
		<view class="sign-in fixclear">注册</view>
		<view class="main">
			<view class="logo">
				<image src="../../static/logo.png"></image>
			</view>
			<view class="title">邮箱登录</view>
			<view class="inputs">
				<input type="text" placeholder="请输入邮箱">
				<input type="password" placeholder="请输入密码">
			</view>
			<view class="login-btn">登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		// width:100%;
		// height: 100%;
		padding: 30rpx 30rpx 0 30rpx;
		box-sizing: border-box;
		
		.sign-in{ 
				float: right;
				font-size: 36rpx;
				color: $uni-text-color;
		}
		.main{
			width: 100%;
			height: 100%;
			padding: 0 60rpx;
			box-sizing: border-box;
			.logo{
				width: 120rpx;
				height: 120rpx;
				margin: 120rpx auto 80rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.title{
				font-size: 48rpx;
			}
			.inputs{
				input{
					margin-top: 80rpx;
					height: 70rpx;
					border-bottom: 1px solid $uni-border-color1;
				}
			}
			.login-btn{
				margin-top: 100rpx;
				width: 100%;
				height: 80rpx;
				text-align: center;
				line-height: 80rpx;
				color: #FFFFFF;
				background-color: $uni-btn-color-login;
				border-radius: 10rpx;
			}
		}
		
	}
	
</style>
