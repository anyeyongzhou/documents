axios网络请求在vue3.0中的封装

1.在vue3.0中安装axios
npm install axios -D

2.在 src 目录之下，创建 utils 子目录，并在 utils 目录下新建 request.js 网络请求模块如下：

import axios from 'axios'

// 调用 axios.create() 方法，创建 axios 的实例对象
const instance = axios.create({
  // 请求根路径
  baseURL: 'http://www.liulongbin.top:8000'
})

export default instance

3.封装API接口
在 src 目录之下，新建 api 文件夹，并在其下新建 userAPI.js 模块：

import request from '@/utils/request'

// 登录的 API 接口
export const loginAPI = data => {
  return request.post('/v1_0/authorizations', data)
}

4.拦截器

5.组件引入js，调用方法
axio.loginAPI(data).then((res)=>{
    console.log(res.data)
})