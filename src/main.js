import { createApp } from './createApp'
import App from './App.vue'

import directive from './directive/index'

const app = createApp(App)

directive(app)

app.mount('#app')
