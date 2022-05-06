import Main from '@/components/Main'
export default [

  {
    path: '/', component: Main, meta: { x: 0, y: 0 }
  },
  {
    path: '/article/:id', component: () => import('@/components/Main/Article'), name: 'article', meta: { x: 0, y: 0 }
  },
  {
    path: '/about', component: () => import('@/views/About'), name: 'about', meta: { x: 0, y: 0 }
  }

]