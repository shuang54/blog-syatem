<template>
  <div id="article-list-container">
    <div class="list">
      <router-link class="title" :to="{ name: 'article', params: { 'id': id } }">{{ title }}</router-link>
      <span class="classification">{{ categoryName }}</span>
    </div>
    <time class="time">{{ cTime }}</time>
  </div>
</template>

<script>
export default {
  props: ['title', 'createTime', 'categoryName', 'id'],
  data() {
    return {
    }
  },
  computed: {
    cTime() {
      return this.createTime.substring(0, 10)
    }
  }

}
</script>

<style scoped lang="less">
#article-list-container {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin: 0 auto;
  position: relative;
  padding: 10px 10px;
  width: 40%;
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
    .title {
      font-size: 2rem;
    }
    .classification {
      text-align: center;
      line-height: 50px;
      color: darkorange;
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