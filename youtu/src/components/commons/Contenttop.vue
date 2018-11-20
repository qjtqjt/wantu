<template>
    <div class='cont-top'>
          {{title}}
    </div>
</template>
<script>
export default {
    name:'contenttop',
    components:{},
    data(){
        return{
            title:'开始计划下一次出行'
        }
    }
}
</script>
<style lang="less" scoped>
    @import url('../../styles/main.less');
.cont-top{
    .h(30);
    // border: 1px solid sandybrown;
    .margin(30,0,20,0);
     .f-s(20);
     .padding(0,0,0,20);
     font-weight: bold;
}
</style>


