// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customer from '@/components/Customer'
import AboutUs from '@/components/AboutUs'
import Add from '@/components/Add'
import Detail from '@/components/Detail'
import Edit from '@/components/Edit'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

const router = new VueRouter({
	routes:[
		{path:'/',component:Customer},
		{path:'/AboutUs',component:AboutUs},
		{path:'/Add',component:Add},
		{path:'/customer/:id',component:Detail},
		{path:'/edit/:id',component:Edit}
	],
	base:__dirname,
	mode:'history'
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
