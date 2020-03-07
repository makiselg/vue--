<template>
  <div>
    <router-view />
    <div class="box">
      <div class="header-box">
        <div class="container">
          <router-link class="head-img" tag="div" to="/Login">
            <div class="img-box">
              <img :src="info.img" alt="">
            </div>
          </router-link>
          <div class="alter-text">
            <span>{{info.name}}</span>
          </div>
          <div class="icon">
             <img src="../assets/img/device_shop_right_arrow.png" alt="">
          </div>
        </div>
      </div>
      <div class="order-box" @click="orderpage">
        <div class="container">
          <div class="order-top">
            <div class="top-box">
              <div class="l-box">
                <span>我的订单</span>
              </div>
              <div class="r-box">
                <div class="icon">
                  <img src="../assets/img/device_shop_right_arrow.png" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="order-bottom">
            <div class="bottom-box">
              <div class="box-img">
                <img src="../assets/img/personal_icon_paid.png" alt="">
              </div>
              <span class="box-text">我的订单</span>
            </div>
            <div class="bottom-box">
              <div class="box-img">
                <img src="../assets/img/personal_icon_receipt.png" alt="">
              </div>
              <span class="box-text">待收货</span>
            </div>
            <div class="bottom-box">
              <div class="box-img">
                <img src="../assets/img/personal_icon_received_goods.png" alt="">
              </div>
              <span class="box-text">待评价</span>
            </div>
            <div class="bottom-box">
              <div class="box-img">
                <img src="../assets/img/personal_icon_return_goods.png" alt="">
              </div>
              <span class="box-text">退款/售后</span>
            </div>
          </div>
        </div>
      </div>
      <div class="gif-box">
        <div class="container">
          <div class="img-box">
            <img src="../assets/img/90337d93e628939c590fbe1a1cf338bf.gif" alt="">
          </div>
        </div>
      </div>
      <div class="orther-box">
        <div class="container">
          <div class="item-box">
            <div class="item-img">
              <div class="img-box">
                <img src="../assets/img/personal_icon_assets.png" alt="">
              </div>
            </div>
            <div class="item-text">
              <div class="text">我的资产</div>
            </div>
            <div class="item-icon">
              <div class="img-box">
                <img src="../assets/img/device_shop_right_arrow.png" alt="">
              </div>
            </div>
            <div class="item-tips">
              <div class="text">优惠券/积分</div>
            </div>
          </div>
          <div class="item-box">
            <div class="item-img">
              <div class="img-box">
                <img src="../assets/img/pin_logo.jpg" alt="">
              </div>
            </div>
            <div class="item-text">
              <div class="text">拼团</div>
            </div>
            <div class="item-icon">
              <div class="img-box">
                <img src="../assets/img/device_shop_right_arrow.png" alt="">
              </div>
            </div>
          </div>
          <div class="item-box">
            <div class="item-img">
              <div class="img-box">
                <img src="../assets/img/personal_icon_collection.png" alt="">
              </div>
            </div>
            <div class="item-text">
              <div class="text">我的收藏</div>
            </div>
            <div class="item-icon">
              <div class="img-box">
                <img src="../assets/img/device_shop_right_arrow.png" alt="">
              </div>
            </div>
          </div>
          <router-link class="item-box" tag="div" to="/Position">
            <div class="item-img">
              <div class="img-box">
                <img src="../assets/img/personal_icon_address.png" alt="">
              </div>
            </div>
            <div class="item-text" >
              <div class="text">地址管理</div>
            </div>
            <div class="item-icon">
              <div class="img-box">
                <img src="../assets/img/device_shop_right_arrow.png" alt="">
              </div>
            </div>
          </router-link>
          <div class="item-box">
            <div class="item-img">
              <div class="img-box">
                <img src="../assets/img/mijiashop_icon_more_qualifi.png" alt="">
              </div>
            </div>
            <div class="item-text">
              <div class="text">资质证照</div>
            </div>
            <div class="item-icon">
              <div class="img-box">
                <img src="../assets/img/device_shop_right_arrow.png" alt="">
              </div>
            </div>
          </div>
          <div class="item-box">
            <div class="item-img">
              <div class="img-box">
                <img src="../assets/img/mijiashop_icon_more_protocol.png" alt="">
              </div>
            </div>
            <div class="item-text">
              <div class="text">协议规则</div>
            </div>
            <div class="item-icon">
              <div class="img-box">
                <img src="../assets/img/device_shop_right_arrow.png" alt="">
              </div>
            </div>
          </div>
          <div class="item-box">
            <div class="item-img">
              <div class="img-box">
                <img src="../assets/img/personal_icon_feedback.png" alt="">
              </div>
            </div>
            <div class="item-text">
              <div class="text">帮助与反馈</div>
            </div>
            <div class="item-icon">
              <div class="img-box">
                <img src="../assets/img/device_shop_right_arrow.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// axios.defaults.baseURL = "http://192.168.54.19:3000";
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      info:{}
    }
  },
  methods:{
    orderpage(){
      this.$router.push("/Myorder");
    }
  },
  created() {
    window.console.log("登录")
    if(!localStorage.login){
      this.$router.push("/Login");
    }else{

      this.$axios.get("http://192.168.54.28:3000/getdata",{
        params:{
          token:localStorage.login
        }
      }).then((req)=>{
        console.log(req);
        this.info = req.data.result
      })

    }
  },
};
</script>

<style lang="scss" scoped>
  html,body{
    margin: 0;
    padding: 0;
  }
  .box{
    background-color: #fff;
    width: 100%;
    .header-box{
      width: 100%;
      background-color: brown;
      .container{
        width: 100%;
        height: 100px;
        // line-height: 100px;
        display: flex;
        .head-img{
          flex: 2;
          padding-left: 25px;
          height: 100%;
          position: relative;
          .img-box{
            position: absolute;
            top: 20px;
            left: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50px;
            overflow: hidden;
            img{
              width: 100%;
            }
          }
        }
        .alter-text{
          flex: 8;
          padding-left: 20px;
          height: 100%;
          line-height: 100px;
          color: #fff;
          span{
            font-size: 20px;
            font-weight: 200;
          }
        }
        .icon{
          flex: 2;
          line-height: 100px;
          img{
            width: 18px;
            height: 18px;
          }
        }
      }
    }
    .order-box{
      margin-top: 5px;
      width: 100%;
      .container{
        width: 100%;
        .order-top{
          padding: 0 15px; 
          border-bottom: 1px solid #3f3b3b2a;
          .top-box{
            width: 100%;
            height: 40px;
            .l-box{
              float: left;
              line-height: 40px;
            }
            .r-box{
              float: right;
              line-height: 40px;
              .icon{
                  width: 15px;
                  height: 15px;
                  line-height: 40px;
                  img{
                    width: 100%;
                }
              }
            }
          }
        }
        .order-bottom{
          display: flex;
          .bottom-box{
            flex: 1;
            height: 69px;
            line-height: 69px;
            text-align: center;
            .box-img{
              width: 23px;
              height: 23px;
              margin: 0 auto;
              img{
                width: 100%;
              }
            }
            .box-text{
                
                font-size: 12px;
            }
          }
        }
      }
    }
    .gif-box{
      width: 100%;
      background-color: #f2f2f2;
      .container{
        margin-top: 5px;
        .img-box{
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
    }
    .orther-box{
      width: 100%;
      .container{
        width: 100%;
        .item-box{
          width: 100%;
          border-bottom: 1px solid #f2f2f2;
          height: 50px;
          line-height: 50px;
          .item-img{
            padding-left: 15px;
            .img-box{
              float: left;
              margin-top: 5px;
              width: 38px;
              height: 38px;
              img{
                width: 100%;
              }
            }
            
          }
          .item-text{
            float: left;
            .text{
              color: #312b2bf8;
            }
          }
          .item-tips{
            float: right;
            .text{
              color: rgb(153, 153, 153);
            }
          }
          .item-icon{
            float: right;
            padding-right: 15px;
            .img-box{
              margin-top: 3px;
              width: 15px;
              height: 15px;
              img{
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>
