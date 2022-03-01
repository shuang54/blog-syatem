<template>
  <div id="main-container">
    <!-- 文章列表 -->
    <ArticleList
      v-for="item in Alist"
      :key="item.id"
      :title="item.title"
      :createTime="item.createTime"
      :category="item.category"
    ></ArticleList>
    <!-- 添加文章 -->
    <!-- <AddFile></AddFile> -->
    <!-- 文章详情 -->
    <!-- <Article></Article> -->
  </div>
</template>

<script>
import ArticleList from './ArticleList'
import AddFile from '../AddFile'
import Article from '../Main/Article'
import { mapState } from 'vuex'
export default {
  components: {
    ArticleList,
    AddFile,
    Article
  },
  computed: {
    ...mapState({
      Alist: state => state.Article.articleList
    })
  },
  methods: {

  },

  created() {
    this.$store.dispatch('getArticleList')
  }
}
</script>

<style scoped lang="less">
#main-container {
  margin: 0 auto;
  height: 100%;
  color: #3b3b3b;
  padding: 10px 30px;
}
</style>