<template>
  <div id="main-container">
    <!-- 文章列表 -->
    <ArticleList
      v-show="isShow"
      :articleList="Alist"
      @queryArticleByTitle="queryArticleByTitle"
      @queryArticleByCategoryName="queryArticleByCategoryName"
      @clearInput="clearInput"
      @clearCategoryName="clearCategoryName"
      :categoryName="categoryName"
    ></ArticleList>
  </div>
</template>

<script>
import ArticleList from './ArticleList'
import AddFile from '../AddFile'
import Article from '../Main/Article'
import { mapState } from 'vuex'
import { throttle } from 'lodash'
export default {
  name: 'mainvue',
  components: {
    ArticleList,
    AddFile,
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
    p() {
      return this.$route.path
    }
  },
  methods: {
    //判断滚动条是否到底部，刷新新的数据
    isRefresh: throttle(function () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      let windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      // console.log(scrollTop + windowHeight + "--" + scrollHeight);
      // console.log(this.isRefreshBool);
      //  scrollTop + windowHeight
      let totalHeight = scrollTop + windowHeight
      // this.$route.meta.y = totalHeight
      if (
        totalHeight >= scrollHeight &&
        this.isRefreshBool
      ) {
        // console.log(scrollTop + windowHeight + "---" + scrollHeight);
        // false防止refresh()加载数据函数多次触发
        this.$store.commit('CHANGEISREGRESHBOOL')
        this.refresh();
      }
    }, 300),
    //刷新推荐文章
    refresh() {
      let that = this;
      let { page, num } = this
      page += num
      this.page = page
      let result = this.$store.dispatch('getArticleList', { page: page, num: num, categoryName: this.categoryName })
      // result.then(() => {
      //   this.$store.commit('CHANGEISREGRESHBOOL')
      // })

    },
    //
    async queryArticleByTitle() {
      await this.$store.dispatch('getArticleListBySearch', { page: 0, num: 15, categoryName: this.categoryName })
    },
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
    }
  },

  watch: {
    p: function (newVal, oldVal) {
      if (oldVal == '/addarticle') {
        this.$store.dispatch('getArticleList', { page: 0, num: 1 })
      }
      if (this.$route.query.categoryName != undefined) {
        this.categoryName = this.$route.query.categoryName
        this.clearInput()
      }
    }
  },
  created() {
    this.$store.dispatch('getArticleList', { page: this.page, num: this.num, categoryName: this.categoryName })

    //监视scroll滚动条
    window.addEventListener("scroll", this.isRefresh, true);
    // console.log('created');
    // this.$on('queryArticleByTitle')
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.isRefresh)
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