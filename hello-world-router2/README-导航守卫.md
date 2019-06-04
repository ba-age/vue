# vue 导航守卫

主要分为三个大块

- 全局
  - 全局前置  beforeEach
  - 全局解析守卫 beforeResolve
  - 全局后置  afterEach
- 路由独享的
  - beforeEnter     进入当前路由时
- 组件级别的
  - beforeRouteEnter    进入当前组件时
  - beforeRouteUpdate   当前组件更新时
  - beforeRouteLeave    退出当前组件时

## 导航守卫的钩子函数

> 在路由发生变化的时候会主动触发的一些函数

## 作用场景

1. beforeEach 与 afterEach 能实现页面进度条的效果
2. 登录拦截
   1. 先排除 组件级别
   2. afterEach 排除
   3. 正常情况下，如果是后台管理系统的话，因为处理登录与注册页面之外其他的都需要做登录的拦截，那么就可以再 全局前置 里面去做。如果项目中只有那么一个到两个需要做拦截的页面，那么就可以再他们自己的路由独享里面去做。
