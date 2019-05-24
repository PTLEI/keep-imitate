<template>
  <div class="information-content">
    <carousel class="information-carousel" :page="2" height="400px"></carousel>
    <div class="page">
      <section class="wrapper">
        <div class="title">推荐阅读</div>
        <router-link to="/InformationList" class="more-information">更多+</router-link>
        <ul class="entries clearfix">
          <li v-for="(informationInfo,index) in information" :key="index">
            <a href="#" class="imgshow">
              <img v-lazy="informationInfo.src">
              <p class="info-text">{{informationInfo.title}}</p>
            </a>
          </li>
        </ul>
      </section>
      <section class="wrapper">
        <div class="title">健身知识</div>
        <router-link :to="{ name: 'InformationList'}" class="more-information">更多+</router-link>
        <ul class="entries clearfix">
          <li v-for="(informationInfo,index) in information2" :key="index">
            <a href="#" class="imgshow">
              <img v-lazy="informationInfo.src">
              <p>{{informationInfo.title}}</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import carousel from "@/components/Carousel";
import Vue from "Vue";
import Bus from "../Bus";
export default {
  name: "information",
  components: {
    carousel
  },
  data() {
    return {
      information: [
        {
          src: "/static/img/InformationPic/marvel.png",
          title: "9个月的魔鬼训练造就今日的惊奇队长",
          content:
            "美国电影《复仇者联盟4》票房屡破记录，得观众热烈支持，主角Brie Larson（贝儿·娜森）功不可没，不过要成为惊奇队长并不容易，故她在拍摄前，曾实行一连串地狱式训练，让自己变得健硕，配得上这个角色。"
        },
        {
          src: "/static/img/InformationPic/taimei.png",
          title: "15个月狂减50磅！台妹分享4大减肥秘诀成功健康瘦身！！！",
          content:
            "美国电影《复仇者联盟4》票房屡破记录，得观众热烈支持，主角Brie Larson（贝儿·娜森）功不可没，不过要成为惊奇队长并不容易，故她在拍摄前，曾实行一连串地狱式训练，让自己变得健硕，配得上这个角色。"
        }
      ],
      information2: [
        {
          src: "/static/img/carousel1.jpg",
          title: "我跨过山和大海，却磨坏了膝盖！",
          content:
            "内容展示1测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
        },
        {
          src: "/static/img/InformationPic/thor.png",
          title: "“令人唏嘘、自暴自弃、大腹便便”的雷神是如何练成的？",
          content:
            "内容展示2测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
        }
      ]
    };
  },
  mounted() {
    // this.$api.test();
    // this.$api.getinformationList();
  },
  methods: {
    clickTest() {
      this.$api.test();
    }
  }
};
</script>

<style scoped>
.information-content {
  display: block;
  margin: 0 auto;
  width: 800px;
}
.page {
  background: white;
}
.wrapper {
  display: block;
  position: relative;
  height: auto;
  margin: 1.2rem 0;
  padding: 0.2rem 1.4rem 1.4rem;
}
.title {
  position: relative;
  display: inline-block;
  color: black;
  font-weight: normal;
  padding: 1.2rem 0 1.2rem;
}
.more-information {
  position: absolute;
  right: 12px;
  padding: 1.2rem 0 1.2rem;
  color: #8c8c8c;
}
.entries {
  position: relative;
  display: block;
  padding: 0;
  margin: 0;
}
li {
  display: block;
  list-style: none;
  width: 48.2%;
  float: left;
  margin-top: 2.4rem;
  text-align: center;
}
.entries li:nth-child(2n) {
  float: right;
}
.entries p {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  text-indent: 2em;
  text-align: left;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* text-overflow: ellipsis; */
}

/* clearfix */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}

.information-carousel {
  width: 100%;
}
.carousel-img {
  height: 100%;
}
.imgshow {
  display: block;
  height: 270px;
  transition: all 300ms ease;
}
.imgshow:hover {
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -3px, 0);
}
.imgshow img {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center center;
}

a {
  /* text-decoration: none; */
  font-size: 16px;
  color: #584f60;
}
a:hover {
  color: #e33a3d;
}
</style>
