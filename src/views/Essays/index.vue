<template>
<div id="essays-container">
  <aside class="left">
    <el-collapse v-model="activeName" accordion>
    <el-collapse-item center title="2022年" name="2022">
    <div>
      <ul>
       <li v-for="(item,index) in dateList" :key="index" class="coll-li" @click="goAnchor(`_${item}`)">
       {{item}}月
       </li>
     </ul>
    </div>
  </el-collapse-item>
  </el-collapse>
  </aside>
  <main class="main">
    <div class="body">
      <div class="page-title">
        <h1>记录有趣的事</h1>
      </div>
      <div  class="content">
        <h1 class="year">2022年</h1>
        <el-divider></el-divider>
       <div  v-for="(item,index) in essaysList" :key="index">
          <div v-if="ifString(item)" class="month">
          <h1 :id="'_'+item">
            {{item+''}}月</h1>
          <el-divider></el-divider>
        </div>
        <div v-else class="day">
          <h2>{{publicationDate(item.createTime)}}--------{{item.title}}</h2>
              <!-- 使用mavon-editor插件 -->
    <mavon-editor class="md" :value="item.markdown" :subfield="false" :defaultOpen="'preview'"
      :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true" :external-link="externalLink" />
        </div>
       </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name:'essays',
  data(){
    return {
     activeName: '2022',
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
    // 过滤列表
    filtersEssaysList(essaysList){
       let curTag = '';
       let arr = []
 essaysList.forEach((item) => {
				const { id, title, createTime, markdown,categoryName,categoryId,updateTime } = item;
				const tag = createTime.slice(5, 7);
				if (curTag !== tag) {
					curTag = tag
          let tagStr =tag.replace(/(0+)/gi,"");
					arr.push(tagStr);
				}
				arr.push({
           id,
          title,
          createTime,
           markdown,
           categoryName,
           categoryId,
           updateTime,
				});
			});
      return arr;
    },
    // 判断是否为字符串
    ifString(item){
      return (typeof item) =="string"
    },
    // 时间过滤
    publicationDate(t) {
      let time = `${t}`.slice(0,10).split('-')
      time[1] = time[1].replace(/(0+)/gi,"");
      return `${time[1]}月${time[2]}日${t.slice(10,20)}`
    },
      goAnchor(e) {
      document.querySelector('#' + e).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    },
  },
  computed:{
    ...mapState({
      mapEssaysList: state =>state.Article.articleEssaysList,
    }),
    essaysList(){
      return this.filtersEssaysList(this.mapEssaysList)
    },
    dateList(){
      return this.essaysList.filter((item)=>{
        return this.ifString(item)
      })
    }
  },
  created () {
    this.$store.dispatch('getArticEssaysleList', '')
  },
  mounted () {
   
  }
}
</script>

<style scoped lang="less">
#essays-container{
   min-height: 100vh;
  margin-top: 60px;
  width:100%;
  height: 100%;
  caret-color: transparent;
  display: flex;
  flex-direction: row;
  // align-items: center;
  @media screen and (max-width:1118px) {
    .left{
      display: none;
    }
  }
  .left{
    // position:fixed;
    width: 410px;
    /deep/.el-collapse{
      position: fixed;
      border-right: 4px solid #3eaf7c;
      width:300px;
          height: 100%;
    background: white;
    }
    /deep/.el-collapse-item__header{
      padding-left: 20px;
          font-size: 20px;
    }
      /deep/.el-collapse-item__content{
        // padding-left: 30px;
        text-align: left;
        li{
          padding-left:80px
        }
      }
    .coll-li{
      cursor: pointer;
      padding:5px 30px;
      font-size: 17px;
      &:hover{
        background-color: #3eaf7c;
        color:white;
      }
    }
  }
  .main{
    width: 100%;
    
    .body{
      width: 800px;
      height: 100%;
      margin:0 auto;
      background-color: white;
          box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      .page-title{
        margin: 0 auto;
        text-align: left;
        padding: 40px 20px;
        h1{
          height: 50px;
          font-size: 24px;
          font-weight: 500;
          color: #181818;
          border-bottom: 2px solid #eaecef;
        }
          }
        .content{
          width: 100%;
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
          text-align: left;
          h1,h2{
              font-weight: 500;
            }
            .year{
              font-size: 26px;
            }
          .month{
            h1{
              font-size: 24px;
              padding-left: 20px;
            }
          }
          .day{
            padding: 20px;
            h2{
              padding: 10px;
              font-size: 14px;
            }
          }
        }
    }
  }
}
// markdown
/deep/.v-note-wrapper{
    min-width: 0px;
    min-height: 0px;
}
</style>