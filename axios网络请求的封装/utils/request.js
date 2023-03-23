import axios from 'axios'
import querystring from 'querystrings'

// 调用 axios.create() 方法，创建 axios 的实例对象
const instance = axios.create({
  // 请求根路径
  baseURL: 'http://www.liulongbin.top:8000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

// 添加请求拦截器
axios.interceptors.request.use(
  //成功函数
  (config) => {
    // 1. 获取 token 值
    const tokenStr = store.state.tokenInfo.token
    // 2. 判断 tokenStr 的值是否为空
    if (tokenStr) {
      // 3. 添加身份认证字段
      config.headers.Authorization = `Bearer ${tokenStr}`
    }

    //对POST方法中data进行数据处理
    if (config.methods === 'post') {
      config.data = querystring.stringif(consfig.data)
    }
    return config
  },
  //失败函数
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response)
  },
  function (error) {
    // 对响应错误做点什么
    const { response } = error
    errorHandle(response.status, response.info)
    return Promise.reject(error)
  }
)

//错误状态码对应的情况
const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      console.log('语义有误')
      break
    case 401:
      console.log('服务认证失败')
      break
    case 403:
      console.log('服务器拒绝访问')
      break
    case 404:
      console.log('地址错误')
      break
    case 500:
      console.log('服务器遇到意外')
      break
    case 502:
      console.log('服务器无响应')
      break
    default:
      console.log(info)
      break
  }
}

export default instance
