<template>
  <div>
    <router-view />
    <div class="box">
        <!-- 头部 -->
        <div class="header">
            <div class="header-box">
                <div class="logo">
                    <img src="../assets/img/navi_title_v4.png" alt="">
                </div>
                <router-link class="search-box" tag="div" to="/Search">
                    <img src="../assets/img/3331492_2093810242.png" alt="">
                    <span>搜一搜</span>
                </router-link>
                <div class="w-box"></div>
            </div>
        </div>
        <!-- 轮播 -->
        <div class="lb-box">
            <div class="lb-container">
                <van-swipe :autoplay="3000" indicator-color="white">
                  <van-swipe-item>
                    <li><img src="../assets/img/3a0d871713b4acda36c43087185efc38.jpg" alt=""></li>
                  </van-swipe-item>
                  <van-swipe-item>
                    <li><img src="../assets/img/cda9aac8ada2107ee9ce8e75890c5414.jpg" alt=""></li>
                  </van-swipe-item>
                  <van-swipe-item>
                    <li><img src="../assets/img/fffda2636a12eeb4a81a255d6ded77f8.jpg" alt=""></li>
                  </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <!-- 导航 -->
        <!-- <div class="dh-box">
            <div class="dh-container">
                    <div class="dh-item">
                        <div class="dh-img">
                        <img src="../assets/img/3fc26de3e9c91dba0b470ae0dfd668d1.png" alt=""></div>
                        <span>每日新品</span>
                    </div>
                    <div class="dh-item">
                        <div class="dh-img">
                          <img src="../assets/img/0301aee7e1d9d33c8b6db6481c0aea74.png" alt="">
                        </div>
                        <span>小米众筹</span>
                    </div>
                    <div class="dh-item">
                        <div class="dh-img">
                          <img src="../assets/img/994c5e95f79a7874a73e6935832bb0e4.png" alt="">
                        </div>
                        <span>限时抢购</span>
                    </div>
                    <div class="dh-item">
                        <div class="dh-img">
                          <img src="../assets/img/e3a7c62f0546d492017e09e3e5d5e3ea.png" alt="">
                        </div>
                        <span>热销榜单</span>
                    </div>
                    <div class="dh-item">
                        <div class="dh-img">
                          <img src="../assets/img/f232f1640b3bb2b47e32d82da35d5a04.png" alt="">
                        </div>
                        <span>小米自营</span>
                    </div>
            </div>
        </div> -->
        <daohang />
        <!-- 广告 -->
        <div class="gg-box">
            <div class="gg-container">
                <div class="gg-img"></div>
            </div>
        </div>
        <!-- 众筹 -->
        <div class="zc-box">
            <div class="zc-container">
                <div class="zc-header">
                    <span class="title">小米有品众筹</span>
                    <div class="zc-w"></div>
                    <div class="zc-r">
                        <span>更多</span>
                        <img src="../assets/img/下载.png" alt="">
                    </div>
                </div>
                <div class="zc-item">
                    <div class="item-top">
                        <div class="item-tm">
                            <div class="tm-l">
                                <span class="tm-title">双刀头毛发修剪器</span>
                                <span class="tm-text">触控屏显，安全亲肤，超长续航，一机双刀多用途（鼻毛、眉毛等）</span>
                                <div class="price">
                                    <span class="rmb">¥</span>
                                    <span class="number">49.9</span>
                                </div>
                            </div>
                            <div class="tm-r">
                                <div class="tm-box">
                                    <div class="box-img">
                                        <img src="../assets/img/fab623b6cbecf23e5603d0cb7e30db79.webp" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item-num">
                            <div class="bottom-num">
                                <div class="num-left">
                                    <span class="num1">112203</span>
                                    <span class="num2"> / 2000人支持</span>
                                    <span class="num3">爆</span>
                                </div>
                                <div class="num-right">
                                    <span>5610%</span>
                                </div>
                            </div>
                            <div class="bottom-line">
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <div class="bottom-box">
                            <div class="box-t">
                                <span class="t-text">指静脉识别私密箱</span>
                                <div class="t-img-box">
                                    <div class="l-num">
                                        <span class="rmb">¥</span>
                                        <span class="price-b">599</span>
                                    </div>
                                    <div class="r-img">
                                        <div class="img-box">
                                            <div class="box">
                                                <img src="../assets/img/e857072cfa13cdc623acfe52b7d4a786.webp" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-b">
                                <div class="b-b-t">
                                    <div class="b-b-t-l">
                                        <span class="num1">1296</span>
                                        <span class="num2"> 人支持</span>
                                        <span class="num3">热</span>
                                    </div>
                                    <div class="b-b-t-r">
                                        <span>256%</span>
                                    </div>
                                </div>
                                <div class="b-b-b">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-box">
                                <div class="box-t">
                                    <span class="t-text">指静脉识别私密箱</span>
                                    <div class="t-img-box">
                                        <div class="l-num">
                                            <span class="rmb">¥</span>
                                            <span class="price-b">599</span>
                                        </div>
                                        <div class="r-img">
                                            <div class="img-box">
                                                <div class="box">
                                                    <img src="../assets/img/e857072cfa13cdc623acfe52b7d4a786.webp" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-b">
                                    <div class="b-b-t">
                                        <div class="b-b-t-l">
                                            <span class="num1">1296</span>
                                            <span class="num2"> 人支持</span>
                                            <span class="num3">热</span>
                                        </div>
                                        <div class="b-b-t-r">
                                            <span>256%</span>
                                        </div>
                                    </div>
                                    <div class="b-b-b">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 推荐 -->
        
        <tuijian />
        <!-- 底部 -->
        <div class="yp-bottom">
            <div class="yb-b-container">
                <div class="line"></div>
                <span>更多好物，敬请期待</span>
                <div class="line"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import daohang from "@/components/Home/daohang.vue";
import tuijian from "@/components/Home/tuijian.vue";
import "../assets/css/shop.css"
export default {
    data(){
        return{}
    },
    components: {
    daohang,
    tuijian
  },
};
</script>
