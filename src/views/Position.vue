<template>
    <div>
      <van-nav-bar
  :title="$route.name"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  @add="add"
  @edit="edit"
  @click-item="click"
  @click.stop

/>

    </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [],
      disabledList:[]
    }
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    add() {
      this.$router.push("/Setposition");
    },
    edit(item,index) {
      this.$store.commit("site/modAdd",index);
      this.$router.push("/Setposition");
    },
    click(){
      this.$store.commit("site/addNum",this.chosenAddressId)
    }
  },
  created(){
    this.list = this.$store.state.site.getlist[0];
    this.disabledList = this.$store.state.site.getlist[1];
    this.chosenAddressId = this.$store.state.site.num;
  }
}
</script>