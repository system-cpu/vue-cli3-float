<template>
  <div id="app">
      <navigation  v-bind:inshow="seal.inshow" :head_name="seal.head_name"  :right_inshow="seal.right_inshow" :right_name="seal.right_name"></navigation>
         <div >
            {{name}}
            <float-icons padding="10 10 60 10" class="icons-warp">
            <div class="float-icon-item">
              <span  @click="handleIcons('home')">客服</span>
            </div>
          </float-icons>
         </div>
      <HelloWorld v-bind:idx="seal.idx"></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from '../views/HelloWorld'
import navigation from '../views/navigation'
import FloatIcons from '../views/index'
export default {
  name: 'App',
  data(){
    return{
      seal:{
          idx:0,
          inshow:true,
          head_name:"哈哈哈",
          right_inshow:true,
          right_name:"djhfwerf"
      } ,
      name:"",
      list: [],
      loading: false,
      finished: false
    }
  },
 components:{
    HelloWorld,
    navigation,
    'float-icons': FloatIcons,
  },
  methods:{
    route(name,object){
       this.$router.push({ path: name, query: object });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    // 点击按钮
    handleIcons(router) {
      // console.log('router', router)
      // this.$router.push(router)
      console.log(router)
    }
  },
  created(){
    console.log(window.g.baseUrl)
    //  var that = this;
    //   that.$axios({
    //     method: "post",
    //     url: window.g.baseUrl + "api/Branch/branch_honor",
    //     params: { 
    //       shop_id:3,
    //       p:that.current,
    //       count:9
    //     }
    //   }).then((res)=> {
    //     console.log(res.data.data.cat_name);
    //     that.name=res.data.data.cat_name
    //   });
  }
}
</script>
<style scoped>
  .float-icon-item{
    font-size: 0.5rem;
  }
</style>
