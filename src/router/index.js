import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path:'/login',
      name: 'Login',
      component: Login
    }, {
      path:'/404',
      name:'NotFound',
      component: NotFound
    }
  ]
})