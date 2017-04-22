// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import Home from './page/home'
import Contacts from './page/contacts'
import Discover from './page/discover'
import Me from './page/me'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home,
  name: '微信'
},
{
  path: '/contacts',
  component: Contacts,
  name: '通讯录'
},
{
  path: '/discover',
  component: Discover,
  name: '发现'
},
{
  path: '/me',
  component: Me,
  name: '我'
}
]

const router = new VueRouter({
  routes
})

// router.map({
//   '/me': {
//     title: '我',
//     name: 'path/me'
//   },
//   '/discover': {
//     title: '发现',
//     name: 'path/discover'
//   },
//   '/home': {
//     title: '微信',
//     name: 'path/home'
//   },
//   '/contacts': {
//     title: '通讯录',
//     name: 'path/contacts'
//   }
// })

router.beforeEach((to, from, next) => {
  console.log(to, from)
  document.title = to.name
  next()
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
