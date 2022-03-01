import requests from "./requests";

export const reqArticleList = () => requests({ url: "/article/articlelist", method: 'get' })
