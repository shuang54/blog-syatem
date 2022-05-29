<template>
  <div id="app">
    <!-- Container组件 -->
    <el-container>
      <!-- 顶栏容器 -->
      <el-header>
        <!-- 自定义的头部组件 -->
        <MyNav></MyNav>
      </el-header>
      <!-- 主要区域容器 -->
      <el-main>
        <!-- 路由组件在这里展示 -->
        <keep-alive include="mainvue">
          <router-view></router-view>
        </keep-alive>
        <!-- <MyMain></MyMain> -->
      </el-main>
        <el-footer>
          Copyright © 2019 - 2022 
<a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备2021022386号</a>
        </el-footer>
    </el-container>
  </div>
</template>
<script>
// 引入组件
import MyMain from '@/components/Main/index.vue'
import MyNav from '@/components/MyNav'
import 'element-ui/lib/theme-chalk/index.css';
export default {
  /* 注册组件 */
  components: {
    MyMain,
    MyNav,
  },
  created () {
    this.$store.dispatch('getUserInfo')
    
  }
}
</script>
<style scoped lang="less">

#app {

  // background-color: #ccffcc;
  .el-container {
    .el-header {
      position: fixed;
      width: 100%;
      height: 50px;
      z-index: 2058;
    }

    .el-main {
      // margin-top: 60px;
      overflow: hidden;
    }

    .el-header,
    .el-footer {
      // background-color: #c7edcc;
     
      color: #333;
      text-align: center;
      z-index: 2000;
      padding: 0px;
    }
    /deep/.el-footer {
      background-color: white;
      width: 100%;
      height: 100px;
      border-top: 1px solid #eaecef;
      font-size: 15px;
      padding: 5px;
      box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
      a:hover{
        color: #333;
      }
    }
    .el-main {
      background-color:#eaeaea;
      color: #333;
      text-align: center;
      padding: 0px;
    }
  }
}
</style>
