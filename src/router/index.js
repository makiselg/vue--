import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Swiper from "../views/Swiper.vue";
import Car from "../views/Car.vue";
import My from "../views/My.vue";
import Fenlei from "../views/Fenlei.vue";
import Gg from "../views/Gg.vue";
import Search from "../views/Search.vue";
import Goods from "../views/Goods.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Position from "../views/Position.vue";
import Setposition from "../views/Setposition.vue";
import Dingdan from "../views/Dingdan.vue";
import Myorder from "../views/Myorder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name: "Swiper",
    component: Swiper
  },
  {
    path: "/Car",
    name: "购物车",
    component: Car
  },
  {
    path: "/My",
    name: "我的主页",
    component: My
  },
  {
    path: "/Fenlei",
    name: "分类页",
    component: Fenlei
  },
  {
    path: "/Gg",
    name: "Gg",
    component: Gg
  },
  {
    path:"/Search",
    name:"搜索",
    component:Search
  },
  {
    path:"/goods",
    name:"商品",
    component:Goods
  },
  {
    path:"/Login",
    name:"登陆",
    component:Login
  },
  {
    path: "/Register",
    name: "注册",
    component: Register
  },
  {
    path:"/Position",
    name:"地址管理",
    component:Position
  },
  {
    path:"/Setposition",
    name:"地址管理",
    component:Setposition
  },
  {
    path:"/Dingdan",
    name:"订单处理",
    component:Dingdan
  },
  {
    path:"/Myorder",
    name:"我的订单",
    component:Myorder
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
