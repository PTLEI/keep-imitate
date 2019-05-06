<template>
  <div id="move-list-container">
    <div class="titlebar">
      <div class="inner">
        动作分类 - {{moveTitle}}
        <span style="float: right">共 {{moveAmount}} 个动作</span>
      </div>
    </div>
    <div class="list-content">
      <div class="list-single clearfix" v-for="(item, index) in moveList" :key="index">
        <a href="#/MoveShow" target="_blank">
          <div class="movement-background" :style="{'background-image': 'url(' + item.image + ')'}"></div>
          <p class="movement-name">{{item.moveName}}</p>
          <p class="movement-level">{{item.payload}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveTitle: "胸部",
      moveAmount: 47,
      moveList: [
        {
          image: "/static/img/LesShow/show1.jpg",
          moveName: "侧卧左侧提膝",
          payload: "1x20"
        },
        {
          image: "/static/img/LesShow/show2.jpg",
          moveName: "侧卧左侧前抬腿",
          payload: "1x20"
        },
        {
          image: "/static/img/LesShow/show3.jpg",
          moveName: "侧卧左侧抬腿",
          payload: "1x20"
        },
        {
          image: "/static/img/LesShow/show4.jpg",
          moveName: "侧卧左侧后踢腿",
          payload: "1x20"
        },
        {
          image: "/static/img/LesShow/show5.jpg",
          moveName: "左腿翘曲两头起",
          payload: "1x20"
        }
      ]
    };
  }
};
</script>

<style scoped>
#move-list-container {
  width: 100%;
}

/* 头部标题 */
.titlebar {
  background: #fff;
  height: 52px;
  line-height: 52px;
}
.inner {
  width: 850px;
  margin: 0 auto;
  box-sizing: border-box;
  color: #999;
  font-size: 12px;
}

/* list主要内容 */
.list-content {
  position: relative;
  width: 850px;
  margin: 0 auto;
  padding: 40px 40px 0;
}
.list-single {
  position: relative;
  width: 390px;
  margin: 0 0 35px;
  display: inline-block;
}
.list-single:nth-child(2n) {
  margin-right: 35px;
  left: 25px;
}
.movement-background {
  width: 50%;
  padding-bottom: 30%;
  background-color: #eeedef;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.movement-name {
  position: absolute;
  font-size: 14px;
  top: 15px;
  left: 53%;
  margin-left: 0;
  color: #584f60;
}
.movement-level {
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 15px;
  left: 53%;
  color: #999;
}

/* clearfix */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
</style>
