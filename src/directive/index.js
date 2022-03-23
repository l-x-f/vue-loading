import { createApp } from '../createApp'

import Loading from '../components/Loading/Loading.vue'
const app = createApp(Loading)
const loading = app.mount(document.createElement('div'))

export default function (app) {
  app.directive('loading', {
    mounted(el, binding) {
      let initVal = binding.value
      if (initVal) {
        el.style.overflow = 'hidden'
        el.appendChild(loading.$el)
      }
    },
    updated(el, binding) {
      let initVal = binding.value
      if (initVal) {
        el.style.overflow = 'hidden'
        el.appendChild(loading.$el)
      } else {
        el.removeChild(loading.$el)
        el.style.overflow = 'auto'
      }
    }
  })
}
