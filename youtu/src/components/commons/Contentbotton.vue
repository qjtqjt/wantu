<template>
    <div class="Contentbo">
       <ul class='Content_ul'>
           <li class='list_li' v-for="(item,index) in list" :key="index" >
               <div class='li-l'>
                    <h1>{{item.h1}}</h1>
                    <p>{{item.p}}</p>
                    <p>{{item.p1}}</p>
               </div>
               <img :src="item.src" alt="">
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    name:'Contentbotton',
    components:{},
    data(){
        return{
            list:[{h1:'首单立减',p:'App下单',p1:'最高立减￥300',src:'https://spics.hitour.cc/d16ac533ee8b33597286e352dc787ad8.png'},
            {h1:'新人好礼',p:'88元礼券立即领取',src:'https://spics.hitour.cc/99bbd9f77393ee8dbd321ec695e69760.png'}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
.Contentbo{
    .Content_ul{
        display: flex;
        .h(114);
        
        .list_li{
             flex: 1;
             border-right: 2px solid #eee;
             border-top: 2px solid #eee;
             border-bottom: 2px solid #eee;
             display: flex;
            .padding(30,0,0,20);
             .li-l{
                    h1{
                        .f-s(18);
                    }
                    p{
                        .f-s(12);
                        color: #999;
                    }
             }
             img{
                 .h(66);
                 .w(66);
             }
            
        }
    }
}
</style>


