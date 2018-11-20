<template>
    <div class='header'>
         <div class='header-l'>
             <img src='../../img/下载.png' alt="">
          </div>
          <div class='header-r'>
              <!-- <span class=''> -->
                  <i class='fa fa-search'></i>
                  搜索商品/目的地
              <!-- </span> -->
          </div>
    </div>
</template>
<script>
    export default{
        name:'Header',
        components:{},
        data(){
            return{
                name:'我是header'
            }
        }
    }
</script>
 <style lang="less" scoped>
    @import url('../../styles/main.less');
    .header{
        position: absolute;
       .h(46);
       z-index: 1000;
       width: 100%;
    //    border: 1px solid slategrey;
    //    background-color: aquamarine;
       display: flex;
       justify-content: space-around;
       line-height: 100%;
       .header-l{
           img{
              .w(63);
              .h(15);
           }
           
       }
       .header-r{
           .h(30);
           .w(225);
        //    border: 1px solid salmon;
           background-color: rgba(0,0,0,0.1);
           .margin(5,0,0,0);
           font-size: 12px;
           line-height: 30px;
           color: aliceblue;
           i{
               display: inline-block;
               .w(20);
               .h(10);
               margin-left: 10px;
               
           }
       }
    }
</style>

</style>
