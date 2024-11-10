import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectView from '@/views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Resume',
      },
      component: ResumeView,
    },
    {
      path: '/project',
      name: 'project',
      meta: {
        title: 'My Project',
      },
      component: ProjectView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // ให้ scroll แบบ smooth
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Portfolio`
  next()
})

export default router
