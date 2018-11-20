<template>
    <div class='list'>
        <section>
            <header class="top">
                 <h1>九大非常目的地</h1>
                 <p> Super自由行精选目的地</p>
            </header>
           <div class="swiper-container" id="oy">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper"  style="padding-left:10px" >
                    <!-- Slides -->
                    <div class="swiper-slide" v-for="(item,index) in list1" :key="index">
                        <router-link class="img2" :to="{path:'/List',query:{name:item.dest_code}}">
                            <img class='img2' :src="item.cover_url" alt="">
                              <div class='box'>
                             <span class='cn_name'>{{item.dest_cn_name}}</span>
                             <span class='en_name'>{{item.dest_en_name}}</span>
                        </div>
                        </router-link>
                        
                        
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
       list1:[],
       group:[],
       
       }
    },
    methods:{
        getBanner(){
            // console.log(this)
            // https://m.maizuo.com/v4/api/billboard/home?__t=1542193665543
            //http://www.wantu.cn/public/home/homeForMobile
            this.$axios.get('/api/public/home/homeForMobile')
            .then((res)=>{
                this.list1=res.data.hot_dests;
                // this.group=res.data.groups;
                console.log(this.list1)
                //  localStorage['testKey']=this.list1[0].dest_code ;
                //  console.log(localStorage['testKey'])
                Vue.nextTick(()=>{
                    this.mySwiper1=new Swiper('#oy', {
                            slidesPerView: 3.3,
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
  .h(331);
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
          .w(360);
          .h(18);
          border-bottom: 1px solid silver;
          margin-left: 10px;
      }

 

}

</style>

