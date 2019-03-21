import Vue from 'vue'
import App from './App.vue'

import router from './router/routerConfig'

import axios from 'axios'

Vue.prototype.axios=axios

import moment from 'moment'

// 按需导入mint ui组件
import{Header} from 'mint-ui'
Vue.component(Header.name,Header)
import { Swipe, SwipeItem,Button  } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(Button.name, Button);
Vue.component(SwipeItem.name, SwipeItem);
// 全局过滤器
Vue.filter('dataTimeFormat',(dataStr,GeShi="YYYY-MM-DD hh:mm:ss")=>{
  return moment(dataStr).format(GeShi)
})
// icon
import './css/icon.css'

import "./utils/mock.js";


// mui
import './lib/mui/css/mui.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
