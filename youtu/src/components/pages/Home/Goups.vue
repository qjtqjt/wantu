<template>
    <div class='Goups'>
        <section v-for="(item,index) in group" :key="index">
            <header class="top">
                 <h1>{{item.title}}</h1>
                 <p>{{item.short_desc}}</p>
            </header>
           <div class="swiper-container oy1"  >
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper"  style="padding-left:10px"  >
                    <!-- Slides -->
                    <div class="swiper-slide" v-for="(item1,index1) in item.products" :key='index1'>
                        <img class='img3' :src='item1.image_url' >
                        <div class='box'>
                             <span class='cn_name'>{{item1.name}}</span>
                             <span class='en_name'>{{item1.summary}}</span>
                             <p>
                                 ¥<span>{{item1.min_price}}</span>起
                               
                             </p>
                        </div>
                        
                    </div>
                   
            
                </div>
              
           </div>
            <div class='list-bottom'>

            </div>

        </section>
        
      
        </div>
</template>
<script>
import Swiper from "swiper";
import Vue from 'vue';
export default {
  name: "List",
  components: {},
  data() {
    return {
      name: "List组件",

       group:[],  
       a:[]       
       }
    },
    methods:{
        getBanner(){
           
            this.$axios.get('/api/public/home/homeForMobile')
            .then((res)=>{
         
                this.group=res.data.groups;
                // console.log(this.group)
               
                Vue.nextTick(()=>{
                    this.mySwiper1=new Swiper(".oy1", {
                            slidesPerView: 2.2,
                            spaceBetween:0,
                            freeMode: true,
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                            },
                            });
                })

            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
        created() {
            this.getBanner()
        },
  
};
</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
@import '../../../../node_modules/swiper/dist/css/swiper.css';
section {
  .h(401);
//   border: 1px solid salmon;
 
  .top {
    .h(70);
    // border: 1px solid slateblue;
    .padding(10,80,0,20);
    margin-bottom: 20px;
    h1 {
      .f-s(20);
      font-weight: bold;
    }
    p {
      .f-s(15);
      color: #999;
      .margin(10,0,0,10);
    }
  }
     .img2{
      .h(155);
      .w(100);
      }
     
      .box{
          display: flex;
          flex-direction: column;
      
         .cn_name{
          .f-s(18);
           color: #484848;
      }
        .en_name{
            .f-s(12);
            color: #999;
            //   .margin(-10,0,0,0);
        }
      }
      .list-bottom{
          .w(355);
          .h(18);
          border-bottom: 1px solid silver;
          margin-top: 10px;
          margin-left: 10px;
      }
     .swiper-slide{
         .h(261);
          .w(161);
        //   border:1px solid red;
         .img3{
          .h(161);
          .w(161);  
      }
      .cn_name,.en_name{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
      .cn_name{
          .f-s(14);
          font-weight: bold;
          .margin(10,0,5,0);
      }
      .en_name{
          color: #999;
          .f-s(12);
      }
      p{
        .f-s(13);
         color: rgb(240,47,69);
         .margin(10,0,5,0);
        span{
            .f-s(18);
           
        }
      }
     } 

 

}

</style>

