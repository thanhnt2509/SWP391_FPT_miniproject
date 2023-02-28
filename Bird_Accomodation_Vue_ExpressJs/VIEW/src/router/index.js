import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Hompage.vue'
import Service from '../views/Service.vue'
import Facilities from '../views/Facilities.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Booking from '../views/Booking.vue'
import Account from '../views/Account.vue'
import Post from '../views/Post.vue'
import Profile from '../components/account/Profile.vue'
import BirdList from '../components/bird/BirdList.vue'
import BirdCheck from '../components/bird/BirdCheck.vue'

import Manager from '../components/manager/Manager.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: Facilities
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/post',
      name: 'post',
      children: [
        {
          path: '/post',
          component: Post,
        }
      ]
    },
    {
      path: '/service',
      name: 'service',
      // component: () => import('../views/AboutView.vue')
      component: Service
    },
    {
      path: '/account',
      children: [
        {
          path: '/account',
          name: 'account',
          component: Account
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'bird',
          name: 'bird',
          children: [
            {
              path: 'list',
              name: 'bird-list',
              component: BirdList
            },
            {
              path: 'check',
              name: 'bird-check',
              component: BirdCheck
            },
          ]
        }
      ]
    },
    {
      path: '/manager',
      name: 'manager',
      component: Manager
    }
  ]
})

export default router
