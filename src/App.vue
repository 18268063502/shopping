<template>
  <div id="app">
     <!-- 顶部header区域 -->
      <mt-header fixed title="天猫超市"></mt-header>



     <!-- 中间路由router-veiw区域 -->
     <transition>
      <router-view></router-view>
     
     </transition>







   <!-- 底部切换 -->
    <nav class="mui-bar mui-bar-tab">
      <!-- 首页 -->
      <router-link class="mui-tab-item " to="/index">
        
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
			 
      </router-link>
			
			<router-link class="mui-tab-item" to="/vip">
				<span class="mui-icon iconfont icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link  class="mui-tab-item" to="/shopCart">
				<span class="mui-icon iconfont icon-gouwuche"></span>
          <!-- <span class="mui-badge">9</span> 小圈圈-->
				<span class="mui-tab-label">购物车</span>
			</router-link >
			<router-link  class="mui-tab-item" to="/search">
				<span class="mui-icon iconfont icon-sousuo"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link >
		</nav>

  

     
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
  
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all .5s ease
}

h1, h2 {
  font-weight: normal;
}
.router_view_zhongjian{
  padding-top: 40px;
  
}
</style>
