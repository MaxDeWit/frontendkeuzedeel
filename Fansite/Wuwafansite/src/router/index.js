import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Characters from '../views/Characters.vue'
import Regions from '../views/Regions.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  { path: '/regions',
    name: 'Regions',
    component: Regions
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
