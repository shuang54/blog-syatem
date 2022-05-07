<template>
  <el-row id="about-container">
    <el-col :xl="13" :lg="15" :md="20" :sm="24" :xs="24">
      <el-card>
        <div class="about-me-header clearfix" slot="header">
          <span style="font-size:18px">个人资料</span>
        </div>
        <div>
          <div class="about-me-body">
            <div>
              <p class="body-p">简介</p>
              <div class="introduction">
                <img src="@/assets/logo.png" alt="">

                <p>欢迎来到FooGeoo博客网站，我是李爽。
                  <br>喜欢有趣的事物，喜欢各种新奇的技术。
                </p>


              </div>
            </div>
            <div>
              <p class="body-p">关于我</p>
              <ul class="">
                <li><img src="https://api.iowen.cn/favicon/get.php?url=https://mail.google.com" class="icon" alt="">
                  <a href="mailto:shuang.lixx@gmail.com"> shuang.lixx@gmail.com</a>
                </li>
                <li><img src="https://api.iowen.cn/favicon/get.php?url=www.github.com/favicon.ico" class="icon" alt="">
                  <a href="https://github.com/shuang54"> https://github.com/shuang54</a>
                </li>
                <li><img src="https://api.iowen.cn/favicon/get.php?url=www.gitee.com/favicon.ico" class="icon" alt="">
                  <a href="https://gitee.com/foochange"> https://gitee.com/foochange</a>
                </li>
              </ul>
            </div>
            <div class="item2 ">
              <p class="body-p">技能点</p>
              <div class="skillPoints">
                <span>JavaScript:</span>
                <el-progress :text-inside="false" :show-text="false" :stroke-width="10" :percentage="70">
                </el-progress>
              </div>
              <div class="skillPoints">
                <span>HTML/CSS:</span>
                <el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="90"
                  status="success">
                </el-progress>
              </div>
              <div class="skillPoints">
                <span>Vue框架:</span>
                <el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="88"
                  status="warning">
                </el-progress>
              </div>
              <div class="skillPoints">
                <span>php:</span>
                <el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="56"
                  status="warning"></el-progress>
              </div>
              <div class="skillPoints">
                <span>Java:</span>
                <el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="60"
                  status="success"></el-progress>
              </div>

              <div class="skillPoints">
                <span>Express框架:</span>
                <el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="50"
                  status="exception"></el-progress>
              </div>

              <div class="skillPoints">
                <span>SpringBoot:</span>
                <el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="50"
                  status="exception"></el-progress>
              </div>




            </div>
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="about-me-header clearfix" slot="header">
          <span style="font-size:18px">关于本站</span>
        </div>
        <p class="about-me-body">使用 Vue2+VueX+VueRouter+Element+axios 技术搭建
          <br>服务器使用CentOS7系统
        </p>
      </el-card>
    </el-col>
  </el-row>
</template>
<script >
export default {
  name: 'about',
  data: {

  },
  methods: {

  }
}
</script>
<style lang="less">
#about-container {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .el-col {

    // background-color: white;
    .el-card {
      margin-top: 50px;
    }

    .about-me-header {
      text-align: left;
    }

    .about-me-body {
      text-align: left;
      font-size: 18px;

      .body-p {
        width: 100px;
        padding: 0 0 5px 5px;
        border-bottom: 2px solid pink;
        color: pink;
        margin-top: 10px;
      }

      .introduction {
        display: flex;
        align-items: center;
        padding-left: 20px;
        padding-top: 5px;
        font-size: 14px;

        img {
          width: 50px;
          height: 50px;
        }

        p {
          margin-left: 30px;
          line-height: 30px;
        }
      }

      .item2 {
        .skillPoints {
          display: flex;
          align-items: center;
          padding-left: 20px;

          span {
            width: 80px;
            display: block;
            font-size: 12px;
          }
        }

        .el-progress {
          margin: 10px;
          width: 400px;
        }
      }



      ul {
        padding-left: 20px;
        font-size: 14px;

        li {
          line-height: 40px;

          .icon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>