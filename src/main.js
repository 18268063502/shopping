import Vue from 'vue'
import App from './App.vue'

import router from './router/routerConfig'


// 按需导入mint ui组件
import{Header} from 'mint-ui'
Vue.component(Header.name,Header)

// icon
import './css/icon.css'



// mui
import './lib/mui/css/mui.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
