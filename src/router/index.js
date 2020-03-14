import Vue from 'vue';
import Router from 'vue-router';
const home = () => import ('@/components/home.vue'); // 首页
const blogs = () => import('@/components/blogs/blogs.vue'); // 博客页
const blogDetail = () => import('@/components/blogs/blogDetail/blogDetail.vue'); // 博客页

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',redirect: {name: 'home'}
	},{
		path: '/home',
		name: 'home',
		component: home
	},{
		path: '/blogs',
		name: 'blogs',
		component: blogs
	},{
		path: '/blogDetail',
		name: 'blogDetail',
		component: blogDetail
	}]
})