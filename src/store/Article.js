import { reqArticleList } from "@/API/index"
const state = {
  articleList: [],
}
const getters = {
}
const mutations = {
  GETaRTICLElIST(state, data) {
    state.articleList = data
  }
}
const actions = {
  async getArticleList({ commit }) {
    let result = await reqArticleList()
    if (result.code == 200) {
      return commit('GETaRTICLElIST', result.data)
    }
    return Promise.reject(new Error('获取文章列表失败'))
  }
}
export default {
  state,
  getters,
  mutations,
  actions,
}

