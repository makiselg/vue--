<template>
    <div>
        <van-nav-bar :title="$route.name" />
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
        <van-field
            v-model="password1"
            type="password"
            label="验证密码"
            placeholder="请再一次输入密码"
            required
        />
        <van-field
            v-model="iphone"
            required
            clearable
            label="手机号码"
            placeholder="请输入手机号码"
        />
          <van-field
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
            >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group>
        <van-button type="primary" size="large" @click="getdata">注册</van-button>
    </div>
</template>

<script>
// axios.defaults.baseURL = "http://192.168.54.19:3000";
import { Notify } from 'vant';
    export default {
        data() {
            return {
                username:null,
                password:null,
                password1:null,
                iphone:null,
                sms:null
            }
        },
        methods: {
            getdata() {
                if(this.password == this.password1){

                    this.$axios.get("http://192.168.54.28:3000/register",{
                        params:{
                            username:this.username,
                            password:this.password,
                            iphone:this.iphone
                        }
                    }).then((data)=>{
                        window.console.log(data);
                        if(data.data.code == 200){
                            Notify({
                                message: '注册成功',
                                type: 'success',
                                duration: 2000,
                                onOpened:()=>{
                                    this.$router.push("/login");
                                }
                            });
                        }
                    })
                }else if(this.name == ""){
                    return alert("注册失败")
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>