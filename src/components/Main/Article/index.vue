<template>
  <div id="article-container">
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