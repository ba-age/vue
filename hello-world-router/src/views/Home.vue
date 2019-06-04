<template>
  <div>
    <h1>我是app</h1>

    <!-- <a href="#/page1">page1</a> -->

    <router-link replace
      :to="{
        path: '/home/page1',
        query: {
          name: '张三',
          age: 18
        },
        params: {
          id: 10
        }
      }" active-class="abc">page1</router-link>

    <hr />

    <!-- <a href="#/page2">page2</a> -->

    <router-link replace :to="{ name: 'page2' }" active-class="abc">page2</router-link>

    <hr />

    <router-link to="/login" active-class="abc">登录</router-link>

    <!-- 路由坑 路由视图
      /page1    Page1组件给替换
      /page2    Page2组件给替换
    -->
    <router-view></router-view>
  </div>
</template>

<style lang="less">
.abc {
  color: red;
}
</style>
