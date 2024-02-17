import { setupLayouts } from 'virtual:generated-layouts'

// import Previewer from 'virtual:vue-component-preview'
import { createRouter, createWebHashHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHashHistory(),
  extendRoutes: (routes) => {
    console.log('routes', routes)
    return setupLayouts(routes)
  }
})

router.beforeEach((_to, _from, next) => {
  // console.log('to', _to)
  // console.log('from', _from)
  // console.log('next', next)
  next()
})

export default router
