<template>
  <div id="main-container">
    <div class="imgDiv">
      <!-- <el-image src="https://api.yimian.xyz/img?type=wallpaper"> -->
      <el-image src="http://niu.foogeoo.ltd/blog/img_2021-02-06_1920x1080_96_background_normal.jpg">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
       

    <div class="mask">
       <transition-group
         :appear="true"
          name="animate__animated animate__bounce"
          enter-active-class="animate__fadeInDown"    
          leave-active-class="animate__backOutDown"
    >
      <h1 :key="1">我的博客网站</h1>
      <div key="2" class="mask-item">
        <div class="btn" @click="goStart">开始阅读</div>
        <div class="btn" @click="goProject">个人项目</div>
      </div>
        </transition-group>

    </div>
    </div>
    <div id="mm"></div>
    <!-- 文章列表 -->
    <ArticleList v-show="isShow">
    </ArticleList>
  </div>
</template>

<script>
import ArticleList from './ArticleList'
import Article from '../Main/Article'
import { mapState } from 'vuex'
export default {
  name: 'mainvue',
  components: {
    ArticleList,
    Article,
  },
  data() {
    return {
      page: 0,
      num: 15,
    }
  },
  methods: {
    goProject(){
      this.$router.push('/project')
    },
    goStart(){
      document.querySelector('#mm').scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
  beforeRouteLeave(to, from, next){
    let heightTop = document.documentElement.scrollTop || document.body.scrollTop; 
    from.meta.y=heightTop
      next()
    },
    // beforeRouteEnter(to, from, next) {
    //   console.log(to);
    //   document.documentElement.scrollTop = to.meta.y
    //   next()
    // },
  computed: {
    isShow() {
      return this.$route.path == '/'
    },
  },
  created () {
  }

}
</script>

<style scoped lang="less">
#mm{
  transform: translateY(-60px);
}
#main-container{
  .imgDiv{
    position: relative;
    width: 100%;
    height: 100%;
    .image-slot{
      min-height: 100vh;
      width: 1080px;
      height: 1080px;
    }
    .mask{
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%,-80%);
      width: 100%;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1{
        font-size: 70px;
        color: white;
        font-weight: 500;
        margin-bottom: 50px;
      }
      .mask-item{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        .btn{
          cursor: pointer;
       margin: 10px 30px;
    padding: 0 35px;
    height: 45px;
    line-height: 45px;
    font-size: 1rem;
    color: #fff;
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 30px;
    box-shadow: none;
      }
    }
    }
  }
}
</style>