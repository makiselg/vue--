<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" v-show="showactiove">
      <van-tabbar-item to="/Home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/Fenlei" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/Car" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/My" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      showactiove: false
    };
  },
  created() {
    this.$router.push("/");
  },
  watch: {
    "$route.path": function(newValue, oldValue) {
      if (newValue == "/Gg" || newValue == "/" || newValue == "/Search" || newValue == "/goods" || newValue == "/Setposition" || newValue == "/Dingdan") {
        this.showactiove = false;
      } else {
        this.showactiove = true;
      }
      window.console.log(newValue);
      window.console.log(oldValue);
    }
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  padding: 0px;
  background: #ffffff;
}
#app {
  // margin-bottom: 50px;
}
</style>
