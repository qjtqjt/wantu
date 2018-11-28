<template>
<div class="L-bottom">
        <div class='bottom-top'>
             <h1 class='title'>热门活动</h1>
             <p  class='name'>有些薅羊毛的机会不要错过</p>
          </div>
          <section class='section'  v-for="(item,index) in list" :key="index">
          <!-- <div class='bottom-box'> -->
              <h2 class='t'>{{item.title}}</h2>
               <img :src="item.groups[0].h5_image_url" alt="" class='x-img'>
               <p class="img-title">{{item.groups[0].title}}</p>
               <ul class='ul-list'>
                   <li class='list' v-for="(item1,index) in item.categories" :key="index">
                       <img :src="item1.image_url" alt="" class="list-img">
                        <div class="l-box">
                               <span class='one'>{{item1.category_name}}</span>
                               <span class='two'>{{item1.summary}}</span>
                        </div>
                      
                   </li>
               </ul>
          <!-- </div> -->
    </section>
</div>
</template>
<script>
export default {
    name:'ListBotton',
    components:{},
    data(){
        return{
            list:[]
        }
    },
    methods:{
         getData(){
             this.$axios.get('/api/public/home/homeForMobile')
             .then((res)=>{
                 this.list=res.data.block_list;
                //  console.log(this.list)
             })
             .catch((err)=>{
                //  console.log(err)
             })
             
         }
    },
    created() {
        this.getData()
    },
}
</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
.L-bottom{
      .bottom-top{
          .h(50);
        //   border: 1px solid saddlebrown;
          .margin(20,0,36,10);
          .title{
              .f-s(22);
              font-weight: bold;
          }
          .name{
              .f-s(14);
              color: #999;
          }
      }
    .section{
        position: relative;
       .h(670);
       .w(345);
       border-bottom: 1px solid #999;
       .margin(0,0,0,15);
          .t{
              .f-s(20);
              font-weight: bold;
              .margin(20,0,25,0);
          }
          .x-img{
             .h(223);
             .w(345);
             
          }
          .img-title{
              position: absolute;
              .f-s(20);
              .top(160);
              .left(60);
              color:whitesmoke; 
          }
          .list{
              display: flex;
                 .list-img{
                    .h(80);
                    .w(80);
                    .margin(8,15,0,0);
                }
                .l-box{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                     .one{
                    .f-s(16)
                }
                .two{
                    .f-s(12);
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                }
                
          }
            
  }
}
  
</style>


