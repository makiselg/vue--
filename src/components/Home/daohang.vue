<template>
    <div>
        <div class="dh-box">
            <div class="dh-container">
                    <div class="dh-item" v-for="(item,index) in list" :key="index">
                        <div class="dh-img">
                        <img :src="item.img" alt=""></div>
                        <span>{{item.name}}</span>
                    </div>
                    <!-- <div class="dh-item">
                        <div class="dh-img">
                          <img src="../../assets/img/0301aee7e1d9d33c8b6db6481c0aea74.png" alt="">
                        </div>
                        <span>小米众筹</span>
                    </div>
                    <div class="dh-item">
                        <div class="dh-img">
                          <img src="../../assets/img/994c5e95f79a7874a73e6935832bb0e4.png" alt="">
                        </div>
                        <span>限时抢购</span>
                    </div>
                    <div class="dh-item">
                        <div class="dh-img">
                          <img src="../../assets/img/e3a7c62f0546d492017e09e3e5d5e3ea.png" alt="">
                        </div>
                        <span>热销榜单</span>
                    </div>
                    <div class="dh-item">
                        <div class="dh-img">
                          <img src="../../assets/img/f232f1640b3bb2b47e32d82da35d5a04.png" alt="">
                        </div>
                        <span>小米自营</span>
                    </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    name:"每日新品",
                    img:require('../../assets/img/3fc26de3e9c91dba0b470ae0dfd668d1.png')
                },
                {
                    name:"小米众筹",
                    img:require('../../assets/img/0301aee7e1d9d33c8b6db6481c0aea74.png')
                },
                {
                    name:"限时抢购",
                    img:require('../../assets/img/994c5e95f79a7874a73e6935832bb0e4.png')
                },
                {
                    name:"热销榜单",
                    img:require('../../assets/img/e3a7c62f0546d492017e09e3e5d5e3ea.png')
                },
                {
                    name:"小米自营",
                    img:require('../../assets/img/f232f1640b3bb2b47e32d82da35d5a04.png')
                }
            ]
        }
    }
}
</script>