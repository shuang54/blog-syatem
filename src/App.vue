<template>
  <div id="app">
    <MyNav></MyNav>
    <MyMain></MyMain>
  </div>
</template>
<script>
import MyMain from '@/components/Main/index.vue'
import MyNav from '@/components/MyNav'
export default {
  components: {
    MyMain,
    MyNav,
  },
}
</script>
<style scoped lang="less">
#app {
  background-color: #ccffcc;
  overflow: hidden;
}
</style>
