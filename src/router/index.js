import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
Vue.use(VueRouter)


const scrollBehavior = function (to, from, savedPosition) {
  // console.log(to.meta, to);
  return to.meta
}
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior,
})

export default router
