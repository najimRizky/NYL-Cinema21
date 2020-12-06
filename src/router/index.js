import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Movdetails from '../views/Movdetails.vue'
import Search from '../views/Search.vue'
import Popular from '../views/Popularview.vue'

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
    component: About
  },
  {
    path: '/movdetails/:id',
    name: 'Movdetails',
    component: Movdetails
  },
  {
    path: '/search/:keyword/:page',
    name: 'Search',
    component: Search
  },
  {
    path: '/popular/:page',
    name: 'Popular',
    component: Popular
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
