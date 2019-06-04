<template>
  <div>
    <h1>登录页面</h1>

    <button @click="handleLogin">点我就登录成功，2秒的一个延时</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        let userInfo = {
          name: '张三',
          pwd: '123'
        }

        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))

        // 登录成功，跳转回首页 - 编程式导航
        // this.$router.replace('/card');
        let redirect = this.$route.query.redirect || '/center'
        this.$router.replace(redirect)
      }, 2000)
    }
  }
}
</script>
