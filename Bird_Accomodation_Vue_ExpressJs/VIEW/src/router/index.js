import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ServicePage from '../views/ServicePage.vue'
import AboutPage from '../views/AboutUsPage.vue'
import BookingPage from '../views/BookingPage.vue'
import AccountPage from '../views/AccountPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/service',
      name: 'service',
      component: ServicePage
    },
    {
      path: '/account',
      name: 'account',
      component: AccountPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingPage
    },
  ]
})

export default router
