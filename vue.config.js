const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost",
    port: '8080',
    // https: false, //是否使用https协议
    // hotOnly: true, //是否开启热更新
    //设置代理，解决跨域问题的关键
    proxy: {
      '^/blog': {
        target: 'http://127.0.0.1:8000', //API服务器的地址
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // },
        // 突破host和origin的限制
        // headers: {
        //   referer: 'http://127.0.0.1:8000',
        //   origin: 'http://127.0.0.1:8000',
        //   host: '127.0.0.1:8000'
        // }
      },
    },
  },
})
