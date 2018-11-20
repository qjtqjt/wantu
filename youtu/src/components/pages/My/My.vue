<template>
	<div id="my">
		<div class="header">
			<div class="header-top">
				<h1>个人中心</h1>
				<p>1350296586</p>
				<div class="photo">
					<i class="fa fa-user-o" aria-hidden="true"></i>
				</div>
			</div>
			<div class="header-bottom">
				<img src="https://spics.hitour.cc/e996c789cf75ea12c07e7ccf8bd755cc.png"
					class="imgsize01"/>
				<div class="kalogin">
					<i class="fa fa-plane"></i>
					<span>玩途旅行基金</span>
				</div>
				<div class="kamain">
					<div class="kamain-left">
						<img src="https://spics.hitour.cc/2ed441340b94f5de1487618c692e75fc.png"
							 class="imgsize02">
					</div>
					<div class="kamain-mid">
						<h3>基金余额</h3>
						<p>1基金可无门槛抵扣1元机票消费</p>
					</div>
					<div class="kamian-right">
						<b> ￥ </b>
						<h3>0</h3>
						<b>  </b>
					</div>
					
				</div>
			</div>
			<div class="header-footer">
				<div class="header-footer-img">
					<img src="https://spics.hitour.cc/f92a249ad195989d7a0d730523e4fc6a.png"/>
				</div>
				<div class="header-footer-text">
					<p>邀请好友，赚基金</p>
					<p>已过期，需要购买机票获得权限</p>
				</div>
				<div class="header-footer-font">
					
				</div>
			</div>
		</div>
		<div class="main">
			<h2>我的</h2>
			<div class="me">
				<ul>
					<li v-for="(value,key,index) in arrfont">
						<i v-html="key"></i>
						<span>{{value}}</span>
						<b> < </b>
					</li>
				</ul>
			</div>
			<div class="main-h2-tu">
				<img src="https://spics.hitour.cc/7e9082a282658c88fa3ca8fdc9815d55.png?imageView2/1/w/750/h/94"/>
			</div>
			<h3>联系玩途</h3>
			<div class="main-phone">
				<ul>
					<li v-for="(item,index) in arrfont02">
						<i v-html="item.htm"></i>
						<div class="main-p">
							{{item.tex01}}
							<p>{{item.tex02}}</p>
						</div>
						
						<b> < </b>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer">
			<p @click="unlogin">推出登录</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"My",
		components:{},
		data(){
			return {
				title:"我的界面",
				arrfont:
				{
				'<i class="fa fa-list-alt"></i>':'我的订单',
				'<i class="fa fa-money"></i>':'优惠卷',
				'<i class="fa fa-user-circle-o"></i>':'帐号',
				'<i class="fa fa-address-card-o"></i>':'常用出行人及地址',
				'<i class="fa fa-diamond"></i>':'旅行+会员计划'
				},
				arrfont02:[
					{
						htm:'<i class="fa fa-phone"></i>',
						tex01:'玩途服务热线「海外」',
						tex02:'语言: 中文 | 服务时间: 24小时'
					},
					{
						htm:'<i class="fa fa-phone"></i>',
						tex01:'玩途服务热线「国内」',
						tex02:'语言: 中文 | 服务时间: 24小时'
					}
				]
			}
		},
		methods:{
			unlogin(){
				var stroage=window.locationStroage
				stroage.email="";
				console.log(stroage);
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	#my{		
		background:#f5f5f5;
		.header{
			.w(375);
			.h(430);
			box-sizing:border-box;
			background:#fff;
			.padding(20,20,20,20);
			.header-top{
				.w(335);
				.h(86);
				position:relative;
				h1{
					.fs(26);
					.lh(36);
					font-weight:normal;
					
				}
				p{
					color:#999;
					.fs(16);
					.lh(18);
					.margin(10,0,0,0);
				}
				.photo{
					.w(66);
					.h(66);
					background:#dadada;
					border-radius:50%;
					text-align:center;
					.lh(66);
					position:absolute;
					.top(2);
					.right(10);
				}
			}
			.header-bottom{
				.w(335);
				.h(202);
				position:relative;
				.margin(0,0,5,0);
				box-sizing:border-box;
				.imgsize01{
					.w(335);
					.h(202);
					border-radius:15px;
					position:absolute;					
				}
				.kalogin{
					.w(335);
					.h(20);
					position:absolute;
					.left(20);
					.top(20);
					color:#29667E;
					.fs(12);
					.lh(20);
					i{
						.w(20);
						.h(20);
						color:#eee;
						background:#555;
						border-radius:50%;
						display:inline-block;
						text-align:center;
						.lh(20);
					}
				}
				.kamain{
					.w(335);
					.h(60);
					position:absolute;
					.left(10);
					.top(80);
					display:flex;
					.kamain-left{
						.w(52);
						.h(56);
						.margin(0,8,0,0);
						.imgsize02{
							.w(52);
							.h(56);
						}
					}
					.kamain-mid{
						
						.margin(0,20,0,0);
						h3{
							color:#fff;
							.fs(18);
							.lh(26);
							font-weight:normal;
						}
						p{
							color:#fff;
							.fs(12);
							.lh(20);
						}
					}
					.kamian-right{	
						position:relative;					
						flex:1;
						h3{
							color:#fff;
							.fs(38);
							.lh(46);
							display:inline-block;
						}
						b:nth-child(1){
							.fs(20);
							.lh(80);
							color:#fff;
							position:absolute;
							.top(-20);
							.left(-22);
							font-weight:normal;
						}
						b:nth-child(3){
							.fs(18);
							.lh(20);
							color:#fff;
							position:absolute;
							.top(12);
							.right(15);
							font-weight:normal;
						}
					}
				}
			}
			.header-footer{
				.w(335);
				.h(100);
				border:1px solid #f5f5f5;
				border-radius:10px;
				.padding(15,10,20,10);
				box-sizing:border-box;
				display:flex;
				.header-footer-img{
					.padding(10,0,0,0);
					box-sizing:border-box;
					img{
						.w(52);
						.h(52);
					}
					
				}
				.header-footer-text{
					.w(260);
					.h(58);
					.padding(20,0,0,20);
					box-sizing:border-box;
					p:nth-child(1){
						.fs(14);
						.lh(18);
						color:#f02f45;
					}
					p:nth-child(2){
						.fs(12);
						.lh(20);
					}
				}
				.header-footer-font{
					.w(18);
					.fs(16);
					color:#bdbdbd;
					.padding(25,0,0,0);
					box-sizing:border-box;
				}
			}
		}
		.main{
			h2{
				.w(375);
				.h(45);				
				.fs(12);
				color:#999;				
				font-weight:normal;
				.padding(20,20,0,20);
				box-sizing:border-box;
			}
			.me{
				.padding(0,20,0,20);
				box-sizing:border-box;
				background:#fff;
				li{
					.w(335);
					.h(50);
					.lh(40);
					border-bottom:1px solid #eee;
					position:relative;
					i{
						.fs(16);
						color:#f02f45;
					}
					span{
						.fs(16);
					}
					b{
						.fs(16);
						color:#bdbdbd;
						position:absolute;
						.right(10);
						.top(8);
					}
				}
			}
			.main-h2-tu{
				.w(375);
				.h(45);								
				img{
					.w(375);
					.h(45);
				}			
			}
			h3{
				.w(375);
				.h(45);				
				.fs(12);
				color:#999;				
				font-weight:normal;
				.padding(20,20,0,20);
				box-sizing:border-box;
			}
			.main-phone{
				.padding(0,20,0,20);
				box-sizing:border-box;
				background:#fff;
				li{
					.w(335);
					.h(70);
					.lh(70);
					display:flex;
					border-bottom:1px solid #eee;
					position:relative;
					i{
						.fs(16);
						color:#f02f45;
					}
					.main-p{
						.w(250);
						.h(60);
						.fs(16);
						.lh(20);
						.padding(10,0,0,30);
						box-sizing:border-box;
						p:nth-child(1){
							.fs(12);
							.lh(20);
							color:#bdbdbd;
						}
					}
					
					b{
						.fs(16);
						color:#bdbdbd;
						position:absolute;
						.right(10);
						.top(2);
					}
				}
			}
			
		}
		.footer{
			.w(375);
			.h(45);				
			.fs(12);
			color:#999;				
			font-weight:normal;
			.padding(20,20,0,20);
			box-sizing:border-box;
		}
	}
</style>