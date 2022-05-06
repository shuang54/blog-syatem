<template>
  <div id="article-container">
    <!-- 使用Layout布局 -->
    <el-row>
      <el-col :span="24">
        <!-- 使用面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>网络日志</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ articleData.categoryName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 分割线 -->
        <el-divider></el-divider>
      </el-col>
      <el-col :span="24" class="page-title">
        <div class="category">
          <p>分类：</p>
          <router-link :to="{ path: '/', query: { categoryName: articleData.categoryName } }">{{
              articleData.categoryName
          }}</router-link>
        </div>
      </el-col>
      <el-col :span="24">
        <h1 class="title">{{ articleData.title }}</h1>
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <!-- 使用mavon-editor插件 -->
    <mavon-editor class="md" :value="articleData.markdown" :subfield="false" :defaultOpen="'preview'"
      :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true" :external-link="externalLink" />
    <el-row>
      <el-col :span="24" class="cc">
        <div class="asset-footer">
          <h3>文档信息</h3>
          <ul>
            <li>版权声明：自由转载-非商用-非衍生-保持署名</li>
            <li>
              本作品采用
              <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">知识共享署名 4.0 国际许可协议</a>进行许可。
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
      externalLink: {
        content: '',
        codeStyle: '',
        //需要配置的内容：
        markdown_css: () => './md/dist/markdown/github-markdown.min.css',
        hljs_js: () => './md/dist/highlightjs/highlight.min.js',
        hljs_css: (css) => './md/dist/highlightjs/styles/' + css + '.min.css',
        hljs_lang: (lang) => './md/dist/highlightjs/languages/' + lang + '.min.js',
        katex_css: () => './md/dist/katex/katex.min.css',
        katex_js: () => './md/dist/katex/katex.min.js',
        toolbars: {		// markdown的工具栏
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true // 预览
        },
      }
    }
  },
  methods: {
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