axios网络请求在vue3.0中的封装

1.在vue3.0中安装axios
npm install axios -D

2.在 src 目录之下，创建 utils 子目录，并在 utils 目录下新建 request.js 网络请求模块



3.封装API接口
在 src 目录之下，新建 api 文件夹，并在其下新建 userAPI.js 模块：

import request from '@/utils/request'

// 登录的 API 接口
export const loginAPI = data => {
  return request.post('/v1_0/authorizations', data)
}

4.拦截器

5.组件引入js，调用方法
/* onMounted(() => {
  request({
    method: 'GET',
    url: '/user/login'
  }).then((res) => {
    console.log(res)
  })
}) */
request.aaa('/user/login').then((res) => {
  console.log(res)
})