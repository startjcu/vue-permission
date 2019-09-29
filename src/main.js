import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './http'
import global from './utils/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(api)
Vue.prototype.global = global

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
