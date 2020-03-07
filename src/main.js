import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);
import { AddressList } from 'vant';
Vue.use(AddressList);
import { NavBar } from 'vant';
Vue.use(NavBar);
import Cube from "cube-ui";
Vue.use(Cube);

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

// npm i vant -S
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);


// npm i animate.css -S
import "animate.css";
import "swiper/dist/css/swiper.css";
// npm i swiper@4.5.0 -S

// npm i axios -S
// npm i vue-jsonp -S
import axios from "axios";
// axios.defaults.baseURL = "http://192.168.54.19:3000";
Vue.prototype.$axios = axios;
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);
import "./assets/font-icon/iconfont.css"

// import "./assets/css/shop.css"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
