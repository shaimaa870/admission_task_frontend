import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons';
import 'vuetify/dist/vuetify.min.css';
import "./scss/main.scss"
import "normalize.css"
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const app=createApp(App)
app.use(store).use(router).use(vuetify).mount('#app')
