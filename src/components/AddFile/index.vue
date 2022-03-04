<template>
  <div id="add-file-container">
    <div class="file-name">
      <el-select v-model="categoryId" placeholder="请选择文章分类">
        <el-option
          v-for="item in category"
          :key="item.id"
          :label="item.categoryName"
          :value="item.id"
        ></el-option>
      </el-select>
      <el-input v-model="title" placeholder="请输入标题"></el-input>
      <Button type="button" class="btn" @click="add">提交</Button>
    </div>
    <div class="box">
      <mavon-editor
        v-model="markdown"
        ref="md"
        @change="change"
        @imgAdd="$imgAdd"
        style="min-height: 800px"
      />
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import { mapState } from 'vuex';
export default {
  components: {
    // mavonEditor,//mavon-editor组件
  },
  data() {
    return {
      html: '',    // 转成的html
      markdown: '', // 输入的markdown
      title: '',//文章名
      categoryId: '',
    }
  },
  methods: {
    change(value, render) {
      //实时获取转成html的数据
      this.html = render
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
    // 添加文章
    async add() {
      let { markdown, title, categoryId } = this
      let data = { markdown, title, categoryId }
      const result = await this.$store.dispatch('AddArticle', data)
      if (result == 200) {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });
      } else {
        this.$message({
          type: 'info',
          message: '添加失败'
        });
      }
    }
  },
  computed: {
    ...mapState({
      category: state => state.Article.category
    })
  },
  created() {
    this.$store.dispatch('getCategory')
  }
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
      width: 156px;
      height: 40px;
      border-radius: 5px;
      line-height: 40px;
    }
  }
  .box {
  }
}
</style>