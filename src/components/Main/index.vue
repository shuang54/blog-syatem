<template>
  <div id="main-container">
    <div class="imgDiv">
     <!-- <img src="https://api.yimian.xyz/img?type=wallpaper"/> -->
     <img src="http://niu.foogeoo.ltd/blog/img_2022-05-06_1920x1080_96_background_normal.jpg"/>
    </div>
    <!-- 文章列表 -->
    <ArticleList v-show="isShow" :articleList="Alist" 
      @queryArticleByCategoryName="queryArticleByCategoryName" 
      @clearCategoryName="clearCategoryName" :categoryName="categoryName">
    </ArticleList>

  </div>

</template>

<script>
import ArticleList from './ArticleList'
import Article from '../Main/Article'
import { mapState } from 'vuex'
export default {
  name: 'mainvue',
  components: {
    ArticleList,
    Article,
  },
  data() {
    return {
      // isRefreshBool: true,
      page: 0,
      num: 15,
      categoryName: '',
    }
  },
  computed: {
    ...mapState({
      Alist: state => state.Article.articleList,
      isRefreshBool: state => state.Article.isRefreshBool
    }),
    isShow() {
      return this.$route.path == '/'
    },
    ...mapState({
      categoryList: state => state.Article.category
    }),
    
  },
  methods: {
    // 搜索文章
    async queryArticleByTitle() {

      await this.$store.dispatch('getArticleListBySearch', { page: 0, num: 15, categoryName: this.categoryName })
    },
    //
    async queryArticleByCategoryName(categoryName) {
      this.page = 0
      this.num = 15
      this.categoryName = categoryName
      await this.$store.dispatch('getArticleList', { page: this.page, num: this.num, categoryName: this.categoryName })
    },
    async clearInput() {
      this.page = 0
      this.num = 15
      await this.$store.dispatch('getArticleList', { page: this.page, num: this.num, categoryName: this.categoryName })

    },
    async clearCategoryName() {
      this.page = 0
      this.num = 15
      this.categoryName = ''
      await this.$store.dispatch('getArticleList', { page: this.page, num: this.num, categoryName: this.categoryName })
    },
    
  },

  watch: {
    p: function (newVal, oldVal) {
      if (this.$route.query.categoryName != undefined) {
        this.categoryName = this.$route.query.categoryName
        this.clearInput()
      }
    },
  },
  created() {
    this.$store.dispatch('getArticleList', { page: this.page, num: this.num, categoryName: this.categoryName })
  },
  mounted () {
    this.$eventBus.$on('queryArticleByTitle',this.queryArticleByTitle)
    this.$eventBus.$on('clearInput',this.clearInput)
  }
}
</script>

<style scoped lang="less">

#main-container{
  .imgDiv{
    width: 100%;
    height: 100%;
  }
}
</style>