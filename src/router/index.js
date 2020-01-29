import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../components/layout.vue'
import layoutPage from '../components/layoutPage.vue'
import layoutUser from '../components/layoutUser.vue'
import layoutAuth from '../components/layoutAuth.vue'
import Home from '../views/landingpage/landingpage.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Daftar_User from '../views/admin/daftar_user.vue'
import Daftar_Peserta from '../views/admin/daftar_peserta.vue'
import Landing_Admin from '../views/admin/landing_admin.vue'
import About from '../views/landingpage/about.vue'
import Rules from '../views/landingpage/rules.vue'
import Logged_User from '../views/user/logged_user.vue'
import Konfirmasi from '../views/admin/konfirmasi_pembayaran.vue'
import Racepack from '../views/admin/racepack.vue'
import Racepackdone from '../views/admin/racepackdone.vue'
import Lunas from '../views/admin/pembayaran_selesai.vue'
import Pembayaran from '../views/user/pembayaran.vue'
import Tiket from '../views/user/tiket.vue'
import LupaPassword from '../views/lupa_password'

Vue.use(VueRouter)

const requireAuthAdmin = (to, from, next) => {

  let userid= localStorage.getItem('idUser_active');
  let username= localStorage.getItem('levelUser_active');
  if (username !== '1' ) { 
      alert('Maaf anda belum login/Anda bukan admin')
      next({
        path: '/login'
    })
  } 
   else {
    next()
  }
}
const requireAuthUser = (to, from, next) => {

  let userid= localStorage.getItem('idUser_active');
  let username= localStorage.getItem('levelUser_active');
  if (username !== '2') { 
      alert('Maaf anda belum login/Anda bukan user')
      next({
        path: '/login'
    })
  } 
   else {
    next()
  }
}

const routes = [
  // { path: '/', name: 'home', component: Home },
  {
    path: '/auth', component: layoutAuth,
    children : [
      { path: '/register', component: Register, name: 'register' },
      { path: '/login', component: Login, name: 'login' },
      { path: '/lupapassword', component: LupaPassword, name: 'lupapassword' },
      
    ]
  },
  {
    path: '/layout', component: layout, name: 'layout',
    beforeEnter: requireAuthAdmin,
    children: [
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
      { path: '/', name: 'home', component: Home, },
      { path: '/rules', name: 'rules', component: Rules },
    ]
  },
  {
    path: '', component: layoutUser,
    beforeEnter: requireAuthUser,
    children: [
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
