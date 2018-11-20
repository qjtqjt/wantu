<template>
    <div class='banner'>
        <div class="swiper-container"  @mouseover="stop" @mouseleave="play">
	    <!-- Additional required wrapper -->
	    <div class="swiper-wrapper" :style="containerStyle">
	        <!-- Slides -->
        	<div class="swiper-slide" v-for="(item,index) in arrbannerimg" :key='index'>
        		<img class='img1' :src="item.image_url" >
        	</div>
	    </div>	    

	    <!-- If we need scrollbar -->
	    <div class="swiper-scrollbar"></div>
	</div>

    </div>
</template>


<script>
    import Swiper from 'swiper';
	import Vue from 'vue';
    export default{
        name:'Banner',
        components:{},
        props: {
		    initialSpeed: {
		      type: Number,
		      default: 30
		    },
		    initialInterval: {
		      type: Number,
		      default: 3
		    }
	  	},
        data(){
            return{
                name:'baaner',
                now:null,
				arr:[],
				arrbanner:[],
				arrdata:[],
				arrbannerimg:[],
				imgWidth:320,
			    currentIndex:1,
			    distance:-320,
			    transitionEnd: true,
			    speed: this.initialSpeed,
				city_code:['BKK','HKT','CNX','SIN','SYX','TYO','OSA','HKG','SABA']
	            }
        },
        created(){
        	this.fn();		
		},
        computed: {
			containerStyle() {
				return {
					transform: `translate3d(${this.distance}px, 0, 0)`
				}
			},
			interval() {
				return this.initialInterval * 1000
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			fn(){
				this.$axios.get("api/public/city/cityData?city_code="+this.city_code[0]+"&tab_id=1&search=1")
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
	           	})
				.catch((err)=>{
	           		console.log(err)
	           	})
	      	},
			init() {
				this.play()
				window.onblur = function() {
					this.stop()
				}.bind(this)
				window.onfocus = function() {
					this.play()
				}.bind(this)
			},
			move(offset, direction, speed) {
//				console.log(speed)
				if(!this.transitionEnd) return
				this.transitionEnd = false
				direction === -1 ? this.currentIndex += offset / 600 : this.currentIndex -= offset / 320
				if(this.currentIndex > 5) this.currentIndex = 1
				if(this.currentIndex < 1) this.currentIndex = 5

				const destination = this.distance + offset * direction
				this.animate(destination, direction, speed)
			},
			animate(des, direc, speed) {
				if(this.temp) {
					window.clearInterval(this.temp);
					this.temp = null;
				}
				this.temp = window.setInterval(() => {
					if((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
						this.distance += speed * direc
					} else {
						this.transitionEnd = true
						window.clearInterval(this.temp)
						this.distance = des
						if(des < -1575) this.distance = -320
						if(des > -320) this.distance = -1575
					}
				}, 20)
			},
			jump(index) {
				const direction = index - this.currentIndex >= 0 ? -1 : 1;
				const offset = Math.abs(index - this.currentIndex) * 320;
				const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed;
				this.move(offset, direction, jumpSpeed)
			},
			play() {
				if(this.timer) {
					window.clearInterval(this.timer)
					this.timer = null
				}
				this.timer = window.setInterval(() => {
					this.move(320, -1, this.speed)
				}, this.interval)
			},
			stop() {
				window.clearInterval(this.timer)
				this.timer = null
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
    .swiper-slide{
        width: 100%;
        .h(275);
        .img1{
	        width:100%;
	        .h(275);
	    }
    }
   
}
</style>

