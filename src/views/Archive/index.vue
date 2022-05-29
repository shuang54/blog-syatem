<template>
   <div id="archive-container">

         <transition
     :appear="true"
               name="animate__animated animate__bounce"
               enter-active-class="animate__fadeInUp"    
               leave-active-class="animate__backOutDown"
    >
     <el-timeline>
    <el-timeline-item :color="color16m()" v-for="item in Alist" :timestamp="publicationDate(item.createTime)" placement="top">
    
      <el-card shadow="hover">
        <div @click="clickCard(item.id)" class="card">
          <p>{{item.title}}</p>
        <el-tag effect="plain" type="success">{{item.categoryName}}</el-tag>
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
        </transition>
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
  },
  methods: {
      color16m(){//十六进制颜色随机
			 var r = Math.floor(Math.random()*256);
			 var g = Math.floor(Math.random()*256);
			 var b = Math.floor(Math.random()*256);
			 var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
			 return color;
			},
      clickCard(id){
        this.$router.push(`/article/${id}`)
      },
       //判断滚动条是否到底部，刷新新的数据
    isRefresh: throttle(function () {
      if(this.$route.path != '/archive')return;
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
      //  scrollTop + windowHeight
      let totalHeight = scrollTop + windowHeight
      if (
        totalHeight >= scrollHeight &&
        this.isRefreshBool
      ) {
        // false防止refresh()加载数据函数多次触发
        this.$store.commit('CHANGEISREGRESHBOOL')
        this.refresh();
      }
    }, 300),
    //刷新推荐文章
    refresh() {
       if(this.$route.path != '/archive')return;
      let that = this;
      let { page, num } = this
      page += num
      this.page = page
      let result = this.$store.dispatch('getArticleList', { page: page, num: num, categoryName: this.categoryName })
    },
        publicationDate(t) {
      let time = `${t}`.slice(0, 10).split('-')
      return `${time[0]}年${time[1]}月${time[2]}日`
    }
  
  },

  watch: {
  },
    created() {
    this.$store.dispatch('getArticleList', { page: this.page, num: this.num, categoryName: this.categoryName })
    //监视scroll滚动条
    window.addEventListener("scroll", this.isRefresh, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.isRefresh)
  }
}
</script>
<style lang="less" scoped>

#archive-container{
  min-height: 100vh;
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
    padding: 20px;
  }
  /deep/.el-card{
    cursor:pointer;
    .el-card__body{
      padding: 0px;
    }
  }
}
</style>