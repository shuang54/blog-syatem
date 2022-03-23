<template>
  <div id="article-container">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>网络日志</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ articleData.categoryName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
      </el-col>
      <el-col :span="24" class="page-title">
        <div class="category">
          <p>分类：</p>
          <router-link to="/">{{ articleData.categoryName }}</router-link>
        </div>
      </el-col>
      <el-col :span="24">
        <h1 class="title">{{ articleData.title }}</h1>
        <el-divider></el-divider>
      </el-col>
    </el-row>
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
    <el-row>
      <el-col :span="24" class="cc">
        <div class="asset-footer">
          <h3>文档信息</h3>
          <ul>
            <li>版权声明：自由转载-非商用-非衍生-保持署名</li>
            <li>
              本作品采用
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >知识共享署名 4.0 国际许可协议</a>进行许可。
            </li>
            <li>
              发表日期：
              <abbr class="published">{{ publicationDate }}</abbr>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'Article',
  computed: {
    ...mapState({
      articleData: state => state.Article.article
    }),
    publicationDate() {
      let time = `${this.articleData.createTime}`.slice(0, 10).split('-')
      return `${time[0]}年${time[1]}月${time[2]}日`
    }
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
  .page-title {
    height: 60px;
    margin: 10px 0 10px 0;
    padding: 0 20px;
    background-color: #deebf7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    .category {
      display: flex;
    }
  }
  .title {
    font-size: 3em;
    text-align: left;
    padding-left: 10px;
  }
  .el-divider--horizontal {
    margin: 15px 0 10px 0;
  }
  .md {
    height: 100%;
    max-height: 100%;
  }
  .cc {
    .asset-footer {
      margin-top: 2em;
      padding: 1.5em;
      border: 1px solid #d3d3d3;
      background-color: #deebf7;
      h3 {
        border-bottom: 1px solid gray;
        font-size: 1.5em;
        font-weight: bold;
        color: #567;
      }
      ul {
        li {
          color: #567;
          line-height: 20px;
        }
      }
    }
  }
}

@media all and (min-width: 1000px) {
  #article-container {
    width: 70%;
  }
}
@media all and (min-width: 1400px) {
  #article-container {
    width: 50%;
  }
}
</style>