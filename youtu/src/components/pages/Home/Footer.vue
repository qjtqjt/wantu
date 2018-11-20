<template>
    <div>
        <footer>
            <img :src="list" alt="">
        </footer>
    </div>
</template>
<script>
export default {
    name:'Footer',
    component:{},
    data(){
        return{
            list:'https://spics.hitour.cc/b5460f216e958c47c3e8f98512334532.png?imageView2/1/w/750/h/376/format/'
        }
        
    }
}
</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
footer{
     .h(260);
     
    //  border: 1px solid salmon;
     img{
         .h(177);
         .w(350);
         .margin(25,0,0 ,12)
     }
}
</style>


