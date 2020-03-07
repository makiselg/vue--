<template>
  <div>
    <van-nav-bar :title="$route.name" />
    <!-- 商品列表 -->
    <div class="box" v-if="goods.length > 0">
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
          class="card-goods__item"
          v-for="item in goods"
          :key="item.id"
          :name="item.id"
        >
          <van-card
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
          />
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="content" v-else @click="a">
      您的购物车空空如也
      <router-link to="/Home">去购物</router-link>
    </div>

    <!-- 底部导航 -->
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar,  } from "vant";
import { mapState  } from "vuex";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: this.$store.state.Cart.checkedGoods,
      // goods: [
      //   {
      //     id: "1",
      //     title: "进口香蕉",
      //     desc: "约250g，2根",
      //     price: 200,
      //     num: 1,
      //     thumb:
      //       "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
      //   },
      //   {
      //     id: "2",
      //     title: "陕西蜜梨",
      //     desc: "约600g",
      //     price: 690,
      //     num: 1,
      //     thumb:
      //       "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
      //   },
      //   {
      //     id: "3",
      //     title: "美国伽力果",
      //     desc: "约680g/3个",
      //     price: 2680,
      //     num: 1,
      //     thumb:
      //       "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
      //   }
      // ]
    };
  },
  computed: {
    ...mapState({
      goods:state => state.Cart.goodslists,
    }),
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0),0);
    },
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      this.$router.push("/Dingdan")
    },
    a(){
      window.console.log()
    }
  }
};
</script>

<style lang="scss" scoped>
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.van-submit-bar{
  bottom:48px;
}
.container{
  text-align: center;
}
.content{
  text-align: center;
  margin-top: 50px;
  a{
    width: 100px;
    height: 50px;
    display: block;
    background-color: orange;
    line-height: 50px;
    border-radius: 50px;
    margin: 0 auto;
    margin-top: 15px;
  }
}
</style>
