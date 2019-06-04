// 0. 引入 vue
import Vue from 'vue'
// 1. 引入 vue-router
import VueRouter from 'vue-router'
// 1.1 引入路由页面级别组件
import Home from '../views/Home.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
// 2. 使用 VueRouter 插件
Vue.use(VueRouter)
// 3. 配置路由规则 [{}, {}, {}]
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        // /home/page1
        path: 'page1',
        name: 'page1',
        component: Page1
      },
      {
        // /home/page2
        path: 'page2',
        name: 'page2',
        component: Page2
      }
    ]
  },
  {
    // 通过 ：来指定后面的id是动态路由参数
    // /detail/1/apple
    // /detail/2/banana

    path: '/detail/:id/:name',
    name: 'detail',
    component: Detail
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
// 4. 实例化路由器对象
const router = new VueRouter({
  routes
})
// 5. 将第4步中的东西给暴露出去
export default router
