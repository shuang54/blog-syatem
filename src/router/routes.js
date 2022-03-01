import articlelist from '@/components/Main/ArticleList'
import main from '@/components/Main'
export default [

  {
    path: '/', component: main
  },
  {
    path: '/article/:id', component: () => import('@/components/Main/Article'), name: 'article'
  },
  {
    path: '/articlelist', component: articlelist, name: 'articleList'
  },
  {
    path: '/addarticle', component: () => import('@/components/AddFile'), name: 'addarticle'
  }

]