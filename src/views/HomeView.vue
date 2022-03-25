<template>
  <div>
      <div class="home" v-show ="logged === true">
        亲爱的{{logged_name}}，欢迎你~<br>
      </div>
      <div v-show ="logged === false">
        亲爱的游客，请先登录
      </div>
      <img  v-show = "exist_portrait_falg === true" 
      :src="portrait_url"
      width="300" height="400"><br>
      <div v-show = "exist_portrait_falg === false" >
        您还未上传头像
      </div>

  </div>
</template>

<script>
import axios from 'axios'
import { normalApi } from '../router/api.js'
export default {
  /* eslint-disable */
  name: 'HOME',
  data () {
    return {
      username: "",
      password: "",
      data: null,
      logged_name: "",
      logged: false,
      exist_portrait_falg: false,
      portrait_url:""
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
            self.portrait_url = normalApi.portrait + "/" + self.logged_name + ".png";
            axios.get(self.portrait_url).then
              (function(response){
                console.log(response.status)
                // 检测到已经上传了头像
                self.exist_portrait_falg = true;
                console.log("将 flag设置为true")
              },function(err){
                console.log(err)
              })
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
    },
    exist_portrait( base_url, name){
        var res = false;
        var filename = name + ".png";
        var portrait_url = base_url + "/" + filename;
        console.log("portrait_url", portrait_url)
        axios.get(portrait_url).then
        (function(response){
          console.log(response.status)
          console.log("将 flag设置为true")
        },function(err){
          console.log(err)
        })
        return res;
    }
  }
}
</script>

