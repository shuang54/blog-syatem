import { reqArticleList, reqUpdateArticle, reqArticle, reqCategory, reqAddArticle } from "@/API/index"
import { Message } from "element-ui"
const actions = {
  // 获取文章列表
  async getArticleList({ commit, state }, data) {
    data.search = state.search
    let result = await reqArticleList(data)
    if (result.code == 200) {
      state.isRefreshBool = true
      // 根据page判断此次请求是刷新数据还是加载数据
      if (data.page == 0 && data.search == '') {
        return commit('GETARTICLElIST2', result.data)
      }
      console.log(result);
      return commit('GETARTICLElIST', result.data)
    }
    return Promise.reject(new Error('获取文章列表失败'))
  },
  // 通过搜索框获取数据
  async getArticleListBySearch({ commit, state }, data) {
    data.search = state.search
    let result = await reqArticleList(data)
    if (result.code == 200) {
      state.isRefreshBool = true
      return commit('GETARTICLElISTBYSEARCH', result.data)
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
  },
  // 添加文章
  async AddArticle({ commit }, data) {
    let result = await reqAddArticle(data)
    return result.code
  },
}

const mutations = {
  // 获取文章列表
  GETARTICLElIST(state, data) {
    if (data.length == []) {
      Message({
        message: '没有更多的文章了',
        type: 'error'
      }, true)
      state.isRefreshBool = false
    }

    state.articleList = [...state.articleList, ...data]

  },
  GETARTICLElIST2(state, data) {
    if (data.length == []) {
      Message({
        message: '加载失败',
        type: 'error'
      }, true)
    }
    if (state.articleList.length != []) {
      let data2 = Array.from(state.articleList);
      if (data[0].id == data2[0].id) {
        return;
      }
    }
    state.articleList = [...data, ...state.articleList]
  },
  // 通过搜索框获取数据
  GETARTICLElISTBYSEARCH(state, data) {
    if (data.length == []) {
      state.isRefreshBool = false
    }

    state.articleList = data

  },
  // 获取文章内容
  GETARTICLE(state, data) {
    state.article = data
  },
  // 获取分类
  GETCATEGORY(state, data) {
    state.category = data
  },
  //更改isRefreshBool
  CHANGEISREGRESHBOOL(state) {
    state.isRefreshBool = !state.isRefreshBool
    console.log(state.isRefreshBool)
  }

}
const state = {
  articleList: [],
  article: [],
  category: [],
  isRefreshBool: true,
  search: '',
}
const getters = {
}
export default {
  state,
  getters,
  mutations,
  actions,
}

