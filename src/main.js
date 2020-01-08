import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/assets/css/bootstrap.min.css'
import '@/assets/css/animate.css'
import '@/assets/css/fonts/awesome_2/css/font-awesome.min.css'
import '@/assets/css/style.css'

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);
Vue.loadScript("/statics/js/plugins/popper/popper.min.js")
Vue.loadScript("/statics/js/bootstrap.js")
Vue.loadScript("/statics/js/plugins/metisMenu/jquery.metisMenu.js")
Vue.loadScript("/statics/js/plugins/slimscroll/jquery.slimscroll.min.js")
Vue.loadScript("/statics/js/inspinia.js")
Vue.loadScript("/statics/js/plugins/wow/wow.min.js")
Vue.loadScript("/statics/js/plugins/pace/pace.min.js")
Vue.loadScript("/statics/js/landing.js")

const axios = require('axios').default;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
