import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import AMap from 'vue-amap'
Vue.use(AMap);
Vue.use(ElementUI);
AMap.initAMapApiLoader({
  // 高德key
  key: '9d88c07da4a7c4efda5a1d795b74f90e',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
