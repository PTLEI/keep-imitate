<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :router="router"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="Lesson">
      <template slot="title">训练课程</template>
      <el-menu-item index="/Training">课程分类</el-menu-item>
      <el-menu-item index="/Movement">动作分类</el-menu-item>
    </el-submenu>
    <el-menu-item index="/Information">发现精选</el-menu-item>
    <el-menu-item class="login" index v-show="!isLogin">
      <span @click="loginDialogShow">登录</span>
      /
      <span @click="registerDialogShow">注册</span>
    </el-menu-item>
    <el-menu-item class="userHome" index v-show="isLogin">
      <img :src="userInfo.headpic" style="height: 40px; width: 40px; border-radius:50%">
      <a href="#" type="text" id="nickname">
        {{userInfo.nickname}}
        <div class="list">
          <ul>
            <li>
              <router-link to="/Setting/setting">个人中心</router-link>
            </li>
            <li>
              <a @click="exitUser">登出</a>
            </li>
          </ul>
        </div>
      </a>
    </el-menu-item>
    <el-dialog :visible.sync="Lvisible" title="登录" width="586px">
      <div class="loginform">
        <el-form :model="loginData" label-position="right" label-width="100px">
          <el-form-item label="用户：">
            <el-input v-model="loginData.username" placeholder="请输入用户账号"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input
              v-model="loginData.password"
              type="password"
              placeholder="请输入用户密码"
              @keyup.13.native="login()"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="primary" @click="login()">登录</el-button>
      <el-button type="info" @click="cancel">取消</el-button>
    </el-dialog>

    <el-dialog :visible.sync="Rvisible" title="注册" width="586px">
      <div class="loginform">
        <el-form :model="registerData" label-position="right" label-width="100px">
          <el-form-item label="用户：">
            <el-input v-model="registerData.username" placeholder="请输入用户账号"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="registerData.password" type="password" placeholder="请输入用户密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：">
            <el-input v-model="registerData.confirm" type="password" placeholder="请再次输入用户密码"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="primary" @click="register()">注册</el-button>
      <el-button type="info" @click="cancel">取消</el-button>
    </el-dialog>
  </el-menu>
</template>

<script>
import Vue from "Vue";
import Bus from "./Bus";
export default {
  name: "app-navbar",
  data() {
    return {
      // // 默认Nav
      // activeIndex: "",
      // Nav路由模式
      router: true,
      // 登录Dialog显示
      Lvisible: false,
      // 注册Dialog
      Rvisible: false,
      // 登录信息
      loginData: { username: "", password: "" },
      // 注册信息
      registerData: { username: "", password: "", confirm: "" },
      userInfo: {
        headpic: "",
        nickname: "",
        userid: ""
      }
    };
  },
  computed: {
    activeIndex: function() {
      return "/" + this.$route.path.split("/").reverse()[0];
    },
    // 判断是否已经登录
    isLogin: function() {
      if (sessionStorage.getItem("userInfo")) {
        this.$store.commit(
          "userStatus",
          JSON.parse(sessionStorage.getItem("userInfo"))
        );
        this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      } else {
        this.$store.commit("userStatus", null);
      }
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key);
    },
    // 登录点击
    loginDialogShow() {
      this.Lvisible = true;
    },
    registerDialogShow() {
      this.Rvisible = true;
    },
    login() {
      if (this.loginData.username && this.loginData.password) {
        this.$api
          .login(this.loginData.username, this.loginData.password)
          .then(res => {
            if (res.data.status !== 200) {
              Vue.prototype.$notify({
                title: "登录失败",
                message: "请检查账户",
                type: "error",
                offset: 50,
                duration: 1000
              });
              return false;
            } else if (res.data.status === 200) {
              Vue.prototype.$notify({
                title: "登录成功",
                message: `你好，${res.data.data[0].nickname}!`,
                type: "success",
                offset: 50,
                duration: 1000
              });
              sessionStorage.setItem(
                "userInfo",
                JSON.stringify(res.data.data[0])
              );
              this.$store.dispatch("setUser", res.data.data[0]);
              this.userInfo = res.data.data[0];
              this.loginData = {};
              this.Lvisible = false;
              return true;
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.$options.methods.Notice.bind(this)({
          title: "校验失败",
          message: "请填写完整",
          type: "error"
        });
        return false;
      }
    },
    exitUser() {
      console.log(this.$store.getters.currentUser);
      this.$options.methods.Notice.bind(this)({
        title: "已登出",
        message: "部分功能将失效",
        type: "success"
      });
      this.userInfo = {};
      sessionStorage.removeItem("userInfo");
      this.$store.dispatch("exitUser");
      console.log(this.isLogin);
    },
    register() {
      if (
        this.registerData.username &&
        this.registerData.password &&
        this.registerData.confirm
      ) {
        if (this.registerData.password !== this.registerData.confirm) {
          this.$options.methods.Notice.bind(this)({
            title: "提示",
            message: "两次输入密码不一致",
            type: "warning",
            duration: 5000
          });
        } else {
          this.$api
            .register(this.registerData.username, this.registerData.password)
            .then(res => {
              console.log(res.data);
              if (res.data.status === 202) {
                this.$options.methods.Notice.bind(this)({
                  title: "失败",
                  message: "用户账号已经存在",
                  type: "error",
                  duration: 5000
                });
              } else if (res.data.status === 200) {
                this.$options.methods.Notice.bind(this)({
                  title: "注册成功",
                  message: "可以使用注册账户进行登录",
                  type: "success",
                  duration: 2000
                });
                this.registerData = {};
                this.Rvisible = false;
              } else {
                this.$options.methods.Notice.bind(this)({
                  title: "注册失败",
                  message: "请重新尝试",
                  type: "error",
                  duration: 5000
                });
              }
            });
        }
      } else {
        this.$options.methods.Notice.bind(this)({
          title: "校验失败",
          message: "请填写完整",
          type: "error"
        });
        return false;
      }
    },
    Notice(obj) {
      this.$notify({
        title: obj.title,
        message: obj.message,
        position: "top-right",
        type: obj.type,
        duration: obj.duration || 1000,
        offset: 50
      });
    },
    cancel() {
      this.Lvisible = false;
      this.Rvisible = false;
    }
  },
  mounted() {
    // this.$nextTick(function() {
    //   if (sessionStorage.getItem("userInfo")) {
    //     // let info1 = JSON.parse(sessionStorage.getItem("userInfo"));
    //     let info1 = sessionStorage.getItem("userInfo");
    //     this.picUrl = info1.headpic;
    //     this.nickname = info1.nickname;
    //     this.userid = info1.userid;
    //   }
    // });
    // let self = this;
    // Bus.$on("userInfo", e => {
    //   self.$nextTick(() => {
    //     if (sessionStorage.getItem("userInfo")) {
    //       // let info1 = JSON.parse(sessionStorage.getItem("userInfo"));
    //       let info1 = sessionStorage.getItem("userInfo");
    //       self.picUrl = info1.headpic;
    //       self.nickname = info1.nickname;
    //       self.userid = info1.userid;
    //     }
    //   });
    //   // console.log(`传来的数据是：${e}`)
    // });
  }
};
</script>

<style scoped>
.el-menu-demo {
  /* position: fixed; */
  z-index: 999;
  width: 100%;
  top: 0;
}
.login {
  float: right !important;
  padding: 0 30px;
}
.userHome {
  float: right !important;
  padding: 0 30px;
}
a {
  color: #909399;
  width: 100%;
}
a:hover {
  color: black;
}
.el-input {
  display: inline-block;
  width: 300px;
}
.el-dialog__wrapper .el-dialog {
  border-radius: 10px;
}
#nickname .list {
  opacity: 0;
  position: fixed;
  z-index: 9999999;
  background: #fff;
  width: 90px;
  border-radius: 4px;
  right: 45px;
  height: 100px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  transition: 0.4s ease-in-out;
  transform: translate3d(0, -90px, 0);
  font-weight: lighter;
}
#nickname:hover .list {
  display: block;
  opacity: 1;
  transition: 0.4s ease-in-out;
  transform: translate3d(0, 0, 0);
}
.list ul {
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0 10px;
  height: 100px;
}
.list ul li {
  margin: 0;
  width: 100%;
  height: 50px;
  list-style: none;
}
.list ul li a {
  margin: auto;
  transition: 0.3s ease-in-out;
  width: 100%;
  display: inline-block;
  line-height: 40px;
  color: #555;
}
.list ul li a:hover {
  color: #409eff;
  transition: 0.3s ease-in-out;
}
</style>
