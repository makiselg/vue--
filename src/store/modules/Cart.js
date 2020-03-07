export default {
  namespaced:true,
  state: {
    goodslists: [],
    checkedGoods: []
  },
  mutations: {
    add(state, obj) {
      // 如果添加商品id已经存在商品列表，不添加商品，添加数量
      let index = state.goodslists.findIndex(value => value.id == obj.id);
      if (index == -1) {
        state.goodslists.push(obj);
        state.checkedGoods = state.goodslists.map(value => value.id);
      } else {
        state.goodslists[index].num += 1;
      }
    },
    del(state){
      state.goodslists=[];
    }
  }
};
