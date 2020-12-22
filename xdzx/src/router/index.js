import Vue from 'vue'
import Router from 'vue-router'
import Home_plus_new from '@/components/Home_plus_new'
import 专项概况 from '@/components/专项概况'
import 专项动态 from '@/components/专项动态'
import 亮点成果 from '@/components/亮点成果'
import 共享平台 from '@/components/共享平台'
import 合作交流 from '@/components/合作交流'
import 专项管理 from '@/components/专项管理'
import 专项管理_专家详情 from '@/components/专项管理_专家详情'
import 专项管理_详情 from '@/components/专项管理_详情'
import 专项动态_详情 from '@/components/专项动态_详情'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home_plus_new',
      component: Home_plus_new,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/zxgk',
      name: '专项概况',
      component: 专项概况,
      meta: {
        title: '专项概况'
      },
      // redirect: '/gaikuang/jianjie',
      children: [{
        path: '/zxgk/zxjj',
        name: '专项概况',
        component: 专项概况,
        },
        {
          path: '/zxgk/yjtd',
          name: '专项概况',
          component: 专项概况
        },
        {
          path: '/zxgk/yjmb',
          name: '专项概况',
          component: 专项概况
        },
        {
          path: '/zxgk/xmsz',
          name: '专项概况',
          component: 专项概况
        },]
    },
    {
      path: '/zxdt',
      name: '专项动态',
      component: 专项动态,
      meta: {
        title: '专项动态'
      },
    },
    {
      path: '/ldcg',
      name: '亮点成果',
      component: 亮点成果,
      meta: {
        title: '亮点成果'
      },
    },
    {
      path: '/gxpt',
      name: '共享平台',
      component: 共享平台,
      meta: {
        title: '共享平台'
      },
    },
    {
      path: '/hzjl',
      name: '合作交流',
      component: 合作交流,
      meta: {
        title: '合作交流'
      },
    },
    {
      path: '/zxgl',
      name: '专项管理',
      component: 专项管理,
      children: [{
        path: '/zxgl/zxztz',
        name: '专项管理',
        component: 专项管理,
      },
        {
          path: '/zxgl/zxbgs',
          name: '专项管理',
          component: 专项管理
        },
        {
          path: '/zxgl/glbf',
          name: '专项管理',
          component: 专项管理
        },
        {
          path: '/zxgl/gywm',
          name: '专项管理',
          component: 专项管理
        },],
      meta: {
        title: '专项管理'
      },
    },
    {
      path: '/zxgl/zjxq',
      name: '专项管理_专家详情',
      component: 专项管理_专家详情,
      meta: {
        title: '专项管理_专家详情'
      },
    },
    {
      path: '/zxdt/xq',
      name: '专项动态_详情',
      component: 专项动态_详情,
      meta: {
        title: '专项动态_详情'
      },
    },
    {
      path: '/zxgl/xq',
      name: '专项管理_详情',
      component: 专项管理_详情,
      meta: {
        title: '专项管理_详情'
      },
    }
  ]
})
