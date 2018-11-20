// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   //引用e6的vue文件
import App from './App'
import router from './router'   //引用组件
import Axios from 'axios'      //引用axios:请求数据


//请求拦截
Axios.interceptors.response.use(function(response){
  return response.data;
},function(error){
  return Promise.reject(error)
});

Vue.prototype.$axios=Axios//挂载axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },   //挂载组件
  template: '<App/>'   //用App组件替换首页的div元素
})
