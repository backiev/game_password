import { createApp } from 'vue'
import './styles/index.scss'
import 'vue-final-modal/style.css'
import App from './App.vue'
import { createVfm } from 'vue-final-modal'
import { createPinia } from 'pinia'

const pinia = createPinia()
const vfm = createVfm()

createApp(App).use(vfm).use(pinia).mount('#app')
