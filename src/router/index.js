import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../components/layout.vue'
import layoutPage from '../components/layoutPage.vue'
import layoutUser from '../components/layoutUser.vue'
import Home from '../views/landingpage/landingpage.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import PDF from '../views/downloadpdf.vue'
import Daftar_User from '../views/admin/daftar_user.vue'
import Daftar_Peserta from '../views/admin/daftar_peserta.vue'
import Landing_Admin from '../views/admin/landing_admin.vue'
import About from '../views/landingpage/about.vue'
import Rules from '../views/landingpage/rules.vue'
import Logged_User from '../views/user/logged_user.vue'
import User_Daftar from '../views/user_daftar.vue'
import Konfirmasi from '../views/admin/konfirmasi_pembayaran.vue'
import Racepack from '../views/admin/racepack.vue'
import Racepackdone from '../views/admin/racepackdone.vue'
import Lunas from '../views/admin/pembayaran_selesai.vue'
import Pembayaran from '../views/user/pembayaran.vue'
import Tiket from '../views/user/tiket.vue'

Vue.use(VueRouter)

const routes = [
  // { path: '/', name: 'home', component: Home },
  { path: '/register', component: Register, name: 'register' },
  { path: '/login', component: Login, name: 'login' },
  {
    path: '/layout', component: layout, name: 'layout',
    children: [
      { path: '/pdf', component: PDF},
      {
        path: '/admin',
        component: Landing_Admin
      },
      {
        path: '/konfirmasi',
        component: Konfirmasi
      },
      {
        path: '/lunas',
        component: Lunas
      },
      {
        path: '/daftar_peserta',
        component: Daftar_Peserta
      },
      {
        path: '/daftar_user',
        component: Daftar_User
      },
      {
        path: '/racepack',
        component: Racepack
      },
      {
        path: '/racepackdone',
        component: Racepackdone
      },
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
      { path: '/logged_user', component: Logged_User, name: 'logged_user' },
      { path: '/pembayaran', component: Pembayaran, name: 'pembayaran' },
      { path: '/tiket', component: Tiket, name: 'tiket' },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
