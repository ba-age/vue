import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Index from '../views/Index/index.vue'
import Detail from '../views/Detail/index.vue'
import Home from '../views/Index/home.vue'
import About from '../views/Index/about.vue'
import Center from '../views/Index/center.vue'
import Card from '../views/Card/index.vue'
import Money from '../views/Money/index.vue'
import Login from '../views/Login/index.vue'

NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'about',
          component: About
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      name: 'detail',
      path: '/detail/:id',
      component: Detail,
      beforeEnter: (to, from, next) => {
        console.log('详情页独享')
        next()
      },
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/card',
      component: Card,
      meta: {
        requireLogin: true
      }
      // beforeEnter: (to, from, next) => {
      //   // 判断是否有登录
      //   if (window.localStorage.getItem('userInfo')) {
      //     // 有登录
      //     next()
      //   } else {
      //     // 没有登录
      //     // next('/login')
      //     console.log(to)
      //     next({
      //       path: '/login',
      //       query: {
      //         redirect: to.fullPath
      //       }
      //     })
      //   }
      // }
    },
    {
      path: '/money',
      component: Money,
      meta: {
        requireLogin: true
      }
      // beforeEnter: (to, from, next) => {
      //   // 判断是否有登录
      //   if (window.localStorage.getItem('userInfo')) {
      //     // 有登录
      //     next()
      //   } else {
      //     // 没有登录
      //     // next('/login')
      //     console.log(to)
      //     next({
      //       path: '/login',
      //       query: {
      //         redirect: to.fullPath
      //       }
      //     })
      //   }
      // }
    }
  ]
})

/**
 * 全局前置守卫
 * 接收一个函数，函数中有三个参数：
 *                  to        -  要去的路由
 *                  from      -  来自哪个路由
 *                  next      -  是一个方法，要不要他去
 * next
 * 1. 如果直接调用，那么就相当于放行
 * 2. 如果调用，但是传递了一个 false, 那么就不放行
 * 3. 如果不调用，也不放行。
 * 4. 调用，并且里面可以传递路由的path路径或者是路由的对象信息。那么就可以重定向到我们的参数中所指定的位置。
 */
router.beforeEach((to, from, next) => {
  NProgress.start()

  // 路由拦截
  if (to.meta.requireLogin) {
    // 判断是否有登录
    if (window.localStorage.getItem('userInfo')) {
      // 有登录
      next()
    } else {
      // 没有登录
      // next('/login')
      console.log(to)
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

// 全局后置守卫，后置守卫没有 next
router.afterEach((to, from) => {
  NProgress.done()

  console.log('后置')
})

export default router
