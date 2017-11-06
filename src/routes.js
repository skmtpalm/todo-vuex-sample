import Home from './compoments/Home.vue'
import Tasks from './compoments/Tasks.vue'

export const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'tasks', path: '/tasks', component: Tasks },
]
