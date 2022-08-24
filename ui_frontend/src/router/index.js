import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../auth'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'home',
      // Shine VUE Starter Kit
      // redirect: '/app/dashboard-module/report',
      component: () => import('@/views/Home'),
    },
    // Shine VUE Starter Kit
    // {
    //   path: '/app/dashboard-module/report',
    //   name: '/app/dashboard-module/report',
    //   component: () => import('@/views/app/dashboard-module/report/Main'),
    //   meta: {
    //     pageTitle: 'Report',
    //     breadcrumb: [
    //       {
    //         text: 'Report',
    //         active: true,
    //       },
    //     ],
    //   },
    // },
    //  Shine VUE Starter Kit
    {
      path: '/new-first',
      name: '/new-first',
      component: () => import('@/views/app/new-module/new-first/Main.vue'),
      meta: {
        pageTitle: 'New First Page',
        breadcrumb: [
          {
            text: 'newFirst',
            active: true,
          },
        ],
      },
    },
    {
      path: '/new-second',
      name: '/new-second',
      component: () => import('@/views/app/new-module/new-second/Main.vue'),
      meta: {
        pageTitle: 'New second Page',
        breadcrumb: [
          {
            text: 'newFirst',
            active: true,
          },
        ],
      },
    },
    {
      path: '/new-third',
      name: '/new-third',
      component: () => import('@/views/app/new-module/new-third/Main.vue'),
      meta: {
        pageTitle: 'New third Page',
        breadcrumb: [
          {
            text: 'newThird',
            active: true,
          },
        ],
      },
    },
    {
      path: '/new-fourth',
      name: '/new-fourth',
      component: () => import('@/views/app/new-module/new-fourth/Main.vue'),
      meta: {
        pageTitle: 'new Fourth Page',
        breadcrumb: [
          {
            text: 'newFourth',
            active: true,
          },
        ],
      },
    },
    {
      path: '/new-fifth',
      name: '/new-fifth',
      component: () => import('@/views/app/new-module/new-fifth/Main.vue'),
      meta: {
        pageTitle: 'new Fifth Page',
        breadcrumb: [
          {
            text: 'newFifth',
            active: true,
          },
        ],
      },
    },
    {
      path: '/new-sixth',
      name: '/new-sixth',
      component: () => import('@/views/app/new-module/new-sixth/Main.vue'),
      meta: {
        pageTitle: 'new Sixth Page',
        breadcrumb: [
          {
            text: 'newSixth',
            active: true,
          },
        ],
      },
    },
    {
      path: '/customer-management',
      name: '/customer-management',
      component: () => import('@/views/app/system-project/customer/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '기준정보관리',
            active: false,
          },
          {
            text: '고객사관리',
            active: true,
          },
        ],
      },
    },
    {
      path: '/area-management',
      name: '/area-management',
      component: () => import('@/views/app/system-project/area/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '기준정보관리',
            active: false,
          },
          {
            text: 'Area 관리',
            active: true,
          },
        ],
      },
    },
    {
      path: '/lot-registration',
      name: '/lot-registration',
      component: () => import('@/views/app/material-management/lot/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '자재관리',
            active: false,
          },
          {
            text: '자재입고 등록',
            active: true,
          },
        ],
      },
    },
    {
      path: '/Import-inspection',
      name: '/Import-inspection',
      component: () => import('@/views/app/material-management/import-inspection/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '자재관리',
            active: false,
          },
          {
            text: '수입검사 의뢰 등록',
            active: true,
          },
        ],
      },
    },
    {
      path: '/dispensing-materials',
      name: '/dispensing-materials',
      component: () => import('@/views/app/material-management/dispensing-materials/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '자재관리',
            active: false,
          },
          {
            text: '자재불출',
            active: true,
          },
        ],
      },
    },
    {
      path: '/inventory-status',
      name: '/inventory-status',
      component: () => import('@/views/app/material-management/inventory-status/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '자재관리',
            active: false,
          },
          {
            text: '자재 재고현황',
            active: true,
          },
        ],
      },
    },
    {
      path: '/return-shipping',
      name: '/return-shipping',
      component: () => import('@/views/app/material-management/return-shipping/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '자재관리',
            active: false,
          },
          {
            text: '자재 반품 출고',
            active: true,
          },
        ],
      },
    },
    {
      path: '/quantity-correction',
      name: '/quantity-correction',
      component: () => import('@/views/app/material-management/quantity-correction/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '자재관리',
            active: false,
          },
          {
            text: '자재 수량 보정',
            active: true,
          },
        ],
      },
    },
    {
      path: '/equipment-mounting',
      name: '/equipment-mounting',
      component: () => import('@/views/app/material-management/equipment-mounting/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '생산관리',
            active: false,
          },
          {
            text: 'Film 설비 장착',
            active: true,
          },
        ],
      },
    },
    {
      path: '/lot-in',
      name: '/lot-in',
      component: () => import('@/views/app/lot-control/lot-in/Main.vue'),
      meta: {
        breadcrumb: [
          {
            text: '품목 입고',
            active: false,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'home',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach(async (to, from, next) => {
  if (to.name === 'login') {
    next()
    return
  }

  const loginFlag = await auth.loggedIn()

  // // Shine VUE Starter Kit
  if (loginFlag) {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
