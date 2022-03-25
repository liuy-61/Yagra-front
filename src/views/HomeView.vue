<template>
  <div>
      <div class="home" v-show ="logged === true">
        亲爱的{{logged_name}}，欢迎你~<br>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div v-show ="logged === false">
        亲爱的游客，请先登录
      </div>
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
      data: null,
      logged_name: "",
      logged: false
    }
  },
  mounted: function(){
      let self = this;
      axios.get(normalApi.is_login).then
      (function(response){
          response.data
          console.log(response.data);
          if (response.data.status_code == 0) {
              // alert("您还未登录，请先登录，若无账号，请先注册");
          }else{
            self.logged = true;
            self.logged_name = self.getCookie("session_id").split("-")[1];
          }
      },function (err){
          console.log(err)
      })
  },
  methods: {
    getCookie(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
        else
        return null;
    }
  }
}
</script>

