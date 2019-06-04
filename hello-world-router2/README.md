# 前端路由 vue-router

> 根据不同的url地址，能够让页面上某个组件进行切换显示。

http://localhost:8080/page1     显示page1组件

http://localhost:8080/page2     显示page2组件

## 单页面应用（SPA）single-page-application

- 多页面应用（MPA）一个项目中有多个html文件的。

## vue-router

1. 安装 vue-router `npm install --save vue-router`
2. 项目中选择某个位置放入一个坑 router-view 这个组件
3. 项目中配置路由规则，最后要暴露出去路由器的实例对象
4. 在main.js中也就是 new Vue 的地方需要将第3步中暴露出来的 router 实例对象配置给 根组件 的 router 选项


### router-view

### router-link

> 这也是使用了 路由之后，提供给我们的一个全局组件，它就是一个 a 标签，能帮我们实现路由的切换

props

- to
- active-class  能够让我们修改默认高亮的类的名字 默认值是 'router-link-active'

? router-link 与 a 标签的区别
1. 默认情况下，写不写 # 的问题
2. router-link 可以帮我们实现高亮的效果

### 动态路由匹配

当我们使用上路由之后，会在 Vue 的原型上挂载 两个属性

- $route    当前匹配的路由对象信息
- $router   路由器的实例对象

### 编程式导航 - 通过js代码来控制路由的跳转

$router.push()    跳转页面，新增一个历史记录
$router.back()    后退
$router.forward() 前进
$router.go()      根据参数来看是前进还是后退
$router.replace() 重定向页面，不加历史记录

### 命令路由

> 在路由规则上给每个规则加上name属性，后续方便我们操作路由的跳转

<router-link to="/home/page1"></router-link>
<router-link :to="{ path: '/home/page1', name: 'page1', query: {}, params: {} }"></router-link>

to属性传对象的时候，可以有如果属性
- path    路由路径
- name    命名路由的名字
- query   search参数
- params  动态路由匹配参数

PS: params 与 path 不能共存，如果你要传递 params，那么不要使用 path
