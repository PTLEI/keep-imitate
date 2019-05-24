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
          image: "/static/img/InformationPic/thor.png",
          title: "“令人唏嘘、自暴自弃、大腹便便”的雷神是如何练成的？",
          text:
            "《复仇者联盟3》上映之初几乎场场爆满，而饰演雷神的Chris Hemsworth凭借大肚腩再次成为亮点。但真正的雷神可是英俊潇洒，线条感十足的。Chris为了做好雷神，付出了难以想象的汗水。"
        },
        {
          image: "/static/img/InformationPic/marvel.png",
          title: "9个月的魔鬼训练造就今日的惊奇队长",
          text:
            "美国电影《复仇者联盟4》票房屡破记录，得观众热烈支持，主角Brie Larson（贝儿·娜森）功不可没，不过要成为惊奇队长并不容易，故她在拍摄前，曾实行一连串地狱式训练，让自己变得健硕，配得上这个角色。"
        },
        {
          image: "/static/img/InformationPic/taimei.png",
          title: "15个月狂减50磅！台妹分享4大减肥秘诀成功健康瘦身！！！",
          text:
            "每个女生都爱美，减肥尤其重要，台湾有位YouTube朴梨JOU就公开自己在15个月内狂减23kg的经历，遵循4大要点，让自己成功健康减肥不降cup ，一起来看看她到底如何做到吧！"
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
  background-color: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -3px, 0);
}
.single-info-img {
  position: relative;
  display: inline-block;
  left: 0;
  width: 250px;
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
  left: 285px;
  height: 30px;
  width: calc(100% - 350px);
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.single-info-text {
  position: absolute;
  top: 70px;
  left: 285px;
  height: calc(100% - 70px);
  width: calc(100% - 350px);
  font-size: small;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
