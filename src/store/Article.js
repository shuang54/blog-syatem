import { reqArticleList, reqUpdateArticle, reqArticle } from "@/API/index"
const state = {
  articleList: [],
  article: [],
}
const getters = {
}
const mutations = {
  GETARTICLElIST(state, data) {
    state.articleList = data
  },
  GETARTICLE(state, data) {
    state.article = data
  }
}
const actions = {
  async getArticleList({ commit }, data) {
    let result = await reqArticleList(data)
    if (result.code == 200) {
      return commit('GETARTICLElIST', result.data)
    }
    return Promise.reject(new Error('获取文章列表失败'))
  },
  async getArticle({ commit }, id) {
    let result = await reqArticle(id)
    if (result.code == 200) {
      return commit('GETARTICLE', result.data)
    }
  }
}
export default {
  state,
  getters,
  mutations,
  actions,
}

