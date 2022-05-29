<template>
  <div id="article-list-container">
    <!-- 使用ElementUI中的Layout布局 -->
    <el-row>

      <el-col :sm="20" :md="18" :lg="10" :xs="24">
        <div v-show="isShow" class="grid-content bg-purple-light">
          <div class="left">
            <!-- 接受父组件传递的数据遍历文章列表 -->
            <div 
             @click="goArticle(item.id)"
              v-for="item in articleList" 
              :key="item.id" class="list-box">
              <div class="list">
                <!-- 使用router-link,当用户点击文章标题时跳转到相应的文章详情页 -->
                <router-link class="title"
                  :to="{ name: 'article', params: { 'id': item.id, 'categoryName': item.categoryName, 'title': item.title } }">
                  {{ item.title }}</router-link>
              </div>
              <div class="list-bot">
                <p class="classification"><i class="el-icon-collection-tag"></i>{{ item.categoryName }}</p>
                <time class="time"><i class="el-icon-time"></i>{{ cTime(item.createTime) }}</time>
              </div>
            </div>
             <el-pagination
                background
               @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
               :current-page="currentPage"
               :page-sizes="[10, 20, 30, 40]"
               :page-size="pageSize"
               layout="total, sizes, prev, pager, next, jumper"
               :total="total">
             </el-pagination>
          </div>
        </div>
        <el-empty v-show="!isShow" :image-size="200"></el-empty>
        
      </el-col>
      <el-col :sm="5" :md="5" :lg="5" :xs="0" class="right-box">

        <div class="right"  >
          <div v-sticky="70" class="right-box">
            <el-card  class="box-card" shadow="always" >
            <div slot="header" class="clearfix">
              <span style="font-size: 18px;"><i class="el-icon-date"></i>公告栏</span>
            </div>
            <p>{{userInfo.bulletin}}</p>
          </el-card>
          <el-card  class="box-card" shadow="always"  >
            <div slot="header" class="clearfix">
              <span style="font-size: 18px;"><i class="el-icon-collection-tag"></i>分类</span>
            </div>
            <div v-for="item in categoryList" :key="item.id" @click="queryArticleByCategoryName(item.categoryName,item.id)" class="text item"
              :class="categoryName == item.categoryName ? 'selected' : ''">
              <span class="cn" >{{ item.categoryName }}</span>
              <i v-show="categoryName == item.categoryName" @click.stop="clearCategoryName()" class="el-icon-close"></i>
            </div>
          </el-card>
          </div>
          <!-- <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px;">推荐阅读</span>
            </div>
          </el-card> -->
        </div>
      </el-col>
    </el-row>
    <el-backtop class="backtop"></el-backtop>
  </div>
</template>

<script>

import { mapState } from "vuex"

export default {
  /* 接受父组件传递的数据 */
  data() {
    return {
      currentPage:1,
      pageSize:10,
      categoryName: '',

    }
  },
  computed: {
    page(){
      return (this.currentPage -1) * this.pageSize
    },
    cTime() {
      return function (time) {
        return time.substring(0, 10)
      }
    },
    ...mapState({
      categoryList: state => state.Article.category,
      articleList: state => state.Article.articleListData,
      total:state=>state.Article.total,
    }),
    isShow() {
      return this.articleList.length != 0
    },
    queryData(){
      const {currentPage,pageSize,categoryName} = this
      return {currentPage,pageSize,categoryName}
    },
    
    ...mapState({
      userInfo:state=>state.Article.userInfo
    })
  },
  methods: {
    goArticle(id){
      this.$router.push('/article/'+id)
    },
    handleSizeChange(val) {
      this.pageSize = val
   },
   handleCurrentChange(val) {
     this.currentPage = val
   },
     // 搜索文章
     queryArticleByTitle() {
     this.$store.dispatch('getArticleListData', { page:(this.currentPage -1) * this.pageSize, num: this.pageSize, categoryName: this.categoryName })
    },
    //通过分类名称查询数据
     queryArticleByCategoryName(categoryName,id) {
      this.categoryName = categoryName
      this.$store.state.Article.categoryId = id
    },
     clearInput() {
       this.$store.commit('DELETESEARCH')
          this.$store.dispatch('getArticleListData', { page:this.page, num: this.pageSize, categoryName: this.categoryName })
      this.currentPage = 1
    },
    // 删除分类名称
     clearCategoryName() {
      this.categoryName = ''
       this.$store.state.Article.categoryId = ""
    },
  },
    watch: {
    p: function (newVal, oldVal) {
      if (this.$route.query.categoryName != undefined) {
        this.categoryName = this.$route.query.categoryName
        this.clearInput()
      }
    },
    queryData(newVal,oldVal){
       this.$store.dispatch('getArticleListData', { page:this.page, num: this.pageSize, categoryName: this.categoryName })
    }
  },
  created() {
    this.$store.dispatch('getCategory')
    this.$store.dispatch('getArticleListData', { page:this.page, num: this.pageSize, categoryName: this.categoryName })
    this.$store.dispatch('getTotal',{search:''})
  },
    mounted () {
    this.$eventBus.$on('queryArticleByTitle',this.queryArticleByTitle)
    this.$eventBus.$on('clearInput',this.clearInput)
  },
  beforeDestroy () {
    
  }

}
</script>

<style scoped lang="less">
.el-row {
  display: flex;
  justify-content: center;
}

#article-list-container {
  .left {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    position: relative;
    // width: 70%;
    float: right;
    width: 100%;

    @media all and(max-width:1500px) {
      // width: 70%;
    }

    @media all and(max-width:1000px) {
      width: 100%;
    }

    @media all and(max-width:768px) {
      float: none;
    }

    .list-box {
      cursor: pointer;
      margin: 0 auto;
      position: relative;
      padding: 10px 10px;
      margin-top: 10px;
        background-color: white;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
       transition: all .5s ease;
       border-radius: 10px;
      &:hover{
           box-shadow: 6px 8px 12px rgba(0, 0, 0, 0.2);
      }

      .list {
        width: 100%;
        height: 100%;
        text-align: left;
        box-sizing: border-box;
        padding: 10px 20px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eaecef;
        

        .title {
         font-size: 1.28rem;
          color:#3eaf7c;
              font-weight: 500;
        }

        a:hover {
        }
        .classification {
          text-align: center;
          line-height: 50px;
          color: darkorange;
           margin-left: 10px;
           display: block;
        }
      }
      .list-bot{
        display: flex;
        flex-direction: row;
        line-height: 1.5rem;
        font-size: 0.9rem;
        padding-left: 25px;
        padding-top: 10px;
        align-items: center;
      }
      .time {
        color: #ccc;
        font-size: 0.9rem;
        margin-left: 10px;
      }
    }
  }
  .right-box{
    position: sticky;
    top: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-top: 10px;
    .right-box{
      width:100%;
      height: 100%;
    }
    .text {
      font-size: 14px;
      &:hover{
        color: white;
        border-radius: 10px;
        background-color: #3eaf7c;
      }
    }

    .item {
      padding: 9px 0 9px 9px;
      cursor: pointer;

      .cn {
        width: 100%;
        height: 100%;
        padding: 9px;
      }
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }


  }

  @media all and (max-width: 768px) {
    /deep/.backtop {
      bottom: 90px !important;
    }
  }
}
 /deep/.backtop {
      bottom: 90px !important;
    }
.box-card {
  max-width: 220px !important;
  width: 100%;
  text-align: left;
  background-color: white;
  margin-bottom: 10px !important;

  // background-color: rgba(0, 0, 0, 0);
  .selected {
    background-color: #3eaf7c;
    border-radius: 10px;
    color: white;
  }

  .el-icon-close {
    float: right;
    padding-right: 10px;
    padding-top: 0;
    z-index: 99;
    font-size: 25px;
  }

  .el-icon-close:hover {
    color: crimson;
  }
}

.el-card {
  margin-bottom: 10px;
}

.box-ul {
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  .box-li {
    align-items: center;
    display: flex;
    list-style: none;
    padding: 5px 0 5px 0;
    flex: 1;
    width: 50%;
    min-width: 50%;
    font-size: 18px;
    font-weight: 600;
    justify-content: center;

    &:hover {
      background-color: #ccc;
      cursor: pointer;
    }
    a{
      color: black;
    }
  }
}

.right{
  background-color: transparent;
}
/deep/.el-pagination{
      padding: 20px 16px;
}
/deep/.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
  background-color: white !important;
}
/deep/.el-card__header{
  border-left: 8px solid #3eaf7c;
}
</style>