import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import { mavonEditor } from 'mavon-editor'
import Vuelazyload from 'vue-lazyload'

// import 'mavon-editor/dist/css/index.css'
import { Button, Input, Select, Collapse, CollapseItem, TimelineItem,Tag, Timeline, Pagination, Option, Calendar, Message, Container, Main, Header, Card, Col, Backtop, Row, Icon, Empty, Breadcrumb, BreadcrumbItem, Divider, Progress } from 'element-ui';
Vue.config.productionTip = false
Vue.use(Calendar)
Vue.use(TimelineItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tag)
Vue.use(Timeline)
Vue.use(Pagination)
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
Vue.prototype.$eventBus = new Vue();

Vue.directive('sticky', {
  inserted(el, binding) {
    const rect = el.getBoundingClientRect();
    /** 这里加上滚动条的位置，原因：
     * 页面滚动后再刷新，浏览器会自动跳转到之前滚动的位置
     * 此时，获取到的 rect.top 的位置是不对的
     */
    // 获取元素最初距离顶部的位置
    const originTop = rect.top + window.pageYOffset;
    const originLeft = rect.left + window.pageXOffset;
    if (!binding.value) binding.value = 0;
    const paddingTop = binding.value;
    window.stickyScrollCallback = () => {
      // 页面滚动距离大于元素最初距离顶部位置，则使元素变为position:fixed
      if (window.pageYOffset > originTop - paddingTop) {
        el.style.cssText = `
                    position: fixed;
                    left: ${originLeft}px;
                    top: ${paddingTop}px;
                    z-index: 10;
                    box-shadow: 0 0 15px #ddd;
                `;
      } else {
        el.style.cssText = '';
      }
    };
    window.addEventListener('scroll', window.stickyScrollCallback);
  },
  unbind() {
    window.removeEventListener('scroll', window.stickyScrollCallback);
  }
});
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
