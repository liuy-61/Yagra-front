import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login.vue'
import Upload from '../views/upload.vue'
import Register from '../views/register.vue'
import Logout from '../views/logout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    // name: 'login',
    component: Login
  },
  {
    path: '/login',
    // name: 'login',
    component: Login
  },
  {
    path: '/register',
    // name: 'Register',
    component: Register
  },
  {
    path: '/upload',
    // name: 'login',
    component: Upload
  },
  {
    path: '/logout',
    // name: 'logout',
    component: Logout
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
