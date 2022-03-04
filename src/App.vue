<template>
  <div id="app">
    <el-container>
      <el-header>
        <MyNav></MyNav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import MyMain from '@/components/Main/index.vue'
import MyNav from '@/components/MyNav'
import 'element-ui/lib/theme-chalk/index.css';
export default {
  components: {
    MyMain,
    MyNav,
  },
}
</script>
<style scoped lang="less">
#app {
  // background-color: #ccffcc;

  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
}
</style>
