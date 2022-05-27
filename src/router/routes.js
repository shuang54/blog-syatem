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
  },
  {
    path: '/archive', component: () => import('@/views/Archive'), name: 'archive', meta: { x: 0, y: 0 }
  },
  // {
  //   path: '/essays', component: () => import('@/views/Essays'), name: 'essays', meta: { x: 0, y: 0 }
  // },
  {
    path: '/project', component: () => import('@/views/Project'), name: 'project', meta: { x: 0, y: 0 }
  }

]