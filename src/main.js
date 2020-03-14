// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Qs from 'qs';
import Axios from 'axios';
import Moment from 'moment';
import {Menu,MenuItem,Row,Col,Button,Tag,Backtop,Pagination,Loading} from 'element-ui';
Vue.use(Menu).use(MenuItem).use(Row).use(Col).use(Button).use(Tag).use(Backtop).use(Pagination).use(Loading);
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
import httpConfig from './assets/api/api.js';
Vue.prototype.$httpConfig = httpConfig;

Vue.prototype.$ajax = Axios;
Vue.prototype.$moment = Moment;
Vue.filter('dateFormat',(val)=>{ // 全局过滤器
	if(val){
		return Moment(val).format('YYYY-MM-DD');
	}else {
		return '';
	}
});
Vue.filter('timeFormat',(val)=>{ // 全局过滤器
	if(val){
		return Moment(val).format('YYYY-MM-DD hh:mm:ss');
	}else {
		return '';
	}
});

Axios.interceptors.request.use((config)=>{
	config.data = Qs.stringify(config.data);
	return config;
},(err)=>{
	return Promise.reject(err);
});
Axios.interceptors.response.use((res)=>{

	return res;
},(err)=>{
	return Promise.reject(err);
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
});