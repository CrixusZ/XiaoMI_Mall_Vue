import Vue from 'vue'
import App from './App.vue'
import axiox from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import router from './router'
import store from './store'
import env from './env'

// 根据前端的跨域方式做调整
axiox.defaults.baseURL = '/api'
axiox.defaults.timeout = 8000
// 请求拦截
axiox.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 接口的错误拦截
axiox.interceptors.response.use((response) => {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axiox)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
