<template>
    <div>
        <input placeholder="用户名" type="text" v-model="username"><br>
        <input placeholder="密码" type="text" v-model="password"><br>
        <button @click="loginHandle">登录</button>
    </div>
</template>


<script>
import axios from 'axios'
import { normalApi } from '../router/api.js'
export default {
  /* eslint-disable */
  name: 'LOGIN',
  data () {
    return {
      username: "",
      password: "",
      data: null
    }
  },
  methods: {
    loginHandle () {
      axios.get(normalApi.login,  {params:{name:this.username, pwd:this.password}}).then
      (function(response){
          response.data
          console.log(response.data);
      },function (err){
          console.log(err)
      })
    }
  }
}
</script>
