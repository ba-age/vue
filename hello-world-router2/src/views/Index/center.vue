<template>
  <div>
    <h1>我是首页 - 我的个人中心页面</h1>

    <router-link :to="{ path: '/card', query: { date: '今天' } }">卖座卡页面</router-link>

    <hr>

    <router-link to="/money">余额页面</router-link>
  </div>
</template>
