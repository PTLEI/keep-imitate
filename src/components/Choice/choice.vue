<template>
  <div class="choice-content">
    <carousel class="choice-carousel" :page="2" height="400px"></carousel>
    <div class="page">
      <section class="wrapper">
        <div class="title">推荐阅读</div>
        <ul class="entries clearfix">
          <li v-for="(choiceInfo,index) in choice" :key="index">
            <a href="#" class="imgshow">
              <img v-lazy="choiceInfo.src">
              <span>{{choiceInfo.content}}</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="wrapper">
        <div class="title">健身知识</div>
        <ul class="entries clearfix">
          <li v-for="(choiceInfo,index) in choice2" :key="index">
            <a href="#" class="imgshow">
              <img v-lazy="choiceInfo.src">
              <span>{{choiceInfo.content}}</span>
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
  name: "choice",
  components: {
    carousel
  },
  data() {
    return {
      choice: [
        {
          src: "/static/img/carousel2.jpg",
          content: "内容展示3！！！！！"
        },
        {
          src: "/static/img/carousel4.jpg",
          content: "内容展示4！！！！！"
        }
      ],
      choice2: [
        {
          src: "/static/img/carousel1.jpg",
          content: "内容展示1?????????"
        },
        {
          src: "/static/img/carousel3.jpg",
          content: "内容展示2??????????"
        }
      ],
      choice3: [
        {
          src: "/static/img/carousel3.jpg",
          content:
            "这是最下边的一组了!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        },
        {
          src: "/static/img/carousel2.jpg",
          content: "这是最下边的一组了"
        }
      ]
    };
  },
  mounted() {
    // this.$api.test();
    // this.$api.getChoiceList();
  },
  methods: {
    clickTest() {
      this.$api.test();
    }
  }
};
</script>

<style scoped>
.choice-content {
  display: block;
  margin: 0 auto;
  width: 800px;
}
.wrapper {
  display: block;
  position: relative;
  height: auto;
  margin: 1.2rem 0;
  padding: 0.2rem 1.4rem 1.4rem;
  background: rgba(6, 31, 255, 0.151);
}
.title {
  position: relative;
  display: block;
  color: black;
  font-weight: normal;
  padding: 1.2rem 0 1.2rem;
}
.entries {
  position: relative;
  display: block;
  padding: 0;
  margin: 0;
}
li {
  display: block;
  background: rgba(15, 226, 110, 0.445);
  list-style: none;
  width: 48.2%;
  float: left;
  margin-top: 2.4rem;
  text-align: center;
}
.entries li:nth-child(2n) {
  float: right;
}

/* clearfix */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}

.choice-carousel {
  width: 100%;
}
.carousel-img {
  height: 100%;
}
.imgshow {
  display: block;
}
img {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  font-size: 16px;
  color: #584f60;
}
.content-span {
  height: 20px;
  width: 336px;
  overflow: hidden;
}
</style>
