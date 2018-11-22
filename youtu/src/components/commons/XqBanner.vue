<template>
    <div class='banner'>
        <div class="swiper-container">
		    <div class="swiper-wrapper">
	        	<div class="swiper-slide" v-for="(item,index) in arrbannerimg" :key='index'>
	        		<img class='img1' :src="item.image_url" >
	        	</div>
		    </div>	    
		    <!-- 如果需要滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
    </div>
</template>


<script>
    import Swiper from 'swiper';
	import Vue from 'vue';
    export default{
        name:'XqBanner',
        components:{},
        data(){
            return{
                name:'baaner',
                now:null,
				arr:[],
				arrbanner:[],
				arrdata:[],
				arrbannerimg:[],
//				city_code:['BKK','HKT','CNX','SIN','SYX','TYO','OSA','HKG','SABA']
				city_code:null
	            }
        },
        created(){
        	this.fn();	
		},
		mounted(){
			
			
		},
		methods: {
			fn(){
				this.$axios.get("api/public/city/cityData?city_code=BKK&tab_id=1&search=1")
				.then((res)=>{
					//console.log(res);
					this.arr=res.data
					//console.log(this.arr);
					this.arrdata=this.arr.tab_info;
//					console.log(this.arrdata);
	           		this.arrbanner=this.arrdata.products;
//	           		console.log(this.arrbanner);
	           		this.arrbannerimg=this.arrbanner[0].images;
//	           		console.log(this.arrbannerimg);
					//轮播图
					this.$nextTick(()=>{
						var mySwiper = new Swiper('.swiper-container', {
							loop: true, // 循环模式选项
							autoplay:true,
							// 如果需要滚动条
							scrollbar: {
								el:'.swiper-scrollbar',
							}
						})
					})
	           	})
				.catch((err)=>{
	           		console.log(err)
	           	})
	      	}			
		}
    }
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
@import '../../../node_modules/swiper/dist/css/swiper.css';
.banner{
    .h(188);
    position:absolute;
    .top(35);
    .left(0);
    .swiper-wrapper{
    	.swiper-slide{
	        width: 100%;
	        .h(275);
	        .img1{
		        width:100%;
		        .h(275);
		    }
	    }
    }
    
   
}
</style>

