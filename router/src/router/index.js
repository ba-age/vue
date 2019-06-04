import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/index.vue'
import Detail from '../views/Detail/detail.vue'
import Login from '../views/login/login.vue'
import Card from '../views/Card/card.vue'
import Money from '../views/Money/money.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          redirect: '/home'
        }

      ]
    },
    {
      name: 'datail',
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/money',
      component: Money
    }
  ]
})

export default router
