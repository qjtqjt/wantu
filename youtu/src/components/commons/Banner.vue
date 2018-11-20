<template>
    <div class='banner'>
        <div class="swiper-container">
	    <!-- Additional required wrapper -->
	    <div class="swiper-wrapper" >
	        <!-- Slides -->
	        <div class="swiper-slide" v-for="(item,index) in list" :key='index'>
               <img class='img1' :src="item">
            </div>
       
	    </div>
	    

	    <!-- If we need scrollbar -->
	    <div class="swiper-scrollbar"></div>
	</div>

    </div>
</template>
<script>
    import Swiper from 'swiper';

    export default{
        name:'Banner',
        components:{},
        data(){
            return{
                name:'baaner',
                list:['https://spics.hitour.cc/dcab4ee85e534d75d4978000372c0e31.jpg?imageView2/1/w/750/h/376',
                'https://spics.hitour.cc/813973b085302ed4eec6eb5b2239d719.jpg?imageView2/1/w/750/h/376',
                'https://spics.hitour.cc/1ff44de7213084bc9549162cd59bb69c.jpg?imageView2/1/w/750/h/376'
                ]
            }
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
				 loop: true
			});	
        },


    }
</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
@import '../../../node_modules/swiper/dist/css/swiper.css';
.banner{
    .h(188);
    border: 1px solid palegreen;
    .swiper-slide{
        width: 100%;
        .h(188);
         .img1{
        .w(375);
        .h(188);
    }
    }
   
}
</style>

