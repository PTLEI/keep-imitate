// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueLazyload from 'vue-lazyload'

import api from '../static/api/api'
Vue.prototype.$api = api

import { Notification } from 'element-ui';
Vue.prototype.$notify = Notification;

Vue.config.productionTip = false

// element-ui导入使用
Vue.use(ElementUI)
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
