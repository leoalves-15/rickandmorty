import Vue from 'vue'
import VueRouter from 'vue-router'
import CharacterPage from '@/views/Character.vue'
import EpisodesPage from '@/views/Episodes.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Character',
    name: 'Character',
    component: CharacterPage
  },
  {
    path: '/Episodes',
    name: 'Episodes',
    component: EpisodesPage
  }
]

const router = new VueRouter({
  routes
})

export default router
