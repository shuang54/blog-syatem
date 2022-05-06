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
}
</script>
<style scoped lang="less">
#app {

  // background-color: #ccffcc;
  .el-container {

    .el-header,
    .el-footer {
      background-color: #c7edcc;
      color: #333;
      text-align: center;
    }

    .el-main {
      background-color: #faf9de;
      color: #333;
      text-align: center;
      padding: 0px;
    }
  }
}
</style>
