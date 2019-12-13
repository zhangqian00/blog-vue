import Vue from 'vue';
import Router from 'vue-router';
const home = () => import ('@/components/home.vue');

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',redirect: {name: 'home'}
	},{
		path: '/home',
		name: 'home',
		component: home
	}]
})