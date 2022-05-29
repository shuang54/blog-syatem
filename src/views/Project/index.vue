<template>
  <div class="container" id="container">
    <div class="main" id="mainWrap">
      <div id="mainContent">
        <!-- 每个大item -->
        <div class="fe" id="item">
          <!-- 标题 -->
          <!-- <div class="sub-category">
            <div>
              <i class="iconfont icon-zuzhi"></i>
              标题
            </div>
          </div> -->
          <div class="item-a">
            <!--  每个item -->
            <a target="_blank" href="https://github.com/shuang54/new-tab">
              <div :style="{
                backgroundImage: 'url(' + 'http://niu.foogeoo.ltd/blog/%E9%A6%96%E9%A1%B52.png' + ')', backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }" class="item">
                <div class="logo">
                  new-tab
                </div>
                <div class="desc">
                  一款个性化的个性化的浏览器起始页插件
                </div>
              </div>
            </a>
            <a target="_blank" href="https://gitee.com/foochange/blog-system">
              <div
              :style="{
                backgroundImage: 'url(' + 'http://niu.foogeoo.ltd/blog/%E5%8D%9A%E5%AE%A2%E5%89%8D%E5%8F%B0.png' + ')', backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }" 
              class="item">
                <div class="logo">
                  blog-system
                </div>

                <div class="desc">
                  个人博客前台界面
                </div>
              </div>
            </a>
            <a target="_blank" href="https://gitee.com/foochange/blog-admin">
              <div
              :style="{
                backgroundImage: 'url(' + 'http://niu.foogeoo.ltd/blog/%E5%8D%9A%E5%AE%A2%E5%90%8E%E5%8F%B0.png' + ')', backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }" 
              class="item">
                <div class="logo">
                  blog-admin
                </div>

                <div class="desc">
                  个人博客后台管理界面
                </div>
              </div>
            </a>
             <a target="_blank" href="https://gitee.com/foochange/tic-toc-toe">
              <div
              :style="{
                backgroundImage: 'url(' + 'http://niu.foogeoo.ltd/blog/%E4%BA%95%E5%AD%97%E6%B8%B8%E6%88%8F.png' + ')', backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }" 
              class="item">
                <div class="logo">
                  ticTocToe
                </div>

                <div class="desc">
                  井字游戏
                </div>
              </div>
            </a>
             <a target="_blank" href="https://gitee.com/foochange/greedy-snake">
              <div
              :style="{
                backgroundImage: 'url(' + 'http://niu.foogeoo.ltd/blog/%E8%B4%AA%E5%90%83%E8%9B%87.png' + ')', backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }" 
              class="item">
                <div class="logo">
                  GreedySnake
                </div>

                <div class="desc">
                  贪吃蛇
                </div>
              </div>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'project',
  data() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  -webkit-box-flex: 1
}

@media (min-width:481px) {


  .main #mainContent {
    max-width: 1200px;
    margin: 0 auto;
  margin-top: 35px;
    height: calc(100vh - 95px);
  }

  .main .fe .item {
    transition-duration: .5s;
  }


  .main .fe .item:hover {
    backdrop-filter: blur(10px);
    transform: scale(1.1);
    box-shadow: 0 26px 40px -24px rgba(0, 36, 100, .3);
    -webkit-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, .3);
    -moz-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, .3);
    transition: all .3s ease
  }
}


.container .main {
  display: -webkit-box;
  display: flex;
  position: relative;
  -webkit-box-orient: vertical;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: 0px;
}


.container .main .fe {
  overflow: hidden;
  // background: #fff;
  margin: 20px 30px;
  padding-bottom: 20px
}

.container .main .fe .sub-category>div {
  padding: 12px 0 0 2.1%;
  font-size: 18px
}

.container .main .fe .sub-category>div i {
  font-size: 18px
}

.container .main .fe:last-child {
  margin-bottom: 35px
}

.container .main .fe .item {
  border-radius: 6px;
  background: #fff;
  padding: 10px;
  width: 20%;
  min-width: 200px;
  margin: 22px 0 0 2.1%;
  float: left;
  overflow: hidden;
  border: 1px solid #e4ecf3;
  box-shadow: 1px 2px 3px #f2f6f8
}

.container .main .fe .item .title {
  font-size: 14px;
  font-weight: 700;
  margin: 10px;
  margin-left: 50px;
  color: #3273dc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 .1rem
}

.container .main .fe .item .desc {
  color: #3eaf7c;
  margin-top: 10px;
    font-size: 15px;
  padding-top: 10px;
  height: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical
}

.container .main .fe .logo {
    color: #f58c78;

  height: 40px;
  position: relative;
  font-size: 29px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 40px;
  text-align: center;
}

.container .main .fe .logo a {
  display: inline-block;
  width: 100%
}

.container .main .fe .logo a:active,
.container .main .fe .logo a:focus,
.container .main .fe .logo a:hover,
.container .main .fe .logo a:visited {
  background: inherit
}

.container .main .fe .logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle
}

.container .footer {
  width: 100%;
  bottom: 0;
  line-height: 45px;
  background: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, .2)
}

.container .footer .recommend,
.container .footer p {
  display: none
}

.container .footer .copyright {
  margin-left: 30px;
  color: #949494;
  font-size: 12px
}

.container .footer .copyright a {
  text-decoration: none;
  color: #3a85ff
}

@media (max-width:480px) {

  .container .main {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    margin: 0;
    padding-top: 40px
  }

  .container .main .fe {
    margin: 16px 3% 0;
    overflow: hidden
  }

  .container .main .fe .sub-category>div {
    padding-left: 3%
  }

  .container .main .fe .item {
    width: 39.5%;
    float: left;
    min-width: 100px;
    margin-left: 3%;
    margin-top: 12px
  }

  .container .main .fe .item .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 .1rem;
    margin: .2rem auto
  }

  .container .main .fe .item .desc {
    margin-bottom: 10px;
    margin-top: 5px;
    margin-left: 5px;
    height: .58rem;
    font-size: 18px;
    line-height: 16px;
  }

  .container .main .fe:last-child {
    margin-bottom: 16px
  }

}

@media (min-width:380px) and (max-width:480px) {
  .container .main .fe .item .desc {
    height: .52rem
  }
}

@media (min-width:481px) {
  .container .main .fe .item {
    width: 80%
  }
}

@media (min-width:768px) {
  .container .main .fe .item {
    width: 43%
  }
}

@media (min-width:1040px) {
  .container .main .fe .item {
    width: 28%
  }
}

@media (min-width:1200px) {
  .container .main .fe .item {
    width: 45% !important;
  }
}
</style>