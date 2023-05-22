import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layout/public.vue"),
      children: [
        // {
        //   path: "",
        //   name: "public-index",
        //   component: () => import("../views/public/index.vue"),
        // },
        {
          path: "login",
          name: "public-login",
          component: () => import("../views/public/login.vue"),
        },
      ],
    },

    // {
    //   path: "/manage",
    //   component: () => import("../layout/manage.vue"),
    //   children: [
    //     {
    //       path: "member",
    //       name: "manage-member",
    //       component: () => import("../views/manage/member.vue"),
    //     },
    //   ],
    // },


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
