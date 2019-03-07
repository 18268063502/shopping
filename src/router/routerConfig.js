import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '../components/index.vue'
import vip from '../components/vip.vue'
import shopCart from '../components/shopCart.vue'
import search from '../components/search.vue'

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/vip',
      component: vip
    },
    {
      path: '/shopCart',
      component: shopCart
    },
    {
      path: '/search',
      component: search
    }
  ]
})
