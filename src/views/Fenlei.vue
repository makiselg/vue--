<template>
  <div class="class">
    <div class="head">
      <van-nav-bar :title="$route.name" />
    </div>
    <div class="main">
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <!-- 分类列表 -->
          <li v-for="(item,index) in detialList" :key="index" @click="listClick(index)" :class="index===active?'active':''">{{item.list}}</li>
        </ul>
      </div>
      <div class="detialList_box">
        <!-- 分类详情列表 -->
        <ul class="detialList clearfix" v-for="(item,index) in detialList" v-show="index===active" :key="index">
          <li class="detial_title">{{item.list}}</li>
          <div class="lb_container">
            <img :src="item.ifimg" alt="">
          </div>
          <li v-for="(item,i) in item.detial" :key="i">
            <img :src="item.src" alt="">
            <p>{{item.text}}</p>
          </li>
        </ul>
        <div class="padding_color"></div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      detialList: [ //分类数据
        {
          list:'保健品',
          detial:[
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'爱他美'},
          ],
          ifimg:require('../assets/img/cda9aac8ada2107ee9ce8e75890c5414.jpg')
        },
        {
          list:'酒水',
          detial:[
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'酒水'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'酒水'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'酒水'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'酒水'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'酒水'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'酒水'},
          ],
          ifimg:require('../assets/img/3a0d871713b4acda36c43087185efc38.jpg')
          
        },
        {
          list:'茶叶',
          detial:[
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'茶叶'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'茶叶'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'茶叶'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'茶叶'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'茶叶'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'茶叶'},
          ],
          ifimg:require('../assets/img/fffda2636a12eeb4a81a255d6ded77f8.jpg')
        },
        {
          list:'农产品',
          detial:[
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'农产品'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'农产品'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'农产品'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'农产品'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'农产品'},
            {src:require('../assets/img/712a5f2a150f330013e190c8b1737243.png'),text:'农产品'},
          ],
          ifimg:require('../assets/img/cda9aac8ada2107ee9ce8e75890c5414.jpg')
        },
      ],
      active:0,
      detialtext:'保健品'
    };
  },
  methods: {
    listClick(index){ //显示隐藏分类详情
      this.active=index;
      this.detialtext=index;
    }
  },
  created() {
    // mockjs模拟数据
    // this.$http.get("/detial").then(res => {
    //   this.detialList=res.data.detials
    // });
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { //better-scroll初始化
        scrollY,  //竖向滚动
        click:true  //滚动区域可触发点击事件
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.class {
  height: 100%;
  .head {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    line-height: 44px;
    text-align: center;
    color: #fff;
    background-color: #ff8c3c;
    i {
      position: absolute;
      left: 10px;
    }
  }
  .main {
    display: flex;
    // height: 100%;
    .wrapper {
      overflow: hidden;
      width: 80px;
      // height: 100%;
      background-color: #fff;
      .content {
        padding-top: 40px;
        padding-bottom: 80px;
        li {
			    font-size: 14px;
          height: 40px;
          width: 80px;
          line-height: 40px;
          // padding-left: 10px;
          text-align: center;
          background-color: #fff;
          border: 1px solid #efeff4;
        }
        .active {
          background-color: #efeff4;
          border-left: 2px solid #ff0000;
        }
      }
    }
    .detialList_box {
      flex: 1;
      overflow: hidden;
      margin: 0 8px;
      background-color: #fff;
      .detialList {
        padding-bottom: 20px;
        div{
          width: 100%;
          img{
            width: 100%;
          }
          
        }
        li {
		    	font-size: 16px;
          float: left;
          width: 33.3333333%;
          text-align: center;
          margin-bottom: 10px;
          img {
            width: 100%;
          }
        }
        .detial_title{
        height: 40px;
        width: 100%;
        line-height: 40px;
        margin-top: 40px;
        background-color: #fff;
        text-align: center;
        margin-bottom: 0;
      }
      }
      .padding_color {
        background-color: #fff;
        height: 100%;
      }
    }
  }
}
</style>