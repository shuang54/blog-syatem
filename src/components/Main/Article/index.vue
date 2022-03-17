<template>
  <div id="article-container">
    <div class="box">
      <div class="box-body">
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
    </div>
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
  width: 60%;
  margin: 0 auto;
  height: 100%;
  color: #3b3b3b;
  padding: 10px 30px;
  .box-body {
    .md {
      background-color: white;

      width: 100%;
      height: 100%;
    }
  }
}
</style>