import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './views/home.vue'
import OOT from './views/OOT.vue'
import WWHD from './views/WWHD.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/OOT', component: OOT },
  { path: '/WWHD', component: WWHD },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
