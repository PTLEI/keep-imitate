<template>
  <div id="settingNavbar">
    <div class="main">
      <div class="setting">
        <div class="setting-left l">
          <div class="user-cont">
            <div class="user-mode">
              <a href="#" class="user-setupimg">
                <img :src="headlogo">
              </a>
            </div>
          </div>
          <div class="des-mode">
            <p>{{nickname}}</p>
          </div>
          <div class="left-list">
            <h2>账户管理</h2>
            <div class="line"></div>
            <ul class="menu">
              <li v-for="(item,index) in settingNav" :key="index">
                <router-link :to="item.href">{{item.text}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "settingNavbar",
  data() {
    return {
      nickname: JSON.parse(sessionStorage.getItem("userInfo")).nickname,
      headlogo: JSON.parse(sessionStorage.getItem("userInfo")).headpic,
      settingNav: [
        {
          href: "./setting",
          text: "个人信息"
        },
        {
          href: "./history",
          text: "训练历程"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    console.log(JSON.parse(sessionStorage.getItem("userInfo")).headpic);
    console.log(JSON.parse(sessionStorage.getItem("userInfo")));
  }
};
</script>
<style>
#settingNavbar {
  min-height: 100vh;
  min-width: 1200px;
  background-color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.l {
  float: left;
}
.r {
  float: right;
}
.main {
  min-height: 650px;
}
.setting {
  width: 1050px;
  margin: 0 auto;
  padding: 30px 0;
}
.setting-left {
  position: relative;
  top: 40px;
  width: 210px;
  background-color: #f8fafc;
}
.user-cont {
  padding-top: 25px;
  padding-bottom: 25px;
}
.user-mode {
  position: relative;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 4px solid #d9dde1;
  border-radius: 50px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
}
.user-mode img {
  width: 100px;
  height: 100px;
}
.des-mode {
  text-align: center;
  font-size: 16px;
}
.left-list {
  overflow: hidden;
  text-align: left;
}
.left-list h2 {
  font-size: 14px;
  line-height: 24px;
  margin: 12px 24px;
  font-weight: 600;
  font-family: Microsoft yahei;
}
.line {
  height: 1px;
  background-color: #d9dde1;
  margin: 0 24px;
}
.menu {
  padding: 10px 0 25px;
}
.setting-left ul li a {
  font-family: icomoon !important;
  display: block;
  position: relative;
  padding: 0 0 0 62px;
  height: 45px;
  line-height: 45px;
  font-weight: 400;
  color: #838383;
}
.setting-left ul li a:link,
a:hover {
  text-decoration: none;
}
.setting-left .router-link-active {
  color: #fff;
  background-color: #409eff;
}
.setting-left ul li span {
  padding-left: 60px;
}
</style>


