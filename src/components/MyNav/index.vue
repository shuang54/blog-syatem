<template>
  <div id="my-nav-container">
    <nav>
      <img src="@/assets/images/avataaars.png" />
      <router-link :to="{ path: '/' }">首页</router-link>
      <router-link :to="{ path: '/addarticle' }">添加文章</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MyNav',
}
</script>

<style scoped lang="less">
#my-nav-container {
  padding: 5px 20px;
  nav {
    vertical-align: middle;
    img {
      width: 50px;
      height: 50px;
      margin-bottom: 13px;
    }
    a {
      width: 50px;
      height: 100%;
      padding: 10px 20px;
      color: #000;
      font-size: 1rem;
    }
  }
}
</style>