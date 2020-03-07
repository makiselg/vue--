
<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/navi_title_v4.png" alt="" />
        </div>
        <!-- <div class="swiper-slide">
          <img src="../assets/img/576fde039245d68814b1cdd9abc27d1ed31b24aa.gif" alt="" />
          <h3 class="animated fadeInUp" v-show="flag">有品<br>
                    享受优质购物体验</h3>
        </div> -->
        <div class="swiper-slide">
          <img src="../assets/img/timg (3).jpg" alt="" />
           <h3 class="animated fadeInUp" v-show="flag">
                    家电 食品 衣服 <br>
                    尽在有品</h3>
          <button class="animated fadeInUp" v-show="flag" @click="go">
            立即体验
          </button>
        </div>
      </div>
      <!-- class="animated zoomIn" v-show="flag" -->
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    go() {
      localStorage.one = true;
      this.$router.push("/home");
    }
  },
  created() {
    if (localStorage.one) {
      this.$router.push("/Gg");
    } else {
      localStorage.one = true;
    }
  },
  mounted() {
    let _this = this;
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        slideChangeTransitionStart: function() {
          _this.flag = false;
        },
        slideChangeTransitionEnd: function() {
          _this.flag = true;
        }
      }
    });
  }
};
</script>


<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  display: block;
  img {
    width: 100%;
    margin-top: 150px;
  }
  h3 {
    margin-top: 25px;
    color: #808080;
  }
}
// .swiper-wrapper img {
//   margin: 0;
//   width: 100%;
//   height: 100%;
// }
button {
  border-radius: 10px;
  opacity: 0.5;
  width: 200px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #c8efd4;
  background: #fff;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 30px;
  margin: 0 auto;
}
</style>
