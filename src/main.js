import Vue from 'vue'
import App from './App'
import store from './store'
// 将api挂载到vue实例上
import api from './api'

Vue.prototype.$store = store
Vue.prototype.$api = api
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
