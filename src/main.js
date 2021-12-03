import Vue from 'vue';
import uView from 'uview-ui';
import App from './App';
import store from '@/store';
import global from "./utils/global";
import * as filters from "./filters";
Vue.prototype.$app = global;
Vue.config.productionTip = false;

App.mpType = 'app';

Vue.use(uView);

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

console.log(process.env)

// 引入uView对小程序分享的mixin封装
// let mpShare = require('uview-ui/libs/mixin/mpShare.js');
// Vue.mixin(mpShare);

const app = new Vue({
	store,
	...App
});

app.$mount();
