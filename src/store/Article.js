import { reqArticleList, reqUpdateArticle, reqArticle, reqCategory } from "@/API/index"

const actions = {
  // 获取文章列表
  async getArticleList({ commit }, data) {
    let result = await reqArticleList(data)
    if (result.code == 200) {
      return commit('GETARTICLElIST', result.data)
    }
    return Promise.reject(new Error('获取文章列表失败'))
  },
  // 获取文章内容
  async getArticle({ commit }, id) {
    let result = await reqArticle(id)
    if (result.code == 200) {
      return commit('GETARTICLE', result.data)
    }
  },
  // 获取分类
  async getCategory({ commit }) {
    let result = await reqCategory()
    if (result.code == 200) {
      return commit('GETCATEGORY', result.data)
    }
    return Promise.reject(new Error('获取分类消息失败'))
  }
}

const mutations = {
  GETARTICLElIST(state, data) {
    state.articleList = data
  },
  GETARTICLE(state, data) {
    state.article = data
  },
  GETCATEGORY(state, data) {
    state.category = data
  },
}
const state = {
  articleList: [],
  article: [],
  category: [],
}
const getters = {
}
export default {
  state,
  getters,
  mutations,
  actions,
}

