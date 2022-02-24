<template>
  <div id="article-list-container">
    <div class="list">
      <p class="title">{{ title }}</p>
      <span class="classification">{{ classification }}</span>
    </div>
    <time class="time">{{ createTime }}</time>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createTime: '2020-02-20',
      title: '标题',
      classification: '分类',
    }
  }

}
</script>

<style scoped lang="less">
#article-list-container {
  position: relative;
  padding: 10px 10px;
  width: 30%;
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
  .list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    text-align: center;
    line-height: 50px;
    .classification {
      text-align: center;
      line-height: 50px;
    }
  }
  .time {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #ccc;
    font-size: 0.8em;
  }
}
</style>