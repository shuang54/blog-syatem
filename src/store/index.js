import Vue from 'vue'
import Vuex from 'vuex'
import Article from '@/store/Article'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Article,
  }
})
