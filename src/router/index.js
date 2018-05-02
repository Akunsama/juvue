import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import mainPage from '@/pages/mainPage'
import workPage from '@/pages/workPage'
import setting from '@/pages/setting'

import menu from '@/pages/menu'
import add from '@/pages/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/mainPage',
      children:[{
      	path: '/mainPage',
	      name: 'mainPage',
	      component: mainPage,
      },{
      	path: '/workPage',
	      name: 'workPage',
	      component: workPage,
      },{
      	path: '/setting',
	      name: 'setting',
	      component: setting,
      },]
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/add',
      name: 'add',
      component: add
    }
  ]
})
