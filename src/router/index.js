import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../components/layout.vue'
import layoutPage from '../components/layoutPage.vue'
import Home from '../views/landingpage/landingpage.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Table from '../views/table.vue'
import About from '../views/about/about.vue'
import Rules from '../views/rules/rules.vue'

Vue.use(VueRouter)

const routes = [
  // { path: '/', name: 'home', component: Home },
  { path: '/register', component: Register, name: 'register' },
  { path: '/login', component: Login, name: 'login' },
  {
    path: '/layout', component: layout, name: 'layout',
    children: [
      { path: '/admin', component: Table}
    ]
  },
  {
    path: '', component: layoutPage, name: 'layoutPage',
    children: [
      { path: '/about', component: About },
      { path: '/', name: 'home', component: Home },
      { path: '/rules', name: 'rules', component: Rules },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
