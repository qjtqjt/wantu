<template>
  <div id="app">
    <!-- <Home></Home>
    <List></List> -->
    <router-view/>
  </div>
</template>

<script>
import Home from './components/pages/Home/Home'   //引用组件
// import LL from './components/pages/List/LBanner' //引用组件
import LBanner from './components/pages/List/LBanner' //引用组件




import Des from './components/pages/Des/Des'
import Login from './components/pages/Login/Login'
import Reg from './components/pages/Reg/Reg'
import My from './components/pages/My/My'
import Xq from './components/pages/Xq/Xq'
import Xfooter from './components/commons/Xfooter'
import XqBanner from './components/commons/XqBanner'
import Header from './components/commons/Header'




export default {
  name: 'App',
  components:{Home,LBanner,     Des,Login,My,Reg,Xq,Xfooter,XqBanner,Header},//挂载组件
  data(){
    return{
      name:'woshoi'
    }
  }
}
</script>

<style >
@import url('/styles/base.css');
#app {

}
</style>
