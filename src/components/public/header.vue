<template>
	<div id="header">
		<div class="content">
			<el-row>
				<el-col :span='3'>
					<div class="logo">
						<img src="@/assets/img/home/tx.jpg" alt="">
					</div>
				</el-col>
				<el-col :span='16'>
					<el-menu :default-active="activeIndex" router mode="horizontal" @select="handleSelect">
						<el-menu-item index="1" route='/home'>首页</el-menu-item>
						<el-menu-item index="2" route='/blogs'>博客</el-menu-item>
						<el-menu-item index="3" route=''>归档</el-menu-item>
						<el-menu-item index="4" route=''>项目</el-menu-item>
						<el-menu-item index="5" route=''>历程</el-menu-item>
						<el-menu-item index="6" route=''>留言</el-menu-item>
						<el-menu-item index="7" route=''>关于</el-menu-item>
					</el-menu>
				</el-col>
				<el-col :span='5'>
					<div class="loginblock">
						<el-button type="primary" size="small">登录</el-button>
						<el-button type="danger" size="small">注册</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				navList: [],
				activeIndex: '2'
			}
		},
		methods: {
			handleSelect(key,keyPath){
				console.log(key)
				console.log(keyPath)
			}
		}
	}
</script>

<style scoped lang="less">
	#header {
		border-bottom: 1px solid #eee;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2001;
		.content {
			width: 1200px;
			margin: 0 auto;
			// display: flex;
			// justify-content: flex-start;
			// align-items: center;
			.logo {
				width: 50px;
				height: 50px;
				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.el-menu {
				
			}
		}
	}
</style>

<style>
	#header .el-menu.el-menu--horizontal {
		border-bottom: none;
	}
	#header .el-row .el-col {
		height: 60px;
		padding: 0 10px;
		display: flex;
		align-items: center;
	}
</style>