<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
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
