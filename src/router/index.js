// Composables
import { createRouter, createWebHistory } from 'vue-router'

function isAuthenticated(){
  return window.localStorage.getItem('jwt');
}

function isAdmin(){
  return window.localStorage.getItem('user') === 'admin';
}

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      },
    ],
  },
  {
    path: '/dashboard ',
    component: () => import('@/layouts/default/Navigation.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
    ],
  },
  {
    path: '/robots ',
    component: () => import('@/layouts/default/Navigation.vue'),
    children: [
      {
        path: '/robots',
        name: 'Robots',
        component: () => import('@/views/Robot.vue'),
      },
    ],
  },
  {
    path: '/stock ',
    component: () => import('@/layouts/default/Navigation.vue'),
    children: [
      {
        path: '/stock',
        name: 'Stock',
        component: () => import('@/views/Stock.vue'),
      },
    ],
  },
  {
    path: '/status ',
    component: () => import('@/layouts/default/Navigation.vue'),
    children: [
      {
        path: '/status',
        name: 'Status',
        component: () => import('@/views/Status.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated()) {
    next({ name: 'Login' })
  } else if (to.name !== 'Status' && isAuthenticated() && !isAdmin()) {
    next({name: 'Status'})
  } else {
    next()
  }
})

export default router
