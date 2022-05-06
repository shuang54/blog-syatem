<template>
  <div id="my-nav-container">
    <div>
      <img src="@/assets/images/avataaars.png" />

    </div>
    <nav>
      <router-link active-class="bot" :to="{ path: '/#' }">首页</router-link>
      <router-link active-class="bot" :to="{ path: '/collect' }">收藏</router-link>
      <router-link active-class="bot" :to="{ path: '/pro' }">个人项目</router-link>
      <router-link active-class="bot" :to="{ path: '/about' }">关于</router-link>
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
  display: flex;
  align-items: center;

  img {
    flex: 1;
    width: 50px;
    height: 50px;
    margin-bottom: 13px;
  }

  nav {
    flex: 1;
    vertical-align: middle;

    a {
      width: 50px;
      height: 100%;
      padding: 10px 20px;
      color: #000;
      font-size: 1rem;

      &:hover {
        border-bottom: 2px solid #13b9e2;

      }
    }

    .bot {
      border-bottom: 2px solid #13b9e2;
    }
  }
}
</style>