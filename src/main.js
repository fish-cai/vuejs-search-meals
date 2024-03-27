import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log(router)
console.log(app)
app.use(router)
app.mount('#app')
