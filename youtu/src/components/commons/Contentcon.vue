<template>
    <div class='conten'>
         <ul class='conten-ul'>
              <li v-for="(item,i) in list" :key="i">
                  <img :src="item.src1" alt="">
                  <p class='p1'>{{item.tittl1}}</p>
                  <p class='p2'>{{item.tittl2}}</p>
              </li>
              <li  v-for="(item1,index1) in list1" :key="index1+111">
                  <img :src="item1.src" alt="">
                   <p class='p3'>{{item1.tittl3}}</p>
                   <p class='p4'>{{item1.tittl4}}</p>
              </li>
              <li class="li2">
                  <img class='img1' src="https://spics.hitour.cc/a69e78dea14e2d7ef0403c9eddd11f98.png">
                   <p class='p3'>旅行通票</p>
                   <p class='p4'>省钱旅行</p>
              </li>
         </ul>
    </div>
</template>
<script>
export default {
    name:'Contentcon',
    components:{},
    data(){
        return{
            list:[{src1:'https://spics.hitour.cc/89a71297bb44a9fd928f9c42abd555db.png',tittl1:'预订机票',tittl2:'国际国内机票'},
                    {src1:'https://spics.hitour.cc/28e1681cb149d10b5b78f50d7b6adf32.png',tittl1:'自由行',tittl2:'200+个目的地'},
                    {src1:'https://spics.hitour.cc/cac9b1fa9858dbd97f64fb66b1f0b11c.png',tittl1:'当地游',tittl2:'门票一日游体验'}
            ],
            list1:[
                    {src:'https://spics.hitour.cc/811a8fd7c76127d6cc40c74a78b0bc19.png',tittl3:'出行必备',tittl4:'WIFI签证接送'},
                    {src:'https://spics.hitour.cc/90df0a68c82b1e2e23391db99ae96f19.png',tittl3:'周边游',tittl4:'国内城市周边'}
                ]
        }
    }
   
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
.conten{
    .h(230);
    // border: 1px solid seagreen;
    .conten-ul{
        position: relative;
        li{
             .w(108);
              .h(90);
             float: left;
             .margin(0,5,10,10);
            //  border: 1px solid slateblue;
             border-radius: 7px;
              p{
                  position:absolute;
                .f-s(14);
                padding-left: 8px;
                color: aliceblue;
            }
            .p1{
                .top(40);
            }
            .p2{
                .top(60);
            }
            .p3{
                .bottom(-160);
            }
            .p4{
               .bottom(-180);
            }
            .img1{
                .w(45);
                .h(8);
                .margin(-8,0,0,10)
            }
            img{
                height: 100%;
                width: 100%;
                border-radius: 7px;
            }
        }
         .li2{
                background-color: rgb(51, 51, 51);
            }
    }
}
</style>


