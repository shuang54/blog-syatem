<template>
  <div id="my-nav-container">
    <nav>
      <a href="#">首页</a>
      <img src="@/assets/images/avataaars.png" />
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
  position: relative;
  top: 10px;
  right: 0;
  background-color: pink;
  nav {
    vertical-align: middle;
    position: absolute;
    top: 0;
    right: 20%;
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