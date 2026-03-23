import { createRouter, createWebHistory } from 'vue-router'
import Pagina1 from '../views/Pagina1.vue'
import Pagina2 from '../views/Pagina2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Pagina1
  },
  {
    path: '/pagina2',
    name: 'pagina2',
    component: Pagina2
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router