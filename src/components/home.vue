<template>
	<div id="home">
		<canvas id='sakura'></canvas>
		<div class="content">
			<div class="top">
				<router-link to='/home'>
					<img src="@/assets/img/home/tx.jpg" alt="">
				</router-link>
			</div>
			<div class="btm">
				<router-link to='/home'>tab1</router-link>
				<router-link to='/home'>tab2</router-link>
				<router-link to='/home'>tab3</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Canvans from '@/utils/luohua.js'; // 落花特效
	export default {
		data() {
			return {

			}
		},
		mounted(){
			Canvans.luohuaCanvans(); // 落花特效
		}
	}
</script>

<style scoped lang='less'>
	#home {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		.content {
			padding-top: 12%;
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			.top {
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					width: 220px;
					height: 220px;
					border-radius: 50%;
					animation: mylogo 3s;
					animation-iteration-count: infinite;
				}
			}
			.btm {
				display: flex;
				justify-content: center;
				align-items: center;
				a {
					font-size: 20px;
					padding: 10px 30px;
					color: #409eff;
				}
				a:hover {
					color: #ff8003;
				}
			}
		}
	}
	@keyframes mylogo {
	  0% {
	    transform: rotate(0deg) scale(0.8, 0.8);
	    opacity: 1;
	  }
	  25% {
	    transform: rotate(0deg) scale(1, 1);
	    opacity: 0.8;
	  }
	  100% {
	    transform: rotate(0deg) scale(0.8, 0.8);
	    opacity: 1;
	  }
	}
</style>