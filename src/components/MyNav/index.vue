<template>
  <div id="my-nav-container" :class="btnFlag == true ? 'btnFlag':''">
    <div >
      <img v-show="btnFlag" src="@/assets/images/avataaars.png" />

    </div>
    <nav>
        <el-input v-show="btnFlag" placeholder="搜索文章" class="search" prefix-icon="el-icon-search" v-model="search" clearable
            @keyup.enter.native="queryArticleByTitle" @clear="clearInput"></el-input>
      <router-link active-class="bot" :to="{ path: '/#' }"><i class="el-icon-house icon"></i>  首页</router-link>
      <router-link active-class="bot" :to="{ path: '/essays' }"><i class="el-icon-notebook-2 icon"></i>  随笔</router-link>
      <router-link active-class="bot" :to="{ path: '/archive' }"><i class="el-icon-timer icon"></i>  归档</router-link>
      <!-- <router-link active-class="bot" :to="{ path: '/collect' }">分享</router-link> -->
      <router-link active-class="bot" :to="{ path: '/project' }"><i class="el-icon-star-off icon"></i>  项目</router-link>
      <router-link active-class="bot" :to="{ path: '/about' }"><i class="el-icon-user icon"></i>  关于</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MyNav',
  data () {
    return {
      search: '',
       btnFlag: false,
    }
  },
  methods: {
        // 根据input表单进行查询
    queryArticleByTitle() {
      this.$eventBus.$emit('queryArticleByTitle')
    },
    clearInput() {
      this.$store.state.Article.search = ''
      this.$eventBus.$emit('clearInput')
    },
    // 监听回到顶部按钮距浏览器顶部的距离，滚动的距离如果大于浏览器高度时，设置 btnFlag 为true,否则就是false
    scrollToTop() {
      if(this.$route.path != '/')return;
        let that = this;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        that.scrollTop = scrollTop;
        //为了计算距离顶部的高度，当高度大于50显示回顶部图标，小于50则隐藏
        if (that.scrollTop > 60 ) {
            that.btnFlag = true;
        } else {
            that.btnFlag = false;
        }
    },
   
  },
  computed: {
     p() {
      return this.$route.path
    }
  },
    watch: {
    search: function (newValue, oldValue) {
      this.$store.state.Article.search = newValue
    },
      p: function (newVal, oldVal) {
        console.log(newVal);
      if (this.$route.path != '/') {
        this.categoryName = this.$route.query.categoryName
        this.btnFlag = true
      }
    },
  },
  mounted () {

      window.addEventListener("scroll", this.scrollToTop,true);
    
  },
   destroyed() {
        window.removeEventListener("scroll", this.scrollToTop,true);
    },
}
</script>

<style scoped lang="less">
#my-nav-container {
  // position: fixed;
      height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    flex: 1;
    width: 50px;
    height: 50px;
    margin: 5px;
  }

  nav {
    flex: 1;
    .icon{
    }
    vertical-align: middle;
    a {
      width: 50px;
      height: 100%;
      margin: 10px 20px;
      padding-bottom: 10px;
      color: #000;
      font-size: 1rem;
      color: white;
      &:hover {
        border-bottom: 2px solid #13b9e2;
      }
    }
  .search {
    max-width: 220px !important;
      width: 100%;
    }
    .bot {
    // color: #13b9e2;
    //   border-bottom: 2px solid #13b9e2;
      caret-color: transparent;
    }
  }
}
.btnFlag{
  background-color: white;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  a{
    color: black !important;
  }
     .bot {
    color: #13b9e2 !important;
      border-bottom: 2px solid #13b9e2;
     }
}
  /deep/.el-input--prefix .el-input__inner{
        caret-color: black;
        
      }
/deep/.el-header{
  padding: 0px;
}
</style>