<template>
  <div id="article-list-container">
    <!-- 使用ElementUI中的Layout布局 -->
    <el-row>
      <el-col hidden-lg-and-dow :sm="4" :md="4" :lg="3" :xs="0">
        <div>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px;">公告栏</span>
            </div>
            <p>目前系统还在开发中~~~</p>
          </el-card>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px;">更多功能</span>
            </div>
            <ul class="box-ul">
              <li class="box-li"><router-link to="/about">个人介绍</router-link></li>
              <li class="box-li"><router-link to="/project">我的项目</router-link></li>
              <li class="box-li"><router-link to="/collect">个人导航</router-link></li>
            </ul>
          </el-card>
        </div>
      </el-col>
      <el-col :sm="15" :md="14" :lg="12" :xs="24">
        <div v-show="isShow" class="grid-content bg-purple-light">
          <div class="left">
            <!-- 接受父组件传递的数据遍历文章列表 -->
            <div v-for="item in articleList" :key="item.id" class="list-box">
              <div class="list">
                <!-- 使用router-link,当用户点击文章标题时跳转到相应的文章详情页 -->
                <router-link class="title"
                  :to="{ name: 'article', params: { 'id': item.id, 'categoryName': item.categoryName, 'title': item.title } }">
                  {{ item.title }}</router-link>
                <span class="classification">{{ item.categoryName }}</span>
              </div>
              <time class="time">{{ cTime(item.createTime) }}</time>
            </div>
          <!-- <el-pagination
          background
          layout="prev, pager, next"
         :total="1000">
        </el-pagination> -->
          </div>
        </div>
        <el-empty v-show="!isShow" :image-size="200"></el-empty>
        
      </el-col>
      <el-col :sm="4" :md="4" :lg="3" :xs="0">
        <div class="right">
          <el-input placeholder="搜索文章" class="search" prefix-icon="el-icon-search" v-model="search" clearable
            @keyup.enter.native="queryArticleByTitle" @clear="clearInput"></el-input>
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span style="font-size: 18px;">分类</span>
            </div>
            <div v-for="item in categoryList" :key="item.id" class="text item"
              :class="categoryName == item.categoryName ? 'selected' : ''">
              <span class="cn" @click="queryArticleByCategoryName(item.categoryName)">{{ item.categoryName }}</span>
              <i v-show="categoryName == item.categoryName" @click="clearCategoryName()" class="el-icon-close"></i>
            </div>
          </el-card>
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
  props: ['articleList', 'categoryName'],
  data() {
    return {
      search: '',
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
      this.$emit('queryArticleByCategoryName', categoryName)
    },
    // 根据input表单进行查询
    queryArticleByTitle() {
      this.$emit('queryArticleByTitle')
    },
    clearInput() {
      this.$store.state.Article.search = ''
      this.$emit('clearInput')
    },
    clearCategoryName() {
      this.$emit('clearCategoryName')
    }

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .search {
      max-width: 220px !important;
      width: 100%;
      float: left;
    }

    .text {
      font-size: 14px;
    }

    .item {
      padding: 9px 0 9px 9px;
      cursor: pointer;

      .cn {
        width: 100%;
        height: 100%;
        padding: 9px;
      }

      .cn:hover {
        color: dodgerblue;
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
    .backtop {
      right: 5px !important;
    }
  }
}

.box-card {
  max-width: 220px !important;
  width: 100%;
  text-align: left;
  background-color: #ffc;
  margin-bottom: 10px !important;

  // background-color: rgba(0, 0, 0, 0);
  .selected {
    background-color: #c7edcc;
    border-radius: 10px;
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


</style>