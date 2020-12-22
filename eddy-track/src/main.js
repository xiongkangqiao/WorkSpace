// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'leaflet/dist/leaflet.css'
// 引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
import * as L from 'leaflet'
import axios from 'axios'
import 'leaflet-velocity/dist/leaflet-velocity.css'
import 'leaflet-velocity/dist/leaflet-velocity'
// import 'd3/dist/d3'
// import 'ih-leaflet-canvaslayer-field/dist/leaflet.canvaslayer.field'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/public.css'
import './assets/css/L.Control.MousePosition.css'
import './assets/js/leaflet.latlng-graticule.js'
import './assets/js/L.Control.MousePosition.js'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false;
Vue.L = Vue.prototype.$L = L;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
