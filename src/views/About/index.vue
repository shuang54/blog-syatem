<template>
  <el-row id="about-container">
    <el-col :xl="13" :lg="15" :md="20" :sm="24" :xs="24">
      <el-card>
        <div class="about-me-header clearfix" slot="header">
          <span style="font-size:18px">个人资料</span>
        </div>
        <div>
          <div class="about-me-body">
            <ul>
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

        </div>
      </el-card>
      <el-card>
        <div class="about-me-header clearfix" slot="header">
          <span style="font-size:18px">关于本站</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
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

    background-color: white;

    .about-me-header {
      text-align: left;
    }

    .about-me-body {
      text-align: left;
      font-size: 18px;

      .icon {
        width: 30px;
        height: 30px;
        border-radius: 10px;
      }
    }
  }
}
</style>