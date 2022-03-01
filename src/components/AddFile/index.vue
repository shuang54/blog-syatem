<template>
  <div id="add-file-container">
    <div class="file-name">
      <h2>filename</h2>
      <input class="btn" type="button" value="提交" />
    </div>
    <div class="box">
      <mavon-editor
        v-model="content"
        ref="md"
        @change="change"
        @imgAdd="$imgAdd"
        style="min-height: 800px"
      />
    </div>
  </div>
</template>

<script>

export default {
  components: {
    // mavonEditor,//mavon-editor组件
  },
  data() {
    return {
      content: '', // 输入的markdown
      html: '',    // 转成的html
    }
  },
  methods: {
    change(value, render) {
      //实时获取转成html的数据
      this.html = render
      console.log(this.html)
    },
    // 将图片上传到服务器，返回地址替换到md中 
    $imgAdd(pos, $file) {
      let formdata = new FormData();
      formdata.append('image', $file);
      this.$ajax({
        url: 'http://local.basic.com/index.php?r=markdown/upload',
        method: 'post',
        data: formdata,
      }).then((data) => {
        //将返回的url替换到文本原位置
        if (data.data.success == 1) {
          this.$refs.md.$img2Url(pos, data.data.url);
          console.log(data.data.url)
        }

      })
    },
  },
}
</script>

<style scoped lang="less">
#add-file-container {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  .file-name {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ccc;
    line-height: 60px;
    margin-bottom: 10px;
    .btn {
      margin: 10px;
      width: 80px;
      height: 40px;
      border-radius: 5px;
      line-height: 40px;
    }
  }
  .box {
  }
}
</style>