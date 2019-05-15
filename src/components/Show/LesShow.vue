<template>
  <div class="lesShow-container">
    <div class="lesson-title" :style="{'background-image': 'url(' + headerImgUrl + ')'}">
      <div class="inner">
        <h4>瘦腿训练</h4>
        <p>本课程进行了为期 4 周的效果测试，一共 183 人参加。4 周后瘦腿成功率高达 69.7%，平均每人瘦了 2.19cm，相当于牛仔裤小了 2 个码，效果显著。如果配合减脂训练、饮食控制，还能让瘦腿效果更明显。</p>
        <p>1节</p>
        <p>22683910 人训练</p>
      </div>
      <div class="shadow"></div>
    </div>
    <button @click="test(100001)" class="test">test</button>
    <div class="main-content">
      <div class="main-content-title">
        <p>计划训练 第一节</p>
      </div>
      <div class="step clearfix" v-for="(item, index) in lessonDetail">
        <a href="#/MoveShow" target="_blank">
          <div class="step-background" :style="{'background-image': 'url(' + item.picUrl + ')'}"></div>
          <p class="step-name">{{item.name}}</p>
          <p class="step-payload">{{item.payload}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerImgUrl: "static/img/index_img1.jpg",
      lessonDetail: [
        {
          picUrl: "/static/img/Movement/List/show1.jpg",
          name: "侧卧左侧提膝",
          payload: "1x20"
        },
        {
          picUrl: "/static/img/Movement/List/show2.jpg",
          name: "侧卧左侧前抬腿",
          payload: "1x20"
        },
        {
          picUrl: "/static/img/Movement/List/show3.jpg",
          name: "侧卧左侧抬腿",
          payload: "1x20"
        },
        {
          picUrl: "/static/img/Movement/List/show4.jpg",
          name: "侧卧左侧后踢腿",
          payload: "1x20"
        },
        {
          picUrl: "/static/img/Movement/List/show5.jpg",
          name: "左腿翘曲两头起",
          payload: "1x20"
        },
        {
          picUrl: "/static/img/Movement/List/show6.jpg",
          name: "右腿翘曲两头起",
          payload: "1x20"
        },
        {
          picUrl: "/static/img/Movement/List/show7.jpg",
          name: "坐姿俯身左侧臀部拉伸",
          payload: "1x20"
        }
      ]
    };
  },
  methods: {
    test(id) {
      this.$api
        .getLessonDetail(id)
        .then(res => {
          console.log(res.data);
          console.log(res.data.data);
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.test {
  font-size: 30px;
  border-color: transparent;
  color: #409eff;
  background-color: transparent;
}
.test:hover {
  cursor: pointer;
}
.lesShow-container {
  width: 900px;
  height: 100%;
  margin: 0 auto;
}
.lesson-title {
  position: relative;
  margin-top: 15px;
  height: 280px;
  background-size: cover;
  background-position: center center;
  width: 100%;
  overflow: hidden;
}
.inner {
  position: absolute;
  padding: 65px 25px 25px;
  color: #fff;
  text-align: left;
  z-index: 2;
}
.shadow {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content {
  position: relative;
  width: 100%;
}
.main-content-title {
  height: 80px;
  font-size: 17px;
  vertical-align: middle;
  text-align: center;
}
.main-content-detail {
  display: block;
  width: 100%;
}
.step {
  position: relative;
  width: 390px;
  margin: 0 0 35px;
  display: inline-block;
}
.step:nth-child(2n) {
  margin-right: 35px;
  left: 25px;
}
.step-background {
  width: 50%;
  padding-bottom: 30%;
  background-color: #eeedef;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.step-name {
  position: absolute;
  font-size: 14px;
  top: 15px;
  left: 53%;
  margin-left: 0;
  color: #584f60;
}
.step-payload {
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
