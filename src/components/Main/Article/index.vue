<template>
  <div id="article-container">
    <div class="box">
      <div class="box-body">
        <pre class="md">

          # 上线前测试
          # 网页正式上线
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
}
</script>

<style scoped lang="less">
#article-container {
  .box-body {
    .md {
      background-color: white;

      width: 100%;
      height: 100%;
    }
  }
}
</style>