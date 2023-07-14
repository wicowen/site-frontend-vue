import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// app.config.productionTip  = false;
app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '38445072162-v4tu1cqeabbefbcoq3df0ues624ghpi4.apps.googleusercontent.com'
})

app.mount('#vue-app')
