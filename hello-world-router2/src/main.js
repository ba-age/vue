import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/base.less'

Vue.config.productionTip = false

new Vue({
  router,
  render (h) {
    return h(App)
  }
}).$mount('#app')
