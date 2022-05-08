import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import { mavonEditor } from 'mavon-editor'
import Vuelazyload from 'vue-lazyload'

// import 'mavon-editor/dist/css/index.css'
import { Button, Input, Select, Option, Message, Container, Main, Header, Card, Col, Backtop, Row, Icon, Empty, Breadcrumb, BreadcrumbItem, Divider, Progress } from 'element-ui';
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Card)
Vue.use(Col)
Vue.use(Backtop)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Empty)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Divider)
Vue.use(Progress)
Vue.use(Vuelazyload, {
  // error: require('../public/favicon.ico'),
  // loading: require('../public/favicon.ico')
})
Vue.prototype.$message = Message;
Vue.component('mavonEditor', mavonEditor)
new Vue({
  router,
  store,
  data: {
    timerId: ''
  },
  mounted() {
    window.addEventListener('scroll', this.justifyPos)
  },
  methods: {
    justifyPos() {
      if (this.timerId) clearTimeout(this.timerId)
      this.timerId = setTimeout(() => {
        this.$route.meta.y = window.pageYOffset
      }, 300)
    }
  },
  render: h => h(App)
}).$mount('#app')
