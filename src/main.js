import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
