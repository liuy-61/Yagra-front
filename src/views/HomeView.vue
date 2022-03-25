<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
  mounted: function(){
      axios.get(normalApi.is_login).then
      (function(response){
          response.data
          console.log(response.data);
          if (response.data.status_code == 0) {
              alert("您还未登录，请先登录，若无账号，请先注册");
          }
      },function (err){
          console.log(err)
      })  
  },
  methods: {
  }
}
</script>

