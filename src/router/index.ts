import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // langind page
    {
      path: "/",
      name: "main-index",
      component: IndexView,
    },
    {
      path: "/login",
      name: "main-login",
      component: LoginView,
    },

    // public page with layout
    {
      path: "/",
      component: () => import("../layout/public.vue"),
      children: [
        {
          path: "about",
          name: "public-about",
          component: () => import("../views/public/AboutView.vue"),
        },
      ],
    },

    // manage page with layout
    {
      path: "/manage",
      component: () => import("../layout/manage.vue"),
      children: [
        {
          path: "member",
          name: "manage-member",
          component: () => import("../views/manage/MemberView.vue"),
        },
      ],
    },

    // others
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },

    // Original path
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
  ]
})

export default router
