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
    loginHandle () {
      axios.get(normalApi.login,  {params:{name:this.username, pwd:this.password}}).then
      (function(response){
          response.data
          console.log(response.data);
          if (response.data.status_code == 0) {
              alert("该用户未注册，请先注册");
          }else if (response.data.status_code == 1){
              alert("密码错误，请重新登录");
          }else{
              alert("登录成功");
          }
      },function (err){
          console.log(err)
      })
    },
    setCookie(name, value, expireDays=1, ptah='/') {
       var exp = new Date();
       exp.setTime(exp.getTime() + expireDays*24*60*60*1000);
       document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=" + ptah;
    },
    getCookie(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
        else
        return null;
    },
     delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=this.getCookie(name);
        if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
  }
}
</script>
