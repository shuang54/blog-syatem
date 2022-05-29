import { reqArticleList, reqArticEssaysleList, reqUserInfo,reqArticle, reqCategory, reqAddArticle, reqTotal } from "@/API/index"
import { Message } from "element-ui"
const actions = {
  async getUserInfo({commit},data){
    let result = await reqUserInfo()
    if(result.code == 200){
      commit('GETUSERINFO',result.data)
    }
  },
  // 获取文章列表
  async getArticleList({ commit, state }, data) {
    data.search = state.search
    data.categoryName = data.categoryName || ""
    let result = await reqArticleList(data)
    if (result.code == 200) {
      state.isRefreshBool = true
      // && (data.categoryName != '' || data.search == '')
      if (data.page == 0) {
        state.articleList = []
      }
      // 根据page判断此次请求是刷新数据还是加载数据
      if (data.page == 0 && data.search == '') {
        return commit('GETARTICLElIST2', result.data)
      }

      return commit('GETARTICLElIST', result.data)
    }
    return Promise.reject(new Error('获取文章列表失败'))
  },
  // 获取首页文章列表
  async getArticleListData({ commit, state }, data) {

    data.search = state.search
    data.categoryName = data.categoryName || ""
    let result = await reqArticleList(data)
    if (result.code == 200) {
      this.dispatch('getTotal',{search:'',categoryId:state.categoryId})
      return commit('GETARTICLElISTDATA', result.data)
    }
    return Promise.reject(new Error('获取文章列表失败'))
  },
  // 获取随笔文章列表
  async getArticEssaysleList({ commit, state }, data) {
    let result = await reqArticEssaysleList(data)
    if (result.code == 200) {
      return commit('GETARTICLEESSAYSlIST', result.data)
    }
    return Promise.reject(new Error('获取文章列表失败'))
  },
  // 通过搜索框获取数据
  async getArticleListBySearch({ commit, state }, data) {
    data.search = state.search
    let result = await reqArticleList(data)
    if (result.code == 200) {
      // state.isRefreshBool = true
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
  async getTotal({ commit,state }, data) {
    data.search = state.search
    data.categoryId = data.categoryId || ""
    let result = await reqTotal(data)
    if(result.code==200){
      commit('GETTOTAL',result.data)
    }
  },
}

const mutations = {
  GETUSERINFO(state,data){
    state.userInfo = data
  },
  // 清空search
  DELETESEARCH(state){
    state.search = ''
  },
  // 获取总数
  GETTOTAL(state,data){
    state.total = data
  },
  // 获取文章列表
  GETARTICLElIST(state, data) {
    if (data.length == []) {
      Message({
        message: '没有更多了',
        type: 'error'
      }, true)
      state.isRefreshBool = false
    }

    state.articleList = [...state.articleList, ...data]

  }, 
  GETARTICLElISTDATA(state,data){
    state.articleListData = data
  },
  // 获取随笔文章列表
  GETARTICLEESSAYSlIST(state, data) {

    state.articleEssaysList = data

  },
  GETARTICLElIST2(state, data) {
    if (data.length == []) {
      Message({
        message: '暂无数据',
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

    state.articleListData = data

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
  articleList: [],        //归档数据
  article: [],            //文章数据
  category: [],           //分类列表
  isRefreshBool: true,    //是否刷新
  search: '',             //搜索内容
  articleEssaysList: [],  //随笔文章列表
  articleListData:[],   //首页文章数据
  total:0,
  categoryId:'',
  userInfo:{},
}
const getters = {
  
}
export default {
  state,
  getters,
  mutations,
  actions,
}

