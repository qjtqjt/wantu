<template>
	<div class="home">
		<div class="header">
			<h1>{{name}}</h1>
			<div class="search-input">
				<div class="search-box">
					<div class="font-i">
						<i class="fa fa-map-marker"></i>
					</div>
					<input type="text"  class="search-input" placeholder="请输入一个目的地" />
					<div class="search-ul" v-if="key">
						<ul>
							<li></li>
						</ul>
					</div>	
				</div>			
			</div>
		</div>
		
		<div id="main">
			<div class="nav-dests-left">
				<ul>
					<li v-for="(item,index) in arr" :class="index==nowli?'active':''" @click="clickli(index)">
						<a>{{item.title}}</a>
					</li>
				</ul>
			</div>
			<div class="nav-dests-right">
				<div class="right-top">
					<ul>
						<li v-for="(item,index) in arrright.hots" :class="(index+1)%2==0?'paddingLeft':'paddingRight'">
							<img :src="item.image_url"/>
							<div id="data-box">
								<div class="p">
									<p>{{item.title}}</p>
									<p>{{item.code}}</p>
								</div>
							</div>						
						</li>
					</ul>
				</div>
				<div class="right-bottom">
					<ul>
						<li v-for="(item,index) in arrright.subs">
							<h6>{{item.title}}</h6>
							<p>
								<span v-for="(item,index) in item.subs">{{item.title}}</span>
							</p>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
	    <!--<FileList v-for="item in list" :url="item.url" :name='item.name'></FileList>-->
	</div>
</template>
<script>
//import Header from '../../commons/Header'//引入组件	
export default{
	name:'Des',
	components:{},
	data(){
		return {
			name:'下一次你想去哪里？',
			key:false,
			arr:[],
			nowli:0,
			arrright:[]
		}
	},
	methods:{
		fn(){
			this.$axios.get('api/public/home/navigate',{
				parmas:{}
			})
			.then((res)=>{
//				console.log(res);
				this.arr=res.data
//				console.log(this.arr);
           		this.arrright=this.arr[0];
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
.home{
	zoom:1;
	/*overflow:hidden;*/
	.header{
		position:fixed;
		background:#fff;
		border-bottom:1px solid #dadada ;
		h1{
			.w(375);
			.h(58);
			.fs(22);
			.padding(30,24,0,24);
			box-sizing: border-box;
			
		}
		.search-input{
			.w(327);
			.h(53);
			.margin(20,0,30,25);
			box-sizing: border-box;	
			.search-box{
				.w(327);
				.h(53);
				box-sizing: border-box;
				position:relative;
				
				.font-i{
					.w(20);
					.h(21);
					color: red;
					position: absolute;
					.top(12);
					.left(14);
					.fs(20);
					z-index: 999;
				}
				.search-input{
					display: block;
					margin:0;
					.padding(15,16,15,36);
					border-radius: 2px;
					.lh(21);
					.fs(15);
					color:#666;
					outline: none;
					box-shadow: none;
					box-sizing: border-box;
					border:1px solid #ddd ;
					box-sizing: border-box;
				}
			}			
		}
	}
	#main{
		
		position:relative;
		.top(162);
		.left(0);
		/*overflow:hidden;*/
		.nav-dests-left{
			position:fixed;
			background:#f5f5f5;
			.w(120);
			.h(477);
			li{
				.w(120);
				.h(46);
				text-align: center;
				.lh(46);
				color:#323232;
				.fs(15);
			}
			.active{
				background:#fff !important;
				a{
					border-bottom: 2px solid #f56d7d;
					color: #666;
					font-weight: 900;
				}				
			}	
		}
		.nav-dests-right{
			.w(255);
			.h(477);
			z-index:-4;
			.padding(12,12,12,12);
			
			position:absolute;
			.left(120);
			.top(0);
			.right-top{
				.w(217);
				.h(320);
				.fs(16);
				.margin(0,12,0,12);
				border-bottom:1px solid #eee ;
				ul{
					overflow: hidden;
				}
				li{
					float: left;
					.w(103.5);
					.h(75);
					text-align: center;
					img{
						.w(98.5);
						.h(65);
						float: left;						
					}
					#data-box{
						.w(98.5);
						.h(65);	
						position: relative;
						background-color: rgba(0,0,0,.3);
						.p{
							.w(80);
							.h(40);
							color: #fff;
							position: absolute;
							left: 50%;
							top:50%;
							transform: translate(-50%,-50%);
							text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
						}
					}					
				}
				.paddingRight{
					.padding(0,5,5,0);
				}
				.paddingLeft{
					.padding(0,0,5,5);
				}
			}
			.right-bottom{
				li{
					.w(231);
					.h(77);
					.padding(19,12,0,12);
					h6{
						.lh(20);
						color: #323232;
						font-weight: 900;
						.fs(16);
					}
					p{
						.lh(38);
						color: #666;
						.fs(16);
						span{
							.padding(0,12,0,0);
						}
					}
				}
			}
		}
	}
}
.home:after{
    /*添加一个内容*/
    content: "";
    /*转换为一个块元素*/
    display: block;
    /*清除两侧的浮动*/
    clear: both;
}
</style>