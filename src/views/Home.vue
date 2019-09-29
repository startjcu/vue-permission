<template>
  <div>
    <h2>Home Page</h2>
    <el-button @click="testAxios">测试Axios调用</el-button>
    <el-button @click="getUser">获取用户信息</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import '../mock'
export default {
  name: 'Home',
  methods: {
    testAxios () {
      axios.get('http://localhost:8080').then(res => { alert(res.data) })
    },
    getUser () {
      axios.get('http://localhost:8080/user').then(res => { window.console.log(res.data) })
    }
  }
}
</script>