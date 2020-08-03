import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Login from "../components/Login";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/Login',
    name: 'Login',

    component: () => import('../components/Login.vue')
  },
    {
      path: '/RockMap',
      name: 'RockMap',
      component: () => import('../components/RockMap.vue')
    },
    {
      path: '/LineList',
      name: 'LineList',
      component: () => import('../components/LineList.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
