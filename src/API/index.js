import requests from "./requests";

export const reqArticleList = (data) => requests({ url: `/article/articlelist?page=${data.page}&num=${data.num}`, method: 'get' })
export const reqArticle = (id) => requests({ url: `/article/details/${id}`, method: 'get' })
export const reqAddArticle = (data) => requests({ url: '/article/addarticle', method: 'post', params: data })
export const reqUpdateArticle = (data) => requests({ url: `/article/updatearticle?id=${data.id}&title=${data.title}&categoryId=${data.categoryId}&markdown=${data.markdown}`, method: 'put' })