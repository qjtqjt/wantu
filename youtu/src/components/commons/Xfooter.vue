<template>
	<div class="xfooter">
		{{name}}
	</div>
</template>

<script>
export default{
	name:'Xfooter',
	components:{},
	data(){
		return{
			name:'立即购买'
		}
	}
}
</script>
<style lang="less" scoped="scoped"> 
    @import "../../styles/main.less";
    .xfooter{
    	width:100%;
		.h(50);
		background-color:#e96a65;
		.f-s(20);
		color:#fff;
		text-align:center;
		.lh(50);
		position:fixed;
		.bottom(0);
		.left(0);
		border-top:0.053333rem solid #ddd;
    }

</style>