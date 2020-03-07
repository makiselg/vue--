<template>
    <div>
       <van-nav-bar
            title="订单提交"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="choosebox" @click="choose">
            <div class="container">
                <h2>{{site.name}}  {{site.tel}}</h2>
                <span>{{site.address}}</span>
                <span class="xg">修改地址</span>
            </div>
        </div>
      <van-card
            v-for="item in goods"
            :key="item.id"
            :name="item.id"
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
          />
          <van-button class="xdbutton" type="info" size="large" @click="onAdd">确认下订</van-button>
    </div>
    
</template>

<script>
import {  Card, SubmitBar, Toast } from "vant";
import { mapState  } from "vuex";
export default {
    data(){
        return{
          site:[]
            // checkedGoods: this.$store.state.Cart.checkedGoods,
        }
    },
    methods: {
        formatPrice(price) {
              return (price / 100).toFixed(2);
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        onAdd() {
          Toast('下订成功');
          this.$store.commit("order/addSite",{
            name:this.site.name,
            tel:this.site.tel,
            address:this.site.address,
            title:this.goods[0].title,
            thumb:this.goods[0].thumb,
          })
          this.$store.commit("Cart/del")
          this.$router.push("/Myorder");
        },
        choose(){
          this.$router.push("/Position");
        }

        
    },
     components: {
    [Card.name]: Card,
    // [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    // [CheckboxGroup.name]: CheckboxGroup
  },
  computed: {
    ...mapState({
      goods:state => state.Cart.goodslists,
    }),
  
  },
  created(){
    this.site = this.$store.state.site.getlist[0][this.$store.state.site.num-1];
    // this.disabledList = this.$store.state.site.getlist[1];
    // this.chosenAddressId = this.$store.state.site.num;
  }
}
</script>

<style lang="scss" scoped>
.xdbutton{
  position: absolute;
  bottom: 0;
}
.choosebox{
  margin-top: 5px;
  width: 100%;
  background-color: #fff;
  .container{
    padding: 0 10px;
    height: 70px;
    position: relative;
    // line-height: 70px;
    h2{
      padding: 10px 0 ;
      font-size: 20px;
      font-weight: bold;
    }
    span{

    }
    .xg{
      position: absolute;
      border: 1px solid#1989fa;
      border-radius: 5px;
      padding: 3px;
      right: 15px;
      top: 20px;
      color: #fff;
      background-color: #1989fa;
      font-size: 10px;
    }
  }
}
</style>