import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import index from '../components/index.vue'
import vip from '../components/vip.vue'
import shopCart from '../components/shopCart.vue'
import search from '../components/search.vue'

import news from '../components/news/news.vue'
import newConten from '../components/news/newConten.vue'

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
    },
    {
      path: '/news',
      component: news
    },
    {
      path:'/news/newConten/:id',
      component:newConten
    }
    
  ],
  // 把router-link-active默认 覆盖成mui-active
  linkActiveClass:'mui-active'
})
