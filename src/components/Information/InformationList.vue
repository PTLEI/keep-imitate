<template>
  <div class="information-list-container">
    <h4 class="title">健身资讯</h4>
    <div class="info-list-container">
      <ul class>
        <li v-for="(item, index) in infoList" :key="index" class="single-info">
          <a @click="selectInfo" style="width: 100%; height: 100%">
            <div class="single-info-img" :style="{'background-image': 'url(' + item.image + ')'}"/>
            <h2 class="single-info-title">{{item.title}}</h2>
            <span class="single-info-text">{{item.text}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoList: [
        {
          image: "/static/img/InformationPic/test.png",
          title: "这里是标题",
          text:
            "内地沈阳一个健身运动场近日兴起一种新运动，不少人都在一条单杠上挂上U字型带子，垫上软垫后，就将下巴及后脑悬在带子上，固定好就双脚离地，如荡秋千一样前后摇摆。不知情的人远看，会误以为是一群人在集体上吊，但其实他们只是在做自创的颈椎牵引练习。"
        },
        {
          image: "",
          title: "9个月的魔鬼训练造就今日的惊奇队长",
          text: ""
        },
        {
          image: "",
          title: "15个月狂减50磅！台妹分享4大减肥秘诀成功健康瘦身！！！",
          text: ""
        }
      ]
    };
  },
  methods: {
    selectInfo() {
      this.$router.push({ path: "/InformationDetail" });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none outside none;
  padding: 0;
}
.information-list-container {
  position: relative;
  width: 900px;
  margin: 0 auto;
}
.title {
  position: relative;
  top: 0;
  height: 100px;
  line-height: 100px;
  font-size: 45px;
  font-weight: normal;
  margin: 0;
  padding: 0 30px;
  background: white;
  color: #24c789;
  border-bottom: 1px solid #e0e0e0;
}
.info-list-container {
  position: relative;
  width: 100%;
  background: white;
}
.single-info {
  position: relative;
  height: 200px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  transition: all 300ms ease;
}
.single-info:hover {
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -3px, 0);
}
.single-info-img {
  position: relative;
  display: inline-block;
  left: 0;
  width: 200px;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.single-info-title {
  position: absolute;
  display: inline-block;
  margin: 0;
  font-family: Tahoma, "Microsoft YaHei", sans-serif;
  font-weight: normal;
  left: 235px;
  height: 30px;
  width: calc(100% - 300px);
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.single-info-text {
  position: absolute;
  top: 70px;
  left: 235px;
  height: calc(100% - 70px);
  width: calc(100% - 300px);
  font-size: small;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
