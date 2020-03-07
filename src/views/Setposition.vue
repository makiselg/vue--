<template>
    <div>
        <van-nav-bar
            title="添加地址"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
       <van-address-edit
          ref="inp"
          :area-list="areaList"
          show-postal
          show-search-result
          :search-result="searchResult"
          :area-columns-placeholder="['请选择', '请选择', '请选择']"
          @save="onSave"
          @change-detail="onChangeDetail"
        />
        <div class="mod" v-if="flag">
          <van-button size="large" @click="modadd" class="btn">修改</van-button>
        </div>
    </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
let {mapState} =createNamespacedHelpers("site");

// let json = require("./dizhi.json");
// import dizhi from "@/assets/dizhi.js"
export default {
  data() {
    return {
      // dizhi:[],
      areaList:{},
      searchResult: []
    }
  },

  methods: {
    onClickLeft() {
      this.$store.commit("site/flag")
      this.$router.go(-1);
    },
    onSave(key) {
      this.$store.commit("site/add",{
        name:key.name,
        tel:key.tel,
        address:key.city + key.county + key.addressDetail,
        id:String(this.$store.state.site.getlist[0].length + 1)
      })
      this.$router.go("-1");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '珠吉路60号',
          address: '广州天河'
        }];
      } else {
        this.searchResult = [];
      }
    },
    modadd(){
      let key = this.$refs.inp.$data.data;
      this.$store.commit("site/mod",{
        name:key.name,
        tel:key.tel,
        address:key.city + key.county + key.addressDetail,
        id:String(this.modnum+1),
        select:false
      })
      this.$router.go("-1");
    },
    getData() {
                this.$axios.get('./dizhi.json').then(response => {
                    // console.log(response.data);
                    this.areaList  = response.data;
                    // console.log(this.dizhi);
                });
            }
  },
  created(){
    // this.areaList = this.dizhi
    // window.console.log(this.areaList)
  },
  mounted(){
    
    let data = this.$refs.inp.$data.data;
    if(this.flag){
      data.name = this.getlist[0][this.modnum].name;
      data.tel = this.getlist[0][this.modnum].tel;
      data.addressDetail = this.getlist[0][this.modnum].address;
      data.postalCode = this.getlist[0][this.modnum].postalCode || "00000";
    }
    this.getData();
  },
  computed:{
    ...mapState({
      modnum:state=>state.modnum,
      getlist:state=>state.getlist,
      flag:state=>state.flag,
    })
  }
}
</script>