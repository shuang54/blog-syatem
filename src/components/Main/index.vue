<template>
  <div id="main-container">
    <!-- <ArticleList></ArticleList>
    <ArticleList></ArticleList>-->
    <AddFile></AddFile>
    <!-- <Article></Article> -->
  </div>
</template>

<script>
import ArticleList from './ArticleList'
import AddFile from '../AddFile'
import Article from '../Main/Article'
export default {
  components: {
    ArticleList,
    AddFile,
    Article
  },

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