<template>
    <div class='bottom'>
       <ul>
           <li v-for="(item,index) in list" :key="index">
               <i :class="item.class"></i>
               <span>{{item.title}}</span>
             <!-- <p>你好</p> -->
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    name:'Bottom',
    components:{},
    data(){
        return{
            list:[{class:'fa fa-home',title:'发现'},
                  {class:'fa fa-map-marker',title:'目的地'},
                   {class:'fa fa-list-ul',title:'订单'},
                   {class:'fa fa-user-o',title:'我',}
                  ]
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
.bottom{
      position: fixed;
     .h(50);
     .bottom(0);
      width: 100%;
      z-index: 1000;
      left: 0;
      background-color: whitesmoke;
    //   border: 1px solid salmon;
     ul{
         height: 100%;
         width: 100%;
         display: flex;
         border-top: 1px solid #f5f5f5;
         li{
              flex: 1;
            //   .lh(50);
               display: flex;
               flex-direction: column;
               text-align: center;
               .margin(10,0,0,0);
               color: rgb(136, 136, 136);
               
             i{
                 .f-s(20);
                //   margin-top: -15px;
             }
             span{
                 display:inline-block;
                 .f-s(10);
                //  margin-top: -15px;
             }
         }
     }
    
}
</style>


