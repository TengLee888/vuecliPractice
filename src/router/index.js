/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/home"
import HelloWorld from '@/components/HelloWorld'
// import login from '@/components/login'
// import reg from '@/components/reg'
// import post from '@/components/post'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    // {
    //   path: '/reg',
    //   name: 'reg',
    //   component: reg
    // },
    // {
    //   path: '/post',
    //   name: 'post',
    //   component: post
    // }
  ]
})
