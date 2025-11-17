import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
import './assets/css/font-awesome.min.css';
import './assets/css/tooplate-style.css';

const app = createApp(App)
app.config.globalProperties.$hostName = 'http://localhost:8187'

app.use(Buefy)
app.use(router)

app.mount('#app')
