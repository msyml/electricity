import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: '商品'
  }
}

export const constantRouter: any[] = [RootRoute]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: () => any) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
