<template>
    <div class='home'>
        <Header></Header>
        <Banner></Banner>
        <Content></Content>
        <Bottom></Bottom>
        <List></List>
        <Goups></Goups>
        <ListBotton></ListBotton>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../../commons/Header';//引用组件
import Banner from '../../commons/Banner';//引用组件
import Content from './Content';//引用组件

import List from './List';//引用组件
import Goups from './Goups';//引用组件
import ListBotton from './ListBotton'//引用组件
import Footer from './Footer' //应用组件
import Bottom from '../../commons/Bottom';//引用组件




    export default{
        name:'Home',
        components:{Header,Banner,Content,List,Goups,ListBotton,Footer,Bottom},//挂载组件
        data(){
            return{
                name:''
            }
            
        }
    }
</script>
 <style lang="less" scoped>
@import url('../../../styles/main.less');
.home{
     position: relative;
       
}
</style>


