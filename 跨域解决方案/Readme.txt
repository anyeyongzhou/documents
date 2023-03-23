后台采用cros
前台采用proxy


1.前台采用proxy
在vue.config.js文件中添加跨域配置
devServer: {
    proxy: {
      '/api': {
        // 'http://iwenwiki.com'是需要跨域的网络地址
        target: 'http://iwenwiki.com',
        changeOrigin: true
      }
    }
  }

2.后台cros是真正的跨域，不需要前台再做任何设置