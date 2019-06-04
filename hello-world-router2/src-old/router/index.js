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
import Admin from '../views/Admin.vue'
import Left from '../views/Left.vue'
import Right from '../views/Right.vue'
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
      },
      {
        path: '',
        redirect: '/home/page1'
      }
    ]
  },
  {
    // 通过 ：来指定后面的id是动态路由参数
    // /detail/1/apple
    // /detail/2/banana

    path: '/detail/:id/:name',
    name: 'detail',
    component: Detail,
    // 设置这个属性为ture，然后再 Detail 组件中就可以使用 props 来定义id与name，并且使用 props id name 来取值，也就是说在 Detail 组件中我们不需要使用 this.$route.params.id  || this.$route.params.name
    // props: true
    // props: {
    //   abc: '123'
    // }
    props: (route) => {
      return {
        abc: route.query.abc,
        id: route.params.id,
        name: route.params.name
      }
    }
  },
  {
    path: '/login',
    alias: '/hhhh',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'add',
        components: {
          // key - 坑的名字
          // value - 要在这个坑里面渲染的组件
          default: Page1,
          aleft: Left,
          aright: Right
        }
      },
      {
        path: 'ccc',
        components: {
          default: Page2,
          aleft: {
            render (h) {
              return h('p', 'ccc-left')
            }
          },
          aright: {
            render (h) {
              return h('p', 'ccc-right')
            }
          }
        }
      }
    ]
  },
  {
    // 当url地址没有匹配上面的规则的时候，就会匹配*，让url地址重定向到了 /home/page1
    path: '*',
    redirect: '/home/page1'
  }
]
// 4. 实例化路由器对象
const router = new VueRouter({
  mode: 'history',
  routes
})
// 5. 将第4步中的东西给暴露出去
export default router
