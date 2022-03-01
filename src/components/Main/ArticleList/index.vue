<template>
  <div id="article-list-container">
    <div class="list">
      <router-link class="title" :to="{ name: 'article', params: { 'id': id } }">{{ title }}</router-link>
      <span class="classification">{{ category }}</span>
    </div>
    <time class="time">{{ createTime }}</time>
  </div>
</template>

<script>
export default {
  props: ['title', 'createTime', 'category', 'id'],
  data() {
    return {
    }
  }

}
</script>

<style scoped lang="less">
#article-list-container {
  margin: 0 auto;
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