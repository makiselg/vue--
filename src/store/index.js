import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Home from "./modules/Home.js";
import Cart from "./modules/Cart.js";
import site from "./modules/site.js";
import order from "./modules/order.js";

export default new Vuex.Store({
  state: {
    oldurl: "/home", //返回路由上一级
  },
  getters:{
  },
  mutations: {},
  actions: {},
  modules: {
    Home,
    Cart,
    site,
    order
  }
});