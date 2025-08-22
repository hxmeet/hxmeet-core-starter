import { createApp } from 'vue'
import App from './App.vue'
import ui from '@nuxt/ui/vue-plugin'
import './assets/main.css'
import {createRouter, createWebHistory} from "vue-router";
import HomeView from './pages/index.vue'
import RoomView from './pages/room.vue'

const app = createApp(App)

const router = createRouter({
  routes: [
    { path: '/', component: HomeView },
    { path: '/room/:room', component: RoomView },
  ],
  history: createWebHistory()
})

app.use(router)
app.use(ui)

app.mount('#app')
