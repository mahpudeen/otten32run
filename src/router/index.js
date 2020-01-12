import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../components/layout.vue'
import layoutPage from '../components/layoutPage.vue'
import layoutUser from '../components/layoutUser.vue'
import Home from '../views/landingpage/landingpage.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import PDF from '../views/downloadpdf.vue'
import Daftar_User from '../views/daftar_user.vue'
import Daftar_Peserta from '../views/daftar_peserta.vue'
import Landing_Admin from '../views/landing_admin.vue'
import About from '../views/about/about.vue'
import Rules from '../views/rules/rules.vue'
import Logged_User from '../views/logged_user.vue'
import User_Daftar from '../views/user_daftar.vue'

Vue.use(VueRouter)

const routes = [
  // { path: '/', name: 'home', component: Home },
  { path: '/register', component: Register, name: 'register' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/logged_user', component: Logged_User, name: 'logged_user' },
  {
    path: '/layout', component: layout, name: 'layout',
    children: [
      { path: '/pdf', component: PDF},
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
  },
  {
    path: '', component: layoutPage,
    children: [
      { path: '/about', component: About },
      { path: '/', name: 'home', component: Home },
      { path: '/rules', name: 'rules', component: Rules },
    ]
  },
  {
    path: '', component: layoutUser,
    children: [
      { path: '/cetaktiket', component: PDF },
      { path: '/daftarpeserta', component: User_Daftar },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
