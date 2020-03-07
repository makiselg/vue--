<template>
    <div>
        <div class="box">
            <div class="container">
                <div class="search-box">
                    <div @click="pathgo" class="icon-box">
                        <span class="iconfont icon-left"></span>
                    </div>
                    <div class="inp-box">
                        <span>
                            <img src="../assets/img/3331492_2093810242.png" alt="">
                        </span>
                        <input type="text" placeholder="请输入想要搜索的商品">
                    </div>
                    <div class="button-box">
                        <button>搜索</button>
                    </div>
                </div>
                <div class="ex-item">
                    <div class="item-box">
                        <div class="item">
                            <span>小米手机</span>
                        </div>
                        <div class="item">
                            <span>小米家具</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
html,body{
    margin: 0;
    padding: 0;
}
button,input{
    outline: none;
    border: none;
    
}
.box{
    width: 100%;
    .container{
        width: 100%;
        .search-box{
            display: flex;
            width: 100%;
            padding: 10px 10px;
            height: 40px;
            // line-height: 40px;
            .icon-box{
                flex: 1;
                display: inline-block;
                width: 40px;
                height: 40px;
                span{
                    width: 100%;
                    height: 100%;
                    font-size: 40px;
                }
            }
            .inp-box{
                flex: 3;
                width: 100%;
                margin-left: -20px;
                border-radius: 40px;
                background-color: #fff;
                overflow: hidden;
                span{
                    width: 25px;
                    height: 25px;
                    display: block;
                    float: left;
                    padding: 7px 0;
                    padding-left: 15px;
                    img{
                        width: 100%;
                    }
                }
                input{
                    padding: 12px 0;
                    padding-left: 15px;
                }
            }
            .button-box{
                flex: 1;
                margin-left: 10px;
                button{
                    height: 40px;
                    border-radius: 40px;
                    width: 60px;
                    background-color: orange;
                }
            }
        }
        .ex-item{
            padding: 10px 0;
            width: 100%;
            margin-top: 10px;
            background-color: #fff;
            .item-box{
                width: 100%;
                display: flex;
                text-align: center;
                .item{
                    flex: 2;
                    span{
                        padding: 5px 5px;
                        display: inline-block;
                        width: 60px;
                        height: 30px;
                        line-height: 30px;
                        background-color: #f8f8f8;
                        border-radius: 50px;
                    }
                }
            }
        }
    }
}
</style>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        pathgo(){
        this.$router.go(-1);
    }
    }
}
</script>  