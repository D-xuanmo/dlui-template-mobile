import { createApp } from 'vue'
import DLUI from '@xuanmo/dl-ui'
import App from './App.vue'
import '@xuanmo/dl-ui/dist/index.css'
import './assets/style/dlui.css'

createApp(App).use(DLUI).mount('#app')
