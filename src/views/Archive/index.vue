<template>
   <div id="archive-container">
     <el-timeline>
    <el-timeline-item :color="color16m()" v-for="item in Alist" :timestamp="item.createTime" placement="top">
      <el-card shadow="hover">
        <div class="card">

          <p>{{item.title}}</p>
        <el-tag effect="plain" type="success">{{item.categoryName}}</el-tag>
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { throttle } from 'lodash'
export default {
  name: 'mainvue',
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
    p() {
      return this.$route.path
    },
       
  },
  methods: {
             color16m(){//十六进制颜色随机
						var r = Math.floor(Math.random()*256);
						var g = Math.floor(Math.random()*256);
						var b = Math.floor(Math.random()*256);
						var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
						return color;
					},       
    //判断滚动条是否到底部，刷新新的数据
    isRefresh: throttle(function () {
      if(this.$route.path != '/')return;
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
       if(this.$route.path != '/')return;
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
    },
  },
  created() {
    this.$store.dispatch('getArticleList', { page: this.page, num: this.num, categoryName: this.categoryName })
  },

}
</script>
<style lang="less" scoped>

#archive-container{
  width: 400px;
  margin: 0 auto;
  text-align: left;
  margin-top: 80px;
  /deep/.el-timeline-item__tail{
    border-left: 4px solid #409eff;
  }
  .card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  /deep/.el-card{
    cursor:pointer;
  }
}
</style>