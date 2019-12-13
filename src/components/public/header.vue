<template>
	<div id="header">
		<div class="content">
			<div class="logo">
				<img src="@/assets/img/home/tx.jpg" alt="">
			</div>
			<el-menu :default-active="activeIndex" router mode="horizontal" @select="handleSelect">
			    <el-menu-item index="1" route='/home'>首页</el-menu-item>
			    <el-menu-item index="2" route='/blogs'>博客</el-menu-item>
			</el-menu>
			<div class="loginblock"></div>
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
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		.content {
			width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: flex-start;
			align-items: center;
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