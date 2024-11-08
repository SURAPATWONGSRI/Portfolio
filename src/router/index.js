import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home ',
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Resume',
      },
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Portfolio`
  next()
})
export default router
