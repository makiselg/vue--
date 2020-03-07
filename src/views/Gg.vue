<template>
  <div>
    <div class="Gg-box">
      <span class="Gg" style="font-size:50px;">{{ num }}</span>
      <img src="../assets/img/timg (1).jpg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 3,
      cleardata: null
    };
  },
  created() {
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/Home");
      } else {
        this.num--;
      }
    }, 1000);
  },
  beforeDestroy() {
    //  页面跳转先销毁在跳转
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss">
.Gg-box {
  // max-width: 340px;
  font-size: 0;
  width: 100%;
  position: relative;
}
.Gg-box img {
  width: 100%;
}
.Gg{
  position: absolute;
  right: 10px;
  top: 0;
  color: #fff;
}
</style>
