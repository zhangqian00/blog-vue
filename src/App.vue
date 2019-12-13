<template>
	<div id="app">
		<headerNav v-if='headerNavFlag'></headerNav>
		<router-view/>
	</div>
</template>

<script>
	import headerNav from '@/components/public/header.vue'; // 头部导航
	export default {
		name: 'App',
		data(){
			return {
				headerNavFlag: false // 头部导航是否显示
			}
		},
		components: {
			headerNav,
		},
		watch: {
			$route(val){
				if(val.path === '/home' || val.path==='/'){
					this.headerNavFlag = false;
				}else {
					this.headerNavFlag = true;
				}
			}
		},
		mounted(){
			window.addEventListener('hashchange',()=>{
				let currentPath = window.location.hash.slice(1);
				if(this.$router.path !== currentPath){
					this.$router.push(currentPath);
				}
			},false);
		}
	}
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		width: 1200px;
		margin: 0 auto;
		padding-top: 61px;
	}
</style>
