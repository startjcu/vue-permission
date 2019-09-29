<template>
  <div>
    <h2>Login Page</h2>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import '../mock/index.js';
import Cookies from 'js-cookie';
import router from '../router';

export default {
  name: 'Login',
  methods: {
    login () {
      this.$api.login.login().then(res => {
        alert(res.token)
        Cookies.set('token', res.token)
        router.push('/')
      }).catch(err => { alert(err) })
    }
  }
}
</script>