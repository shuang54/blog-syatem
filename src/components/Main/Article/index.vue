<template>
  <div id="article-container">
    <div class="box">
      <div class="box-body">
        <mavon-editor
          class="md"
          :value="articleData"
          :subfield="false"
          :defaultOpen="'preview'"
          :toolbarsFlag="false"
          :editable="false"
          :scrollStyle="true"
          :ishljs="true"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Article',
  components: {
  },
  data() {
    return {
      articleData: '# 标题',
    }
  }
}
</script>

<style scoped lang="less">
#article-container {
  margin: 0 auto;
  height: 100%;
  color: #3b3b3b;
  padding: 10px 30px;
  .box-body {
    .md {
      background-color: white;

      width: 100%;
      height: 100%;
    }
  }
}
</style>