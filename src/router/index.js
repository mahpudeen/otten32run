import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../components/layout.vue'
import Home from '../views/landingpage/landingpage.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Daftar_User from '../views/daftar_user.vue'
import Daftar_Peserta from '../views/daftar_peserta.vue'
import Landing_Admin from '../views/landing_admin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/register', component: Register, name: 'register' },
  { path: '/login', component: Login, name: 'login' },
  {
    path: '/layout', component: layout, name: 'layout',
    children: [
      {
        path: '/admin',
        component: Landing_Admin
      },
      {
        path: '/daftar_peserta',
        component: Daftar_Peserta
      },
      {
        path: '/daftar_user',
        component: Daftar_User
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
