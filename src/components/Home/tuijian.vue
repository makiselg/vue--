<template>
    <div>
        <div class="jx-box">
            <div class="jx-container">
                <div class="jx-title-img">
                    <img src="../../assets/img/40f23b933971bc7296ff28d4b43bab45.jpeg" alt="">
                </div>
                <div class="jx-c-box">
                    <div class="jx-c-b-i">
                        <div class="box">
                            <div class="item-box">
                                <!-- <div to="/goods?id=1" class="item-b-c"> -->
                                <router-link class="item-b-c" tag="div" to="/goods?id=0" v-for="(item,index) in list" :key="index">
                                    <div class="item-c-b">
                                        <div class="item-i-b">
                                            <div class="item-i-b-t">
                                                <div class="img-box">
                                                    <img :src="item.img" alt="">
                                                </div>
                                                <div class="w-box">
                                                    <span></span>
                                                </div>
                                                <div class="i-icon">
                                                        <div class="icon-box">
                                                            <span>新品</span>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="item-i-b-b">
                                                <div class="title">
                                                    <span>{{item.name}}</span>
                                                </div>
                                                <div class="price">
                                                    <span class="rmb">¥</span>
                                                    <span class="num">{{item.price}}</span>
                                                    <span class="s-w"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                                <!-- <router-link class="item-b-c" tag="div" to="/goods?id=1">
                                    <div class="item-c-b">
                                        <div class="item-i-b">
                                            <div class="item-i-b-t">
                                                <div class="img-box">
                                                    <img src="../../assets/img/712a5f2a150f330013e190c8b1737243.png" alt="">
                                                </div>
                                                <div class="w-box">
                                                    <span></span>
                                                </div>
                                                <div class="i-icon">
                                                        <div class="icon-box">
                                                            <span>新品</span>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="item-i-b-b">
                                                <div class="title">
                                                    <span>AI变频空调Roaly</span>
                                                </div>
                                                <div class="price">
                                                    <span class="rmb">¥</span>
                                                    <span class="num">7999</span>
                                                    <span class="s-w"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link> -->
                            </div>
                            <div class="item-box" >
                                <router-link class="item-b-c" tag="div" to="/goods?id=1" v-for="(item,i) in list2" :key="i">
                                    <div class="item-c-b">
                                        <div class="item-i-b">
                                            <div class="item-i-b-t">
                                                <div class="img-box">
                                                    <img :src="item.img" alt="">
                                                </div>
                                                <div class="w-box">
                                                    <span></span>
                                                </div>
                                                <div class="i-icon">
                                                        <div class="icon-box">
                                                            <span>新品</span>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="item-i-b-b">
                                                <div class="title">
                                                    <span>{{item.name}}</span>
                                                </div>
                                                <div class="price">
                                                    <span class="rmb">¥</span>
                                                    <span class="num">{{item.price}}</span>
                                                    <span class="s-w"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
         class="jz"
         >
        <div class="jx-box" >
            <div class="jx-container">
                <div class="jx-title-img">
                    <img src="../../assets/img/40f23b933971bc7296ff28d4b43bab45.jpeg" alt="">
                </div>
                <div class="jx-c-box">
                    <div class="jx-c-b-i">
                        <div class="box">
                            <div class="item-box">
                                <!-- <div to="/goods?id=1" class="item-b-c"> -->
                                <router-link class="item-b-c" tag="div" to="/goods?id=0" v-for="(item,index) in list" :key="index">
                                    <div class="item-c-b">
                                        <div class="item-i-b">
                                            <div class="item-i-b-t">
                                                <div class="img-box">
                                                    <img :src="item.img" alt="">
                                                </div>
                                                <div class="w-box">
                                                    <span></span>
                                                </div>
                                                <div class="i-icon">
                                                        <div class="icon-box">
                                                            <span>新品</span>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="item-i-b-b">
                                                <div class="title">
                                                    <span>{{item.name}}</span>
                                                </div>
                                                <div class="price">
                                                    <span class="rmb">¥</span>
                                                    <span class="num">{{item.price}}</span>
                                                    <span class="s-w"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="item-box" >
                                <router-link class="item-b-c" tag="div" to="/goods?id=1" v-for="(item,i) in list2" :key="i">
                                    <div class="item-c-b">
                                        <div class="item-i-b">
                                            <div class="item-i-b-t">
                                                <div class="img-box">
                                                    <img :src="item.img" alt="">
                                                </div>
                                                <div class="w-box">
                                                    <span></span>
                                                </div>
                                                <div class="i-icon">
                                                        <div class="icon-box">
                                                            <span>新品</span>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="item-i-b-b">
                                                <div class="title">
                                                    <span>{{item.name}}</span>
                                                </div>
                                                <div class="price">
                                                    <span class="rmb">¥</span>
                                                    <span class="num">{{item.price}}</span>
                                                    <span class="s-w"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </van-list>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    name:"AI变频空调Roaly",
                    price:7999,
                    img:require('../../assets/img/712a5f2a150f330013e190c8b1737243.png')
                },
                {
                    name:"阿宽成都甜水面",
                    price:2499,
                    img:require('../../assets/img/778f9024ffa7733a58aa312ae7bb8e30.webp')
                },
                {
                    name:"简约气质石英腕表",
                    price:7999,
                    img:require('../../assets/img/969098e24771d0d3ca254693cb10f497.png')
                }
            ],
            list2:[
                {
                    name:"简约气质石英腕表",
                    price:7999,
                    img:require('../../assets/img/969098e24771d0d3ca254693cb10f497.png')
                },
                {
                    name:"AI变频空调Roaly",
                    price:7999,
                    img:require('../../assets/img/712a5f2a150f330013e190c8b1737243.png')
                },
                {
                    name:"消毒柜尊享版",
                    price:2499,
                    img:require('../../assets/img/316f01b2732d250cec4089fdc74467a6.png')
                },
                
            ],
            finished:false,
            loading:false,
            num:1
        }
    },
    methods:{
        onLoad(){
            setTimeout(()=>{
                
                this.num++;
                this.loading = false;
                if(this.num >3){
                    this.finished = true;
                }
            },3000)
        }
    }
}
</script>

<style lang="scss" scoped>
.jz{
    background-color: #f2f2f2;
}
</style>