import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home/Home';//引用组件
import List from '../components/pages/List/LBanner';
import Login from '../components/pages/Login/Login';
import Reg from '../components/pages/Reg/Reg';
import My from '../components/pages/My/My';
import Xq from '../components/pages/Xq/Xq';
import Xfooter from '../components/commons/Xfooter';
import XqBanner from '../components/commons/XqBanner';
import Des from '../components/pages/Des/Des';



Vue.use(Router)    //使用路由

export default new Router({
  routes: [
    {
      path: '/',//匹配hash地址
      name: 'Home',//路由的名字
      component:Home    //该组件应用的组件名字
 
    },
    {
      path: '/List',
      name: 'List',//路由的名字
      component:List   //该组件应用的组件名字
 
    },
  
    {
      path: '/Login',//匹配的hash地址
      name: 'Login',//路由的名字
      component: Login// 该路由所引用的组件
    },
    {
      path: '/Reg',//匹配的hash地址
      name: 'Reg',//路由的名字
      component: Reg// 该路由所引用的组件
    },
    {
      path: '/My',//匹配的hash地址
      name: 'My',//路由的名字
      component: My// 该路由所引用的组件
    },
    {
      path: '/Xq',//匹配的hash地址
      name: 'Xq',//路由的名字
      component: Xq// 该路由所引用的组件
    },
 
    {
      path: '/Xfooter',//匹配的hash地址
      name: 'Xfooter',//路由的名字
      component: Xfooter// 该路由所引用的组件
    },
    {
      path: '/XqBanner',//匹配的hash地址
      name: 'XqBanner',//路由的名字
      component: XqBanner// 该路由所引用的组件
    },
    {
      path: '/Des',//匹配的hash地址
      name: 'Des',//路由的名字
      component: Des// 该路由所引用的组件
    }


    
    
    
    
  ]
})
