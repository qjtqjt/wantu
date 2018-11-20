<template>
	<div class="login">
		<div class="login-img">
			<img src="./li_tu_01.jpg" />
		</div>
		<div class="top">
			<i class="fa fa-chevron-left"></i>
			<h2>
			<div class="top-img">
				<img src="./login.png" />
			</div>
			{{phone}}
			<div class="line"></div>
			</h2>			
		</div>
		<div class="main">
			<div class="phone01">
				<input type="text" class="user" v-model="email" placeholder="邮箱" @blur="checkPhone"/>
				<span v-show="usvif">{{us_text}}</span>
				<input type="text" class="user" v-model="pass" placeholder="密码" @blur="checkPass"/>
				<span v-show="passvif">{{pass_text}}</span>
			</div>
			<div class="mian-btn">
				<span>世界那么大，我想去看看</span>
				<a class="btn" @click="regbtn">登录</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Login",
		components:{},
		data(){
			return {
				phone:"欢迎登录",
				email:"",
				pass:"",
				num:"",
				time:60,
				btntxt:"获取验证码",
				disabled:"",
				key:"",
				pass_text:"",
				us_text:"",
				usvif:false,
				passvif:false
			}
		},
		methods:{
			//邮箱验证
		   checkPhone(){
			    var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			    if(this.email==''){
//			    	alert("请输入邮箱");
					this.usvif=true;
			    	this.us_text="请输入邮箱";
			    }else if(!regEmail.test(this.email)){
//			    	alert("邮箱格式不正确");
					this.usvif=true;
			    	this.us_text="邮箱格式不正确";
			    	this.time=0;
			    }else{
			    	this.usvif=false;
			    }
			},
			//密码验证
			checkPass(){
			    var myreg_pass = /^[a-zA-Z]\w{5,11}$/;
				if(!myreg_pass.test(this.pass)){
					this.passvif=true;
					this.pass_text='<p>以字母开头，长度在6-12之间，只能包含字符、数字和下划线</P>';
				}else{
					this.passvif=false;
				}
			},
			//点击登录按钮
			regbtn(){
				console.log(111);
				this.key=this.email&&this.pass;
				if(!this.key){
					alert("请先填好信息");
					return ""
				}
				this.$axios.post('email/api/user/login',{
			    	params:{
			    		us:this.email,
						pass:this.pass,
			    	}
		    	})
				.then((res)=>{
					console.log(res);
					if(res=="登录ok"){
						//设置用户名localStorage
						console.log(window.localStorage.mail);
						var storage=window.localStorage
						storage.mail=this.email;
						console.log(storage.mail)
						this.$router.push({path: '/Des'});
					}
				})
				.catch((error)=>{
					console.log(error);
				})
			}
		},
		mounted(){

		}
	}
</script>

<style lang="less" scoped="scoped"> 
	@import '../../../styles/main.less';
	.login{
		.padding(15,15,15,15);
		.login-img{
			img{
				.w(340);
			}
		}
		.top{
			.w(345);
			/*.h(120);*/
			position:relative;
			
			
			i{
				.w(20);
				.h(20);
				position:absolute;
				.left(10);
				.top(20);
				.fs(12);
				display:block;
			}
			h2{
				.w(345);
				.h(80);
				position:relative;
				.padding(20,24,0,24);
				.fs(36);
				color:#333;
				.lh(80);
				.top-img{
					.w(90);
					.h(40);
					background-image:url('./li_tu_01.jpg');
					text-align:left;
					position:absolute;
					.top(20);
					.right(70);
					border-radius:40%;
					img{
						.w(67);
						.h(15);
						.lh(20);
						vertical-align: middle;
						display:inline-block;
						position:absolute;
						.left(10);
						.top(10);
					}
				}
				.line{
					.w(28);
					.h(0);
					border:2px solid #000;
					
				}
			}			
		}
		.main{
			.phone01{
				.w(340);
				/*.h(55);*/
				.margin(10,10,10,0);
				box-sizing: border-box;
				span{
					.fs(12);
					.lh(20);
					.w(290);
					.h(30);
					text-align:left;
					display:block;
					color:red;
				}
			}
			.phone02{
				.w(340);
				/*.h(55);*/
				.margin(10,10,10,0);
				box-sizing: border-box;
				position:relative;
				.code{
					.w(120);
					.h(25);
					border:1px solid #F02F45 ;
					color:#F02F45;
					text-align: center;
					.lh(21);
					position:absolute;
					box-sizing: border-box;
					.top(26);
					.right(15);
					z-index: 3;
					.fs(14);
					background:#fff;
				}
			}
			input{
				.w(340);
				.h(50);
				border:1px solid #dadada ;
				box-sizing: border-box;
				padding-left: 10px;
				.lh(50);
				.fs(14);
			}
			.text{
				.fs(14);
				color:#999;
				.lh(28);
				.padding(0,0,0,10);
			}
			.mian-btn{
				.padding(10,0,10,10);
				.lh(30);
				span{
					color:#f02f45;
					.fs(14);
					.lh(26);
					
				}
				.btn{
					background:#6C4;
					.w(84);
					.h(40);
					.fs(18);
					display: inline-block;
					border-radius: 20px;
					text-align: center;
					.lh(40);
					color:#fff;
					font-weight: 900;
					float: right;
				}
			}
		}
	}
	
</style>