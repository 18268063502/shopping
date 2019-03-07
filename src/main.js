import Vue from 'vue'
import App from './App.vue'

import router from './router/routerConfig'

import axios from 'axios'

Vue.prototype.axios=axios

// 按需导入mint ui组件
import{Header} from 'mint-ui'
Vue.component(Header.name,Header)
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// icon
import './css/icon.css'



// mui
import './lib/mui/css/mui.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
