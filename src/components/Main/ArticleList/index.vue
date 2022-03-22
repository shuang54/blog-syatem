<template>
  <div id="article-list-container">
    <el-row>
      <el-col :sm="18" :xs="24">
        <div v-show="isShow" class="grid-content bg-purple-light">
          <div class="left">
            <div v-for="item in articleList" :key="item.id" class="list-box">
              <div class="list">
                <router-link
                  class="title"
                  :to="{ name: 'article', params: { 'id': item.id } }"
                >{{ item.title }}</router-link>
                <span class="classification">{{ item.categoryName }}</span>
              </div>
              <time class="time">{{ cTime(item.createTime) }}</time>
            </div>
          </div>
        </div>
        <el-empty v-show="!isShow" :image-size="200"></el-empty>
      </el-col>
      <el-col :sm="6" :xs="0">
        <div class="grid-content bg-purple">
          <div class="right">
            <el-input
              placeholder="搜索文章"
              class="search"
              prefix-icon="el-icon-search"
              v-model="search"
              clearable
              @keyup.enter.native="queryArticleByTitle"
              @clear="clearInput"
            ></el-input>
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span style="font-size: 18px;">分类</span>
              </div>
              <div
                v-for="item in categoryList"
                :key="item.id"
                class="text item"
                @click="queryArticleByCategoryName(item.categoryName)"
              >{{ item.categoryName }}</div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-backtop class="backtop"></el-backtop>
  </div>
</template>

<script>import { mapState } from "vuex"

export default {
  props: ['articleList'],
  data() {
    return {
      search: ''
    }
  },
  computed: {
    cTime() {
      return function (time) {
        return time.substring(0, 10)
      }
    },
    ...mapState({
      categoryList: state => state.Article.category
    }),
    isShow() {
      return this.articleList.length != 0
    }
  },
  methods: {
    // 点击分类进行查询
    queryArticleByCategoryName(categoryName) {
      console.log(categoryName);
    },
    // 根据input表单进行查询
    queryArticleByTitle() {
      this.$emit('queryArticleByTitle')
    },
    async clearInput() {
      this.$store.state.Article.search = ''

      await this.$store.dispatch('getArticleListBySearch', { page: 0, num: 15 })
    },

  },
  created() {
    this.$store.dispatch('getCategory')
  },
  watch: {
    search: function (newValue, oldValue) {
      this.$store.state.Article.search = newValue
    }
  }

}
</script>

<style scoped lang="less">
#article-list-container {
  .left {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    position: relative;
    width: 70%;
    padding-right: 50px;
    float: right;

    @media all and(max-width:1500px) {
      width: 70%;
    }
    @media all and(max-width:1000px) {
      width: 100%;
    }
    @media all and(max-width:768px) {
      float: none;
    }
    .list-box {
      margin: 0 auto;
      position: relative;
      padding: 10px 10px;
      margin-top: 10px;
      border-bottom: 1px solid #ccc;
      .list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        text-align: center;
        line-height: 50px;
        .title {
          font-size: 1.8rem;
        }
        a:hover {
          color: cornflowerblue;
        }
        .classification {
          text-align: center;
          line-height: 50px;
          color: darkorange;
        }
      }
      .time {
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #ccc;
        font-size: 0.8em;
      }
    }
  }
  .right {
    width: 220px;
    .search {
      width: 220px;
      float: left;
    }
    .text {
      font-size: 14px;
    }

    .item {
      padding: 9px 0 9px 9px;
      cursor: pointer;
    }
    .item:hover {
      color: dodgerblue;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }

    .box-card {
      width: 220px !important;
      text-align: left;
      background-color: #ffffcc;
      // background-color: rgba(0, 0, 0, 0);
    }
  }

  @media all and (max-width: 768px) {
    .backtop {
      right: 5px !important;
    }
  }
}
</style>