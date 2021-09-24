import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/Home',
    component: Home
  },{
    path:'/drag',
    component:()=>import('../views/drag.vue')
  },{
    path:'/login',
    component:()=>import('../views/login.vue')
  },{
    path:'/drop',
    component:()=>import('../views/drop.vue')
  },{
    path:'/files',
    component:()=>import('../views/files.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
