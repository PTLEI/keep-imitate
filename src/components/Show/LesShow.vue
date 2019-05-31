<template>
  <div class="lesShow-container">
    <div class="lesson-title" :style="{'background-image': 'url(' + lessonInfo.picUrl + ')'}">
      <div class="inner">
        <h4>{{lessonInfo.title}}</h4>
        <p>{{lessonInfo.content}}</p>
        <p>1节</p>
        <p>22683910 人训练</p>
      </div>
      <div class="shadow"></div>
    </div>
    <div class="main-content">
      <div class="main-content-title">
        <p>计划训练 第一节</p>
      </div>
      <div class="step clearfix" v-for="(item, index) in movement">
        <a @click="goMovement(item.movementId)" target="_blank">
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
      lessonInfo: {},
      headerImgUrl: "static/img/index_img1.jpg",
      movement: [
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
    goMovement(id) {
      let newPage = this.$router.resolve({ path: `/MoveShow/${id}` });
      window.open(newPage.href, "_blank");
    }
  },
  mounted() {
    this.$api
      .getLessonDetail(this.$route.params.lessonId)
      .then(res => {
        this.lessonInfo = res.data.data[0];
        this.movement = res.data.moveList;
      })
      .catch(err => {});
  }
};
</script>

<style scoped>
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
.step a:hover {
  cursor: pointer;
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
