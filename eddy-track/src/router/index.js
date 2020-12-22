import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import 涡旋可视化 from '@/components/涡旋可视化'
import 涡旋检测 from '@/components/涡旋检测'
import 数据服务 from '@/components/数据服务'
import a from '@/components/a'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: '涡旋可视化',
      component: 涡旋可视化
    },
    {
      path: '/jiance',
      name: '涡旋检测',
      component: 涡旋检测
    },
    {
      path: '/fuwu',
      name: '数据服务',
      component: 数据服务
    },
    {
      path: '/11',
      name: 'a',
      component: a
    }
  ]
})
