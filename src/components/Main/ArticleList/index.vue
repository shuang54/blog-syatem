<template>
  <div id="article-list-container">
    <div v-for="item in articleList" :key="item.id" class="list-box">
      <div class="list">
        <router-link
          class="title"
          :to="{ name: 'article', params: { 'id': item.id } }"
        >{{ item.title }}</router-link>
        <span class="classification">{{ item.categoryName }}</span>
      </div>
      <time class="time">{{ cTime(item.createTime) }}</time>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articleList'],
  data() {
    return {
    }
  },
  computed: {
    cTime() {
      return function (time) {
        return time.substring(0, 10)
      }
    }
  },
  methods: {

  },
  created() {
  }

}
</script>

<style scoped lang="less">
#article-list-container {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  margin: 0 auto;
  position: relative;
  width: 50%;
  @media all and(max-width:1500px) {
    width: 70%;
  }
  @media all and(max-width:1000px) {
    width: 100%;
  }
  .list-box {
    margin: 0 auto;
    position: relative;
    padding: 10px 10px;
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
        font-size: 1.8rem;
      }
      a:hover {
        color: cornflowerblue;
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
}
</style>