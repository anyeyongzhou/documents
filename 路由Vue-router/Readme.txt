vue3.0创建项目时一帮都有Router配置选项，这样就不需要自己安装插件了

1.在组件中使用
<router-link to='url'></router-link>表明这是一个路由
<router-view></router-view>路由匹配到的组件将渲染到的位置

2.在router/index.js中配置路由跳转和参数、逻辑