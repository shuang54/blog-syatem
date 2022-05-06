import axios from 'axios'
import * as nProgress from 'nprogress';
import 'nprogress/nprogress.css'
import store from '@/store'
//利用axios对象的create方法,创建一个axios实例
const requests = axios.create({
  //配置对象
  //基础路径
  // baseURL: "https://mock.apipost.cn/app/mock/project/dc05a74e-8292-4fd7-b7a8-ff491962b806/blog",
  baseURL: "http://www.foogeoo.ltd:9999/blog",
  timeout: 5000,
})
//请求拦截器:在发送请求之前，可以做一些事情
requests.interceptors.request.use((config) => {
  // if (store.state.detail.uuid_token) {
  // config.headers.userTempId = store.state.detail.uuid_token
  // }
  // if (store.state.user.logintoken) {
  // config.headers.token = store.state.user.logintoken
  // }
  nProgress.start()
  return config;
})
//响应拦截器
requests.interceptors.response.use((res) => {
  nProgress.done()
  return res.data
}, (error) => {
  console.log(error);
  return Promise.reject(new Error('响应失败'))
})
// console.log(requests.prototype);
export default requests