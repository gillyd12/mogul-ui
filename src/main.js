// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueContentPlaceholders from 'vue-content-placeholders'
import Fetch from 'whatwg-fetch'

Vue.use(VueContentPlaceholders)
Vue.use(Fetch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, VueContentPlaceholders }
})
