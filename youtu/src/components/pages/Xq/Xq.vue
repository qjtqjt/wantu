<template>
	<div class="xq">
		<div class="header">
			<a><img src="./login02.png"/></a>			
		</div>
		<div class='banner'>
			<XqBanner></XqBanner>
		</div>
		<div class="title">
			<p class='ti'>
              	{{arrind.alias}}({{arrind.brief}})
 
			</p>
			<p class='price'><b>{{arrind.min_price}}</b>元起/成人</p>
			<p class='lie'>
				<span class="one">
					首单立减
				</span>
				/
				<span class="two">
					APP下单&nbsp;立减30
				</span>
			</p>
		</div>
		<div class="liang">
			<h1 class='h1'>产品亮点</h1>
			<h2 class='h2'>直飞航班：搭乘直飞，一站直达，省去转机时间以及旅途劳累</h2>
			<div class="liang-img">
                 <img class="img" src="https://spics.hitour.cc/7e9082a282658c88fa3ca8fdc9815d55.png?imageView2/1/w/822/h/102"/>				
			</div>
			<h1 class='h1'>机票信息</h1>
			<h2 class='h2'>此航班仅供参考，对应的航班时间均为当地时间，低价折扣机票存在航班调整的可能（包括航空公司、航班号、起飞时间的变化等），故机票情况以最终电子客票为准。</h2>
		   
		   	
		   	
		   <!--这里可以for循环    开始-->
		   <div class='time'>
		    	<span class="go">去</span>
		    	<div class="l">
		    		<span class="day">第一天</span>
		    		<span class="guo">国航CA805</span>
		    	</div>	
		    	<div class="z">
		    		<span class="one1">23:20</span>
		    		<span class="two1">---</span>
		    		<span class="three">02:25</span>
		    	</div>	
		    	<div class="l">
		    		<span class="day">上海浦东</span>
		    		<span class="guo">曼谷(素万那普)T1</span>
		    	</div>
		    </div>
		    
		    
		    <div class='time'>
		    	<span class="go">返</span>
		    	<div class="l">
		    		<span class="day">第7天</span>
		    		<span class="guo">国航CA805</span>
		    	</div>	
		    	<div class="z">
		    		<span class="one1">3:40</span>
		    		<span class="two1">---</span>
		    		<span class="three">08:40</span>
		    	</div>	
		    	<div class="l">
		    		<span class="day">上海浦东</span>
		    		<span class="guo">曼谷(素万那普)T1</span>
		    	</div>
		    </div>
		    <!--for循环结束-->
		</div>
		
		<!--服务详情-->
		<aside class='asi'>
				<h1 class='h1'>服务详情</h1>
			     <span class="dianji">收起</span>
			<h3 class="h3">费用包含</h3>	
			<ul class="list">
				<li class='list-li'>机票：往返经济舱机票（含税）</li>
			</ul>
			<h3 class="h3">费用不包含</h3>
			
		</aside>
		
		<!--预定须知-->
		<aside class='asi2'>
				<h1 class='h1'>预定须知</h1>
			     <span class="shouqi">收起</span>
			<!--这里可以for循环    开始-->
				<h3 class="h3">预定流程</h3>	
				<ul class="list">
					<li class='list-li'>请提前31天报名（需持有有效期6个月以上的护照)。</li>
				</ul>
				<!--这里可以for循环    结束-->
		</aside>
		
		<div class="footer">
			已经到底啦。。。。
		</div>
		<Xfooter></Xfooter>
	</div>
</template>
<script>
import Xfooter from '../../commons/Xfooter';//引入组件	
import XqBanner from '../../commons/XqBanner';//引入组件	
export default{
	name:'Xq',
	
	components:{Xfooter,XqBanner},
	data(){		
		return {
			name:'下一次你想去哪里？',
			now:null,
			arr:[],
			arrbanner:[],
			arrdata:[],
			index:null,
			arrind:{},
			city_code:['BKK','HKT','CNX','SIN','SYX','TYO','OSA','HKG','SABA']
		}
	},
	methods:{
		fn(){
			this.$axios.get("api/public/city/cityData?city_code="+this.city_code[0]+"&tab_id=1&search=1")
			.then((res)=>{
//				console.log(res);
				this.arr=res.data
//				console.log(this.arr);
				this.arrdata=this.arr.tab_info;
				console.log(this.arrdata);
           		this.arrbanner=this.arrdata.products;
           		console.log(this.arrbanner);
           		this.arrind=this.arrbanner[0];
           		console.log(this.arrind);
           		
           	})
           	.catch((err)=>{
           		console.log(err)
           	})
		},
		clickli(index){
			this.nowli=index;
			console.log(this.nowli);
			this.arrright=this.arr[this.nowli];
		}
	},
	created(){
		this.fn();
	}
}
</script>
<style lang="less" scoped>
 @import '../../../styles/main.less';	
.xq{
	.header{
		.h(40);
		width:100%;
		color:#333;
		background:80% center rgb(255, 255, 0);
		.padding(10,10,10,20);
		box-sizing:border-box;
		position:fixed;
		
		a{
			display:block;
			.w(60);
			.h(20);
			img{
				.w(57);
				.h(15);
				display:block;
				
			}
		}
	}
	.banner{
		.h(320);
		/*border:1px solid red;*/
		.b-img{
			width: 100%;
			height: 100%;
		}
	}
	.title{
		.w(330);
		.h(160);
		border-bottom: 1px solid #eee;
		.margin(20,20,20,20);
			.ti{
				.fs(17);
			}
			.price{
				.margin(10,0,10,0);
				.fs(13);
				color: red;
				b{
					.fs(19);
					
				}
			}
			.lie{
				.w(208);
				.h(25);
				border:1px solid red;
				.fs(10);
				line-height: 22px;
				border-radius: 5px;
				.margin(20,0,0,0);
				.one{
					.padding(0,8,0,10);
					display: inline-block;
					background-color: #e96a65;
					color: white;
				}
			}
			
		
	}
	.liang{
		.padding(0,0,40,0);
		border-bottom: 1px solid silver;
		.h1,.h2{
			.margin(20,10,20,20);
		}
		.h1{
			.fs(18);
		}
		.h2{
			.fs(10);
			color: #666666;
		}
		.liang-img{
			img{
				.h(50);
				width: 100%;
			}
		}
		.time{
		/*	display: flex;*/
		.margin(20,0,0,0);
			.go{
				float: left;
				.fs(12);
				.margin(0,10,0,20);
				background-color: red;
				border-radius: 3px;
				color: white;
				display: inline-block;
			}
			.l{
				/*float: le*/
				/*display: inline-block;*/
				.w(310);
				display: flex;
				justify-content: space-between;
				.fs(14);
				.margin(7,0,0,40);
			}
		}
		.z{
			.fs(25);
			.margin(10,0,0,10);
			display: flex;
			justify-content: space-around;
		}
		
	}
	.asi,.asi2{
		/*position: relative;*/
		border-bottom: 1px solid silver;
		.padding(0,0,40,0);
			.h1{
				.fs(17);
				display: inline-block;
				.margin(0,0,0,20)
			}
			.dianji{
				.fs(14);
				display: inline-block;
				float: right;
				.margin(20,20,0,0);
			}
			.h3{
				.fs(15);
				.margin(10,0,0,20)
			}
			.list{
				.list-li{
					.margin(10,0,0,20);
					.fs(5);
				}
			}
		}
		.asi2{
			.fs(14);
			.padding(20,0,20,0);
			.shouqi{
				float: right;
				.margin(0,20,0,0);
			}
		}
		.footer{
			.fs(15);
			text-align: center;
			.margin(20,0,70,0);
		}
}

</style>;

