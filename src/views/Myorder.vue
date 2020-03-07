<template>
    <div>
        <van-nav-bar
            title="我的订单"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-tabs v-model="active">
            <van-tab title="我的订单">
                
                <van-card 
                v-for="(item,index) in goods"
                :key="index"
                :title="item.title"
                :thumb="item.thumb"
                >
                <div  slot="tags" class="item-box" v-for="(item,a) in site" :key="a">
                    <div>{{item.name}}</div>
                    <div>{{item.tel}}</div>
                    <div>{{item.address}}</div>
                </div>
                </van-card>
                <div class="item-box" v-for="(item,index) in list" :key="index">
                     <div class="container">
                         <div class="i-box">
                             <a class="img-box">
                                 <div class="b-img">
                                     <img :src="item.thumb" alt="">
                                 </div>
                             </a>
                             <div class="text-container">
                                 <div class="title-c">
                                     {{item.title}}
                                 </div>
                                 <div class="if-box">
                                     <div>{{item.name}}</div>
                                     <div>{{item.tel}}</div>
                                     <div>{{item.address}}</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
            </van-tab>
            <van-tab title="代发货">内容 2</van-tab>
            <van-tab title="已发货">内容 3</van-tab>
            <van-tab title="已完成">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
  data() {
    return {
        active:0,
        list:[],
    };
  },
  methods:{
      onClickLeft() {
            this.$router.go(-1);
        },
  },
  created(){
    this.list = this.$store.state.order.list;
  }
}
</script>

<style lang="scss" scoped>
    .item-box{
        margin-bottom: 5px;
        background-color: #f2f2f2;
        width: 100%;
        .container{
            padding: 10px 15px;
            .i-box{
                .img-box{
                    width: 80px;
                    height: 80px;
                    display: inline-block;
                    margin-right: 10px;
                    .b-img{
                        width: 100%;
                        height: 100%;
                        img{
                            width: 100%;
                        }
                    }
                }
                .text-container{
                    display: inline-block;
                    overflow: hidden;
                    .title-c{
                        font-size: 12px;
                        margin-bottom: 5px;
                    }
                    .if-box{
                        div{
                            font-size: 12px;
                            margin-bottom: 3px;
                        }
                    }
                }
            }
        }
    }
</style>