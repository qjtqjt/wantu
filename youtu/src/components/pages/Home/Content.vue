<template>
    <div class="content">
        <Contenttop></Contenttop>
        <Contentcon></Contentcon>
        <Contentbotton></Contentbotton>
       <!-- {{name}} -->
    </div>
  
</template>

<script>
import Contenttop from '../../commons/Contenttop';//引用组件
import Contentcon from '../../commons/Contentcon';
import Contentbotton from '../../commons/Contentbotton';
export default {
    name:'Content',
    components:{Contenttop,Contentcon,Contentbotton},
    data(){
        return{
            name:'我是content'
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
      .content{
          .h(425);
        //   border: 1px solid slategrey;
          
      }
</style>


