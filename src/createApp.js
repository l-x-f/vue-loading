import { createApp as createBaseApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const store = createPinia()

//  在应用之间共享配置
export const createApp = (options, rootProps) => {
  const app = createBaseApp(options, rootProps)
  app.use(router).use(store)
  return app
}
