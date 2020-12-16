import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Movdetails from '../views/Movdetails.vue'
import Search from '../views/Search.vue'
import Popular from '../views/Popularview.vue'
import Years from '../views/Yearview.vue'
import Countries from '../views/Countryview.vue'
import Genres from '../views/Genreview.vue'
import Filtersearch from '../views/Filtersearch.vue'
import Filterresults from '../views/Filterresults.vue'

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
  },
  {
    path: '/years/:year/:page',
    name: 'Years',
    component: Years
  },
  {
    path: '/genres/:genre/:page/:sort',
    name: 'Genres',
    component: Genres
  },
  {
    path: '/countries/:country/:page/:sort',
    name: 'Countries',
    component: Countries
  },
  {
    path: '/filterresults/',
    name: 'Filterresults',
    component: Filterresults
  },
  {
    path: '/filtersearch/',
    name: 'Filtersearch',
    component: Filtersearch
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
