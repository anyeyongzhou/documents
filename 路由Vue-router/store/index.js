import { createRouter, createWebHistory } from 'vue-router'
// 路由需要导向哪个组件
import Start from '../views/Start.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start,
    props: true
  },
  {
    path: '/home',
    name: 'Home',
    // 按需引入，节约性能
    component: () => import('@/views/HomeView.vue'),
    props: true
  }
]

// 创建路由
const router = createRouter({
  // process是一个进程
  // process.env.BASE_URL是当前环境配置的基础路径
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
