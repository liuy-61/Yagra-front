<template>
    <div>
        <div v-show = "logged === false">
            您还未登录
        </div>
        <div v-show = "logged === true">
             {{logged_name}}，您已成功登录，点击下方按钮即可退出登录~
             <button @click="logoutHandle">注册</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { normalApi } from '../router/api.js'
export default {
  /* eslint-disable */
  name: 'LOGOUT',
  data () {
    return {
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
            //   alert("您还未登录，请先登录，若无账号，请先注册");
          }else{
            self.logged = true;
            self.logged_name = self.getCookie("session_id").split("-")[1];
          }
      },function (err){
          console.log(err)
      })
  },
  methods: {
    logoutHandle () {
        this.delCookie()
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
