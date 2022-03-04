import requests from "./requests";

//获取文章列表
export const reqArticleList = (data) => requests({ url: `/articlelist?page=${data.page}&num=${data.num}`, method: 'get' })
// 获取文章内容
export const reqArticle = (id) => requests({ url: `/article/${id}`, method: 'get' })
// 添加文章
export const reqAddArticle = (data) => requests({ url: '/article', method: 'post', params: data })
// 修改文章
export const reqUpdateArticle = (data) => requests({ url: `/article?id=${data.id}&title=${data.title}&categoryId=${data.categoryId}&markdown=${data.markdown}`, method: 'put' })
// 获取分类
export const reqCategory = () => requests({ url: '/category', method: 'get' })