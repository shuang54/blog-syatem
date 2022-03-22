<template>
  <div id="article-container">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
      </el-col>
      <el-col :span="24" class="page-title"></el-col>
    </el-row>
    <mavon-editor
      class="md"
      :value="articleData.markdown"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'Article',
  computed: {
    ...mapState({
      articleData: state => state.Article.article
    })
  },
  data() {
    return {
    }
  },
  created() {
    this.id = this.$route.params.id
    this.$store.dispatch('getArticle', this.id)
  }
}
</script>

<style scoped lang="less">
#article-container {
  margin: 0 auto;
  .page-title {
    height: 50px;
    background-color: pink;
    margin: 10px 0 20px 0;
  }
  .el-divider--horizontal {
    margin: 15px 0 10px 0;
  }
  .md {
    height: 100%;
    max-height: 100%;
  }
}
@media all and (min-width: 1000px) {
  #article-container {
    width: 70%;
  }
}
</style>