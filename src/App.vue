<template>
  <div id="app">
    <MyNav></MyNav>
    <Main></Main>
  </div>
</template>
<script>
import Main from '@/components/Main/index.vue'
import MyNav from '@/components/MyNav'
export default {
  components: {
    Main,
    MyNav,
  },
}
</script>
<style scoped lang="less">
#app {
  background-color: #ccffcc;
}
</style>
