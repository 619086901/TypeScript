import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '后台',
      hidden: true
    },
    component: () => import('../views/layout/Index.vue'),
    children: [
      {
        path: '/shouye',
        name: 'Shouye',
        meta: {
          title: '首页',
          belong: '后台',
          timu: '首页',
          hidden: true
        },
        component: () => import('../views/shouye/Shouye.vue')
      }
    ]
  },
  {
    path: '/typescriptIndex',
    name: 'TypescriptIndex',
    meta: {
      title: 'typeScript',
      hidden: true
    },
    component: () => import('../views/layout/Index.vue'),
    children: [
      {
        path: '/HelloWorld1',
        name: 'HelloWords1',
        meta: {
          title: '基础类型',
          hidden: true,
          belong: 'TypeScript',
          timu: '首页'
        },
        component: () => import('../views/ty/1基础类型.vue')
      },
      {
        path: '/HelloWorld2',
        name: 'HelloWords2',
        meta: {
          title: '变量声明',
          hidden: true,
          belong: 'TypeScript',
          timu: '首页'
        },
        component: () => import('../views/ty/2变量声明.vue')
      },

      {
        path: '/HelloWorld3',
        name: 'HelloWords3',
        meta: {
          title: '接口',
          hidden: true,
          belong: 'TypeScript',
          timu: '首页'
        },
        component: () => import('../views/ty/3接口.vue')
      },
      {
        path: '/HelloWorld4',
        name: 'HelloWords4',
        meta: {
          title: '类',
          hidden: true,
          belong: 'TypeScript',
          timu: '首页'
        },
        component: () => import('../views/ty/4类.vue')
      },
      {
        path: '/HelloWorld5',
        name: 'HelloWords5',
        meta: {
          title: '函数',
          hidden: true,
          belong: 'TypeScript',
          timu: '首页'
        },
        component: () => import('../views/ty/5函数.vue')
      },
      {
        path: '/HelloWorld6',
        name: 'HelloWords6',
        meta: {
          title: '泛型',
          hidden: true,
          belong: 'TypeScript',
          timu: '首页'
        },
        component: () => import('../views/ty/6泛型.vue')
      },
      {
        path: '/HelloWorld7',
        name: 'HelloWords7',
        meta: {
          title: '枚举',
          hidden: true,
          belong: 'TypeScript',
          timu: '首页'
        },
        component: () => import('../views/ty/7枚举.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
