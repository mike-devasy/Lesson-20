import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'

import { isAuthenticated, isRouteAvailable } from './helpers.js'

export const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      requireAuth: false,
      useInMenu: true
    },
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false,
      useInMenu: false
    },
    component: LoginPage
  },
  {
    path: '/users',
    name: 'users',
    meta: {
      requireAuth: true,
      hasAccess: (permissions) => permissions?.isAdmin,
      useInMenu: true
    },
    component: () => import('../views/UsersPage/UsersPage.vue')
  },
  {
    path: '/friends',
    // children: [
    //   {
    //     path: '',
        name: 'friends',
        meta: {
          requireAuth: false,
          useInMenu: true
        },
        component: () => import('../views/Friends/FriendsView.vue')
      },
      // {
      //   path: '/config/:id?',
      //   name: 'specialists-config',
      //   meta: {
      //     requireAuth: true,
      //     hasAccess: (permissions) => permissions.update
      //   },
      //   component: () => import('../views/Specialists/SpecialistEditor.vue')
      // }
  //   ]
  // },
  {
    path: '/assignments',
    name: 'assignments',
    meta: {
      requireAuth: false,
      hasAccess: (permissions) => permissions?.read,
      useInMenu: true
    },
    component: () => import('../views/AssignmentsPage/AssignmentsView.vue')
  },
  {
    path: '/presents',
    name: 'presents',
    meta: {
      requireAuth: false,
      useInMenu: true
    },
    component: () => import('../views/Presents/PresentsView.vue')
  },
  {
    path: '/:path(.*)*',
    name: 'page-not-found',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/PageNotFound.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  if (to.meta?.requireAuth) {
    if (!isAuthenticated())
      return {
        name: 'login'
      }
    if (!isRouteAvailable(to)) {
      return {
        name: 'page-not-found'
      }
    }
  }
})

export default router
