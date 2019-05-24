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
        <a :href="'#/MoveShow/' + item.movementId" target="_blank">
          <div
            class="movement-background"
            :style="{'background-image': 'url(' + item.picUrl + ')'}"
          ></div>
          <p class="movement-name">{{item.name}}</p>
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
      moveList: [
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
        }
      ]
    };
  },
  computed: {
    moveAmount: function() {
      return this.moveList.length;
    },
    moveTitle: function() {
      var bodyPart = "";
      switch (this.$route.params.bodyParts) {
        case "pecs":
          bodyPart = "胸部";
          break;
        case "back":
          bodyPart = "背部";
          break;
        case "shoulder":
          bodyPart = "肩部";
          break;
        case "arm":
          bodyPart = "手臂";
          break;
        case "neck":
          bodyPart = "颈部";
          break;
        case "belly":
          bodyPart = "腹部";
          break;
        case "waist":
          bodyPart = "腰部";
          break;
        case "buttock":
          bodyPart = "臀部";
          break;
        case "leg":
          bodyPart = "腿部";
          break;
        case "wholebody":
          bodyPart = "全身";
          break;
      }
      return bodyPart;
    }
  },
  mounted() {
    let temp = 0;
    if (
      this.$store.getters.currentUser &&
      this.$store.getters.currentUser.height
    ) {
      let height = this.$store.getters.currentUser.height;
      let weight = this.$store.getters.currentUser.weight;
      let BMI = Math.floor((weight / (height * height)) * 10) / 10;
      if (20 <= BMI && BMI < 21) temp = 5;
      else if ((18.5 <= BMI && BMI < 20) || (21 <= BMI && BMI < 23)) temp = 4;
      else if ((16 <= BMI && BMI < 18.5) || (23 <= BMI && BMI < 25)) temp = 3;
      else if (25 <= BMI && BMI < 30) temp = 2;
      else temp = 1;
    }
    let level = this.$store.getters.currentUser && temp;
    this.$api
      .getMoveList(this.$route.params.bodyParts, level)
      .then(res => {
        this.moveList = res.data.data;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
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
