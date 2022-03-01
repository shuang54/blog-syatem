import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false
Vue.component('mavonEditor', mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
