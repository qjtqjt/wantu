<template>
    <div class='hbox'>
        <router-view/>
        <div class='hbox-top'>
             <Header></Header>
             <img class='hbox-img' :src='gdata.base_info.h5_image_url' >
             <div class='hbox-con'>
                 <h1>{{gdata.base_info.cn_name}}</h1>
                 <h2>{{gdata.base_info.city_name}}</h2>
             </div>
        </div>
         <ul class='hbox-ul' >
                <!-- <router-link class="img2" :to="{path:'/List',query:{name:item.dest_code}}"> -->
                 <li @click="selIrem(index)" :class="index===now?'hl':''" v-for="(item,index) in gdata.tabs" :key="index">{{item.name}}</li>
          </ul>
        
          <div class=" aa list-contain" 
			v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
          >
          <aside  v-for="(item1,index) in gdata.products" :key="index+111">
              <img  class='aside-img'  :src="now? item1.cover_image : item1.images[0].image_url" alt="">
              <div class='aside-right'>
                    <span class='title'>{{now?item1.name:item1.alias}}</span>
                    <p class='a'>{{now?item1.summary : item1.brief}}</p>
                    <span class='b'></span>
                    <span class='monoy' v-if="item1.show_prices && item1.show_prices.price">¥{{now?item1.show_prices.price : item1.min_price}}起</span>
              </div>
          </aside>
          </div>
          <Footer></Footer>
          <Bottom></Bottom>
    </div>
 
</template>
<script>
import Vue from 'vue';
import Header from '../../commons/Header';
import Bottom from '../../commons/Bottom';
import Footer from '../Home/Footer';
import { Toast,InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

export default {
    name:'LBanner',
    components:{Header,Footer,Bottom},
    data(){
        return{
           gdata:{
               base_info:[],
               products:[],
                   
           },
           now:0,
           bb:[1,2,5,6],
           arr:[],
           page:1,
           count:5
        }
    },
    methods:{
        loadMore(){
            this.getData()
        },
        getData(){
            let newNmae=this.$route.query.name;
            console.log(newNmae)
            this.toast=Toast({
                 message: '请求ok',
			     iconClass: 'fa fa-spinner fa-spin'
            })
            // http://www.wantu.cn/v2/m/dest/BKK?tab_id=2
            // http://www.wantu.cn/public/city/cityData
            this.$axios.get("/api/public/city/cityData",{
                            // params:{city_code:newNmae,tab_id:div}   
                            params:{
                                city_code:newNmae,
                                tab_id:this.bb[this.now],
                                }
            })
            .then((res)=>{
                // :src='gdata.base_info.h5_image_url'
                this.gdata=res.data;
                this.gdata.base_info = res.data.base_info;
                this.gdata.products = res.data.tab_info.products;
                // console.log(this.gdata.products)
                 this.gdata.products=this.gdata.products.concat(res.data.tab_info.products)
           
                // console.log( this.gdata.products)
            //   Toast('请求ok');
              this.page++;
              this.toast.close();
            })
            .catch((err)=>{
                console.log(err)
            })
        },
         selIrem(index){
            this.now=index;
            console.log(this.now);
            this.getData();
        },
    },
    created(){
         this.getData();
       
    },
    // destroyed(){
    //         // this.mySwiper=null
    //         Indicator.close();
	// 	}
}
</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
.hbox{
    position: relative;
    background-color: #cfc7c750;
    .hbox-top{
        .h(250);
        // border: 1px solid salmon;
        .hbox-img{
            height: 100%;
            width: 100%;
        }
        .hbox-con{
            position: absolute;
            width: 100%;
            .h(40);
            top: 90px;
            text-align: center;
            // border: 1px solid salmon;
            color: aliceblue;
            
            h1{
                .f-s(30)
            }
            h2{
                .f-s(25)
            }
        }
    }
    .hbox-ul{
        .h(50);
        // border: 1px solid slategrey;
        display: flex;
         background-color: white;
        li{
           flex: 1;
           .f-s(15);
           .lh(50);
           text-align: center;
        }
        .hl{
            border-bottom: 3px solid salmon;
        }
    }
    .aa{
        
  aside{
        .h(152);
        display: flex;
        // border: 1px solid sienna;
        .padding(20,10,0,10);
        .margin(15,0,0,0);
         background-color: white;
        .aside-img{
            width: 3rem;
            height: 3rem;
            border: 1px solid red;
            .margin(0,10,0,0)
        }
        .aside-right{
            display: flex;
            flex-direction: column;
             overflow: hidden;
               text-overflow: ellipsis;
                white-space: nowrap;
            .title,.monoy{
                .f-s(15)
            }
            .title{
              
            }
            .a{
                .f-s(13);
                color: #999;
                
                .margin(5,0,5,0);
            }
            .b{
                .f-s(13);
                background-color: #999;
                .w(60);
                border-radius: 5px;
                text-align: center;
            }
            .monoy{
                color: red;
                .margin(20,0,0,0)
            }
            
        }
    }
    }
  
    
}
</style>


