<template>
  <div id="Index-myone">
    <carousel class="cal-block" height="700px" />
    <div class="section-body">
      <section class="training-index">
        <div class="scroll-show" :class="is_transition[0] ? 'scroll-show-active' : ''">
          <h3>量体裁衣 & 多种健身训练供你选择</h3>
          <h4>训练计划针对不同人群、各种器械和阶段健身目标组合编排，适用最广泛的健身场景。</h4>
        </div>
        <div
          class="training-wrap"
          style="background-image: url(static/img/background-img/storebg.jpg);"
        >
          <div class="training-block">
            <a href="#/LessonList/50001" class="training-item">
              <div class="training-detail" style="background-image: url(static/img/index_img1.jpg)">
                <div class="training-title">瘦腿训练</div>
                <div style="text-align: left">13分钟 49千卡</div>
                <div class="training-population">48，385，041人训练</div>
              </div>
            </a>
            <a href="#/LessonList/50008" class="training-item">
              <div class="training-detail" style="background-image: url(static/img/index_img2.jpg)">
                <div class="training-title">马甲线养成</div>
                <div style="text-align: left">12分钟 61千卡</div>
                <div class="training-population">49，252，615人训练</div>
              </div>
            </a>
            <a href="#/LessonList/50005" class="training-item">
              <div class="training-detail" style="background-image: url(static/img/index_img3.jpg)">
                <div class="training-title">瑜伽·身体韵律</div>
                <div style="text-align: left">32分钟 135千卡</div>
                <div class="training-population">928，978人训练</div>
              </div>
            </a>
          </div>
          <div class="training-text">
            <h3>坚持训练改变自我</h3>
            <div>找到适合你的、感兴趣的，完成人生的逆袭</div>
            <el-button class="find-training" type="info" round @click="findTraining">查看课程</el-button>
          </div>
        </div>
      </section>
      <section class="community-index">
        <div class="scroll-show" :class="is_transition[1] ? 'scroll-show-active' : ''">
          <h3>运动资讯 & 分享健身成果，一起进步</h3>
          <h4>记录每一天的变化，分享好友相互勉励，在 Keep 健身不再是孤独的坚持。</h4>
        </div>

        <div class="community-wrap">
          <div
            class="community-entry"
            v-for="(item, index) in infoItem"
            :style="{backgroundImage:'url(' + item.picurl + ')'}"
            @click="selectInfo"
          >
            <div class="mark" />
            <h5 class="info-title">{{item.title}}</h5>
          </div>
          <div class="community-text">
            <h3>体验不一样的生活</h3>
            <div>在这里你可以阅读精彩的健身趣闻，发现生活的美好</div>
            <el-button class="find-info" type="info" round @click="findInfo">发现精选</el-button>
          </div>
        </div>
      </section>
      <section class="run-index">
        <div class="scroll-show" :class="is_transition[2] ? 'scroll-show-active' : ''">
          <h3>户外跑步 & 精准跑步记录，让你的跑步更加系统</h3>
          <h4>精准跑步路线记录，跑前热身与跑后拉伸，Keep 提供更加完善和专业的跑步指导。</h4>
        </div>
        <div class="run-wrap" style="background-image: url(static/img/background-img/runbg.jpg);">
          <div class="run-wrap-inner">
            <div class="run-block">
              <div class="run-speed">
                <img src="static/img/index_img4.jpg" />
              </div>
              <div class="run-frequency">
                <img src="static/img/runchart.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import carousel from "@/components/Carousel";
import { throttle } from "loadsh";
export default {
  name: "Index-myone",
  components: {
    carousel
  },
  data() {
    return {
      infoItem: [
        {
          title: "高糖饮料与早死风险的关系",
          picurl: "/static/img/InformationPic/highsugardrink.webp.jpg"
        },
        {
          title: "我跨过山和大海，却磨坏了膝盖！",
          picurl: "/static/img/InformationPic/crossmountain.webp.jpg"
        },
        {
          title: "9个月的魔鬼训练造就今日的惊奇队长",
          picurl: "/static/img/InformationPic/marvel.png"
        },
        {
          title: "吃饱也能瘦！红米减肥餐!",
          picurl: "/static/img/InformationPic/redrice.webp.jpg"
        },
        {
          title: "偶遇大型“整容现场”？不，他们只是减肥成功了而已",
          picurl: "/static/img/InformationPic/reduceweight.webp.jpg"
        },
        {
          title: "“令人唏嘘、自暴自弃、大腹便便”的雷神是如何练成的？",
          picurl: "/static/img/InformationPic/thor.png"
        }
      ],
      is_transition: [false, false, false]
    };
  },
  computed: {
    carouselHeight: function() {
      let height = window.innerHeight + "px";
      return height;
    }
  },
  methods: {
    findTraining() {
      this.$router.push({ name: "training" });
    },
    findInfo() {
      this.$router.push({ name: "InformationList" });
    },
    selectInfo() {
      this.$router.push({ path: "/InformationDetail" });
    },
    scrollAnimation() {
      let title_list = document.getElementsByClassName("scroll-show");
      let list_length = title_list.length;
      let window_height = window.innerHeight;
      for (let i = 0; i < list_length; i++) {
        let eleTop = title_list[i].getBoundingClientRect().top;
        if (eleTop > 0 && eleTop < window_height) {
          this.$set(this.is_transition, i, true);
        }
      }
    }
  },
  mounted() {
    // (function() {
    //   var height = window.innerHeight;
    //   var width = window.innerWidth;
    //   width = document.body.clientWidth;
    //   if (typeof heigth != "number") {
    //     height = document.body.clientHeight;
    //   }
    //   console.log(height, width);
    //   var ratio = height / width;
    //   document.write(
    //     "<style>.cal-block{padding-bottom:" +
    //       ratio * 100 +
    //       "% !important;}.section-body{padding-top:" +
    //       ratio * 100 +
    //       "%;}</style>"
    //   );
    // })();
    document.addEventListener("scroll", throttle(this.scrollAnimation, 500));
  }
};
</script>

<style scoped>
h3,
h4 {
  padding-top: 50px;
  margin: 0;
  width: 100%;
  text-align: center;
  color: #584f60;
}

h4 {
  padding-bottom: 50px;
  opacity: 0.5;
}
.cal-block {
  position: fixed;
  width: 100%;
  top: 60px;
  z-index: -1;
}
.section-body {
  margin-top: 760px;
  background: #fff;
}

.training-wrap,
.run-wrap {
  position: relative;
  height: 636px;
  margin: 20px 0;
  padding: 0 10%;
  background-color: #5e5566;
}
.community-wrap {
  position: relative;
  height: 636px;
  margin: 20px 0;
  background-color: #5e5566;
}

/* 训练块 *************************************/
.training-block {
  position: relative;
  top: -20px;
  width: 200px;
  height: 100%;
  /* border: 2px solid greenyellow; */
}
.training-item {
  position: relative;
  display: block;
  height: 33%;
  width: 300px;
}
.training-title {
  font-size: 20px;
  margin-bottom: 6px;
  font-weight: bold;
  text-align: left;
}
.training-population {
  position: absolute;
  bottom: 18px;
  left: 18px;
}
a .training-detail {
  position: relative;
  height: 100%;
  width: 100%;
  color: #fff;
  display: block;
  font-size: 14px;
  box-sizing: border-box;
  margin-top: 10px;
  background-size: 100%;
  padding: 20px;
}
.training-text {
  position: absolute;
  bottom: 108px;
  right: 25%;
  width: 300px;
  color: #8e8893;
}
.training-text h3 {
  color: #ffffff;
  text-align: left;
}
.training-text .find-training {
  margin-top: 20px;
}
/* 跑步块 ***********************************/
.run-wrap-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.run-block {
  position: absolute;
  top: -20px;
  right: 0;
  width: 390px;
  max-height: 636px;
  height: 100%;
}
.run-speed {
  position: relative;
  height: 50%;
  width: 100%;
  /* transform: scale(1.2,1.2); */
  background-color: rgb(153, 146, 158);
  border-radius: 6px;
}
.run-speed img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.run-frequency {
  position: relative;
  height: 50%;
  width: 100%;
  /* transform: scale(1.2,1.2); */
  background-color: rgb(153, 146, 158);
  border-radius: 6px;
  margin-top: 10px;
}
.run-frequency img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

/* 社区块****************************** */
.community-entry {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 3px 3px;
  box-sizing: border-box;
}
.mark {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.info-title {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-weight: normal;
  font-size: 15px;
  opacity: 0.5;
  text-indent: 1.5em;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;
}
.community-entry:hover {
  transform: scale(1.05, 1.05);
  cursor: pointer;
}
.community-entry:nth-child(1) {
  width: 21.45%;
  height: 58.49%;
  left: 3px;
  top: 3px;
}
.community-entry:nth-child(2) {
  width: 21.45%;
  height: 38.67%;
  left: 3px;
  bottom: 3px;
}
.community-entry:nth-child(3) {
  width: 26.38%;
  height: 48.2%;
  left: 22.08%;
  top: 3px;
}
.community-entry:nth-child(4) {
  width: 26.38%;
  height: 48.2%;
  left: 49%;
  top: 3px;
}
.community-entry:nth-child(5) {
  width: 23.19%;
  height: 41.19%;
  left: 75.69%;
  top: 3px;
}
.community-entry:nth-child(6) {
  width: 23.19%;
  height: 356px;
  left: 75.69%;
  bottom: 3px;
}
.community-text {
  position: absolute;
  bottom: 108px;
  left: 25%;
  width: 300px;
  color: #8e8893;
}
.community-text h3 {
  color: #ffffff;
  text-align: left;
}
.community-text .find-info {
  margin-top: 20px;
}
/* ************************************************ */
a:link,
a:visited {
  display: block;
  font-weight: bold;
  font-size: 14px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  background-color: rgb(153, 146, 158);
}
a:hover,
a:active {
  background-color: aquamarine;
  transform: scale(1.1, 1.1);
}
/* 标题浮动显示 */
.scroll-show h3,
h4 {
  transform: translateY(30px);
  opacity: 0;
}
.scroll-show-active h3 {
  transition: 1s 0.1s;
  transform: translateY(0);
  opacity: 1;
}
.scroll-show-active h4 {
  transition: 1.5s 0.7s;
  transform: translateY(0);
  opacity: 1;
}
</style>
