<template>
    <div>
      <div  v-show ="logged === true">
        亲爱的{{logged_name}}，您可以选择图像文件上传头像~<br>
        <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update($event)"/>
      </div>
      <div v-show ="logged === false">
        若想上传头像，请先登录
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { normalApi } from '../router/api.js'
export default {
  /* eslint-disable */
  name: 'UPLOAD',
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
    update (e) {   // 上传照片
      let self = this
      let file = e.target.files[0]
      /* eslint-disable no-undef */
      let param = new FormData()  // 创建form对象
      param.append('file', file)  // 通过append向form对象添加数据
      param.append('chunk', '0') // 添加form表单中其他数据
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
     // 添加请求头
    axios.post(normalApi.upload, param, config)
        .then(res => {
          if (res.data.code === 0) {
            self.ImgUrl = res.data.data
          }
          console.log(res.data)
        })
    },
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
