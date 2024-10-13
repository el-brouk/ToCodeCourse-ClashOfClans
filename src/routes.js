import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/homePage.vue'
import AboutPage from './pages/aboutPage.vue'
import ErrorPage from '@/errorPage.vue'
import Item from './pages/_itemAlias'

const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },
    {
      path: '/404',
      name: '404',
      component: ErrorPage
    }
  ]
})

export default routers
