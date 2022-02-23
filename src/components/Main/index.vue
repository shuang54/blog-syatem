<template>
  <div id="main-container">
    <ArticleList></ArticleList>
    <ArticleList></ArticleList>
  </div>
</template>

<script>
import ArticleList from './ArticleList'
export default {
  components: {
    ArticleList
  },

}
</script>

<style scoped lang="less">
#main-container {
  position: relative;
  left: 25%;
  width: 30%;
  height: 100%;
  color: #3b3b3b;
  padding: 10px 30px;
}
</style>