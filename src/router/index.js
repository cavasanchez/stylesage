import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CatClickerView from '../views/CatClickerView'
import AnimatedGifsView from '../views/AnimatedGifsView'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cat-clicker',
    name: 'catClicker',
    component: CatClickerView,

  },
  {
    path: '/animated-gifs',
    name: 'animatedGifsView',
    component: AnimatedGifsView,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
