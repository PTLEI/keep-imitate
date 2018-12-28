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
            <img src="/static/img/apple.jpeg" style="height: 60px; width: 60px; border-radius:50%"/>
        </el-menu-item>
        <el-dialog :visible.sync="visible" title="登录" width="586px">
            <div class="loginform">
                <el-form :model="loginData" label-position="right" label-width="100px">
                  <el-form-item label="用户：">
                      <el-input v-model="loginData.username" placeholder="请输入用户账号"></el-input>
                  </el-form-item>
                  <el-form-item label="密码：">
                      <el-input v-model="loginData.password" placeholder="请输入用户密码"></el-input>
                  </el-form-item>
                </el-form>
            </div>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="cancel">取消</el-button>
        </el-dialog>
    </el-menu>
</template>

<script>
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
        };
    },
    methods: {
        handleSelect(key,keyPath) {
            console.log(key,keyPath);
        },
        // 登录点击
        loginDialogShow() {
            this.visible = true;
        },
        login() {
            
        },
        cancel() {
            this.visible = false;
        }
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

</style>
