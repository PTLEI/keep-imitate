<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :router="router"
        @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/Choice">发现精选</el-menu-item>
        <el-submenu index="3">
            <template slot="title">训练课程</template>
            <el-menu-item index="/Training">课程分类</el-menu-item>
            <el-menu-item index="/Movement">动作分类</el-menu-item>
        </el-submenu>
        <el-menu-item class="login" index="" v-show="!islogin" @click="loginDialogShow">登陆/注册</el-menu-item>
        <el-menu-item class="login" index="" v-show="islogin" style="z-index:9999999">
            <img :src="picUrl" style="height: 60px; width: 60px; border-radius:50%"/>
            <!-- <el-button type="text">{{nickname}}</el-button> -->
            <a href="#" type="text" id="nickname">{{nickname}}
                <div class="list">
                    <ul>
                        <li><a href="#">个人中心</a></li>
                        <li><a @click="userExit">登出</a></li>
                    </ul>
                </div>
            </a>
        </el-menu-item>
        <el-dialog :visible.sync="visible" title="登录" width="586px">
            <div class="loginform">
                <el-form :model="loginData" label-position="right" label-width="100px">
                  <el-form-item label="用户：">
                      <el-input v-model="loginData.username" placeholder="请输入用户账号"></el-input>
                  </el-form-item>
                  <el-form-item label="密码：">
                      <el-input v-model="loginData.password" type="password" placeholder="请输入用户密码"></el-input>
                  </el-form-item>
                </el-form>
            </div>
            <el-button type="primary" @click="login(loginData.username, loginData.password)">登录</el-button>
            <el-button type="info" @click="cancel">取消</el-button>
        </el-dialog>
    </el-menu>
</template>

<script>
import Vue from 'Vue'
import Bus from './Bus'
export default {
    name:'app-navbar',
    data() {
        return{
            // 默认Nav
            activeIndex:'/',
            // Nav路由模式
            router: true,
            // 判断是否已经登录
            islogin: false,
            // 登录Dialog显示
            visible: false,
            // 登录信息
            loginData: {username: '', password: ''},
            picUrl: '',
            nickname: '',
            userid: ''
        };
    },
    methods: {
        handleSelect(key,keyPath) {
            // console.log(key,keyPath);
        },
        // 登录点击
        loginDialogShow() {
            this.visible = true;
        },
        login(username, password) {
            if(this.loginData.username && this.loginData.password) {
                this.$api.login(username, password);
                Bus.$on('userInfo', res => {
                    console.log(res);
                    this.picUrl = res.headpic;
                    console.log(res.headpic);
                    console.log(this.picUrl);
                    this.islogin = true;
                })
                this.visible = false;
            } else {
                this.$options.methods.Notice.bind(this)({
                    title:'校验失败',
                    message:"请填写完整",
                    type:'error',
                });
                return false;
            }
        },
        userExit() {
            this.$options.methods.Notice.bind(this)({
                title:'已登出',
                message:"部分功能将失效",
                type:'success',
            });
            this.isLogin = false;
            console.log(this.isLogin);
            sessionStorage.removeItem('userInfo');
            console.log(this.$route.path.indexOf('user')>-1);
            this.$route.path.indexOf('user')>-1?this.$router.push({path:'/'}):0;//其中login是你定义的一个路由模块
        },
        Notice(obj) {
            this.$notify({
                title: obj.title,
                message: obj.message,
                position: 'top-right',
                type:obj.type,
                duration: 1000,
                offset: 50
            })
        },
        cancel() {
            this.visible = false;
        }
    },
    mounted() {
        this.$nextTick(function() {
            if(sessionStorage.getItem('userInfo')){
            let info1=JSON.parse(sessionStorage.getItem('userInfo'));
            this.picUrl=info1.headlogo;
            this.nickname=info1.nickname;
            this.userid=info1.userid;
            this.isLogin=true;
            }
        })
        let self = this;
        Bus.$on('userInfo', (e) => {
            self.$nextTick(() => {
                if(sessionStorage.getItem('userInfo')){
                    let info1=JSON.parse(sessionStorage.getItem('userInfo'));
                    self.picUrl=info1.headlogo;
                    self.nickname=info1.nickname;
                    self.userid=info1.userid;
                    self.isLogin=true;
                }
            })
            // console.log(`传来的数据是：${e}`)
        })
    }
}
</script>

<style scoped>
.el-menu-demo{
    width: 100%;
    top: 0;
}
.login{
    float: right;
    padding: 0 30px;
}
a{
    color: #909399;
    width: 100%;
}
a:hover{
    color: black;
}
.el-input{
    display: inline-block;
    width: 300px;
}
#nickname .list{
    opacity:0;
    position: fixed;
    z-index: 9999999;
    background: #fff;
    width: 90px;
    border-radius: 4px;
    right: 45px;
    height: 100px;
    margin-top: -5px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.35);
    transition: .4s ease-in-out;
    transform:translate3d(0,-92px,0); 
    font-weight: lighter;
}
#nickname:hover .list{
    display: block;
    opacity: 1;
    transition:.4s ease-in-out;
    transform:translate3d(0,0,0); 
}
.list ul{
    width: 90px;
    margin: 0;
    padding: 0;
    height: 100px;
}
.list ul li{
    margin: 0;
    width: 90px;
    height: 50px;
    list-style: none;
}
.list ul li a{
    margin:auto;
    transition: .3s ease-in-out;
    width: 100%;
    display: inline-block;
    line-height: 40px;
    color: #555;
}
.list ul li a:hover{
    color: #409EFF;
    transition: .3s ease-in-out;
}

</style>
