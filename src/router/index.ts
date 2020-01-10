import Vue from 'vue';
import VueRouter from 'vue-router';
import MasterLayout from "@/views/layout/master.vue";
import client from './client';
import test from './test'
import { getLocalStorage } from '@/utils/localStorage';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: any = [
  {
    path: '/',
    redirect: "/home",

  },
  {
    path: '/home',
    component: MasterLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ '_v/home/index.vue'),
        meta: {
          title: "首页",
          name: "home",
          authentication: true,
          keepAlive: true
        }
      }
    ]
  },
  ...client,
  ...test,
  {
    path: "/entran",
    component: () => import("@/views/entran/index.vue"),
    redirect: "/entran/login",
    meta: {
      authentication: false,
      keepAlive: false
    },
    children: [
      {
        path: "login",
        component: () => import("@/views/entran/Login.vue"),
        meta: {
          authentication: false,
          keepAlive: false
        }
      },
    ]

  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.meta.authentication && !getLocalStorage('Access-Token')) {
    next({ path: '/entran/login' })
  } else {
    next()
  }
})

export default router;
