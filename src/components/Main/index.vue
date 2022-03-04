<template>
  <div id="main-container">
    <!-- 文章列表 -->
    <ArticleList
      v-for="item in Alist"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :createTime="item.createTime"
      :categoryName="item.categoryName"
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
    Article,
  },
  data() {
    return {
      // isRefreshBool: true,
      page: 0,
      num: 15,
    }
  },
  computed: {
    ...mapState({
      Alist: state => state.Article.articleList,
      isRefreshBool: state => state.Article.isRefreshBool
    }),

  },
  methods: {
    //判断滚动条是否到底部，刷新新的数据
    isRefresh() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      // console.log(scrollTop + windowHeight + "--" + scrollHeight);
      console.log(this.isRefreshBool);
      if (
        scrollTop + windowHeight >= scrollHeight &&
        this.isRefreshBool
      ) {
        console.log(scrollTop + windowHeight + "---" + scrollHeight);
        // false防止refresh()加载数据函数多次触发
        this.isRefreshBool = false;
        this.refresh();
      }
    },
    //刷新推荐文章
    refresh() {
      let that = this;
      let { page, num } = this
      this.page += num
      let result = this.$store.dispatch('getArticleList', { page: page, num: num })
      result.then(() => {
        this.isRefreshBool = true
      })

    },
  },


  created() {
    //获取数据
    this.$store.dispatch('getArticleList', { page: this.page, num: this.num })
    //监视scroll滚动条
    window.addEventListener("scroll", this.isRefresh, true);
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