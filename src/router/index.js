import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Survivor from '../views/Survivor'
import Killer from '../views/Killer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Survivor',
    name: 'Survivor',
    component: Survivor
  },
  {
    path: '/Killer',
    name: 'Killer',
    component: Killer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
