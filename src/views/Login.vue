<template>
    <div>
        <van-nav-bar :title="$route.name" />
        <div class="box">
            <div class="container">
                <div class="logo">
                    <img src="../assets/img/navi_title_v4.png" alt="">
                </div>
                <div class="text">
                    <span>登陆获取更多优惠</span>
                </div>
            </div>
        </div>
        <van-cell-group>
        <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        </van-cell-group>
        <van-button type="primary" size="large" @click="getlogin">登录</van-button>
        <van-button type="primary" size="large" to="/Register">注册</van-button>
        
        
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                username:null,
                password:null,
            }
        },
        methods: {
            getlogin(){
                window.console.log("登录成功");
                // ajax请求后台登录API功能
                this.$axios.get('http://192.168.54.28:3000/login', {
                    params: {
                        username:this.username,
                        password:this.password
                    }
                })
                .then((response)=>{
                    console.log(response);
                    // 1.把token存储cookie或localStorage
                    // let token = response.data.result.token;
                    // localStorage.login = token;
                    if(response.data.code == 200){
                        let token = response.data.result.token;
                        localStorage.login = token;
                        this.$router.push("/My");
                    }else{
                        return alert("密码错误")
                    }
                    
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .box{
        width: 100%;
        margin-bottom: 15px;
        .container{
            width: 100%;
            .logo{
                margin: 0 auto;
                width: 100px;
                height: 50px;
                img{
                    width: 100%;
                }
            }
            .text{
                margin-top: 10px;
                text-align: center;
                span{
                    font-size: 18px;
                    color: #554b4b6c;
                }
            }
        }
    }
</style>