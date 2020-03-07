<template>
  <div>
      <van-button class="roundbtn" icon="arrow-left" type="default" hairline round @click="pathgo"/>
      <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="(thumb,b) in goods.thumb" :key="b">
        <img :src="thumb" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        <div class="goods-information">{{ goods.information }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>
    <van-tabs sticky>
      <van-tab title="商品详情">
        <div class="goods-img" v-for="(xqimg,a) in goods.xqimg" :key="a">
          <img :src="xqimg" >
        </div>
      </van-tab>
      <van-tab title="用户评价">
        <div class="good-pl" v-for="(pinlun,c) in goods.pinlun" :key="c">
          <div class="pl-box">
            <div class="pl-head">
              <div class="pl-img">
                <img src="../assets/img/headimg.png" alt="">
              </div>
              <div class="pl-name"><span>{{pinlun.name}}</span></div>
            </div>
            <div class="pl-text">
              <span>{{pinlun.text}}</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="addCar">
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: {},
      ajaxgoodslists:[
          {
        title: '阿宽成都甜水面（270g*6碗/箱）',
        price: 4990,
        information:"面粗，酱浓，总之就是好吃！！！",
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.youpin.mi-img.com/800_pic/778f9024ffa7733a58aa312ae7bb8e30.png@base@tag=imgScale&F=webp?0_0',
          'https://img.youpin.mi-img.com/goods/1205ad60895e74cf8298959352c24058.jpg@base@tag=imgScale&F=webp&h=1270&w=1080?_s=ks3&w=1080&h=1270&crop=a_0_95_1080_1080'
        ],
        xqimg:[
          require('../assets/img/f0d8d79e5c3b10ffb63fb44787010e0f.webp'),
          require('../assets/img/ceccc1c2c657f721532e7fe0c7868b31.webp'),
          require('../assets/img/e17e9689d27dd827eb6bfd769d5de965.webp'),
          require('../assets/img/77610b8f08213133ffb0822edaea074f.webp'),
          require('../assets/img/84f1b1f78ce1230cb9efb0b04cb94580.webp'),
        ],
        pinlun:[
          {
            name:"abc",
            text:"好吃下次再买",
          },
          {
            name:"鹏鹏p",
            text:"不好吃,下次不买了",
          }
        ]
        
      },{
        title: 'AI变频空调Roaly(AI语音版) 白色 2匹',
        price: 499900,
        information:"AI智慧风|AI柔风科技|1级能效|直流变频2匹",
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.youpin.mi-img.com/shopmain/5a291588ee4b29f4de056c8fae1410d9.jpg@base@tag=imgScale&F=webp?w=1080&h=1080&w=1080&h=1270&crop=a_0_95_1080_1080',
          'https://img.youpin.mi-img.com/shopmain/d2fd5c6352309919f1efd8e0af190efa.jpg@base@tag=imgScale&F=webp?w=1080&h=1080&w=1080&h=1270&crop=a_0_95_1080_1080'
        ],
        xqimg:[
          require('../assets/img/ec01c4f0ac98c7062a2f054f451d9e38.webp'),
          require('../assets/img/13f4647ef0d61abfa6ec39d062937e44.webp'),
          require('../assets/img/693568729ed016f13e53477ec36109e2.webp'),
          require('../assets/img/c732bef17611294d9bf73882e34de710.webp'),
          require('../assets/img/cc8e91d86699afc039219aa0588f3d29.webp'),
        ],
        pinlun:[
          {
            name:"喜欢凉爽的人",
            text:"开了一会房间就凉爽了 很棒",
          },
          {
            name:"cba",
            text:"节电，清凉。",
          }
        ]
      },{
        title: '美国伽力果（约680g/3个）33',
        price: 2680,
        express: '免运费',
        remain: 19,
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      }
      ]
    };
  },
  
  methods: {
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push('Car');
    },
    sorry() {
    },
    addCar(){
        this.$store.commit("Cart/add",{
          id: this.$route.query.id,
          title: this.goods.title,
          desc: "约250g，2根",
          price: this.goods.price,
          num: 1,
          thumb:this.goods.thumb[0]
        });
    },
    pathgo(){
        this.$router.go(-1); //返回上一级
    }
  },
  created() {
      window.console.log(this.$route.query.id);
    //   ajax请求数据
     this.goods = this.ajaxgoodslists[this.$route.query.id];
  }
};
</script>
<style lang="scss" scoped >
.van-button--hairline.roundbtn{
    position: fixed;
    top:10px;
    left:10px;
    z-index: 999;
}
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
  .goods-img{
    width: 100%;
    img{
      width: 100%;
    }
  }
}
.good-pl{
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  .pl-box{
    padding: 14px 0;
    margin: 0 10px;
    .pl-head{
      height: 30px;
      display: flex;
      .pl-img{
        flex: 1;
        display: inline-block;
        img{
          width: 100%;
        }
      }
      .pl-name{
        margin-top: 6px;
        flex: 11;
        margin-left: 10px;
        display: inline-block;
        span{
        }
      }
    }
    .pl-text{
      margin-top: 5px;
      span{
        font-size: 14px;
      }
    }
  }
}
</style>