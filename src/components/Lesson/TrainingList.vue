<template>
  <div id="training-list-content">
    <ul class="training-list">
      <li v-for="(item, index) in trainingList" :key="index" class="single-list">
        <el-button type="text" class="single-list-button" @click="clickTraining">
          <div class="background-img" :style="{backgroundImage:'url(' + item.backgroundImg + ')'}">
            <div class="single-title">
              <span class="single-title-text">{{item.title}}</span>
            </div>
          </div>
          <div class="single-info">
            <span class="single-info-count">{{item.count}}</span>
            <span class="single-info-level">{{item.count}}</span>
          </div>
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trainingList: [
        {
          title: "柔韧性提升",
          count: "1个课程",
          backgroundImg: "/static/img/TrainingIndex/1517217173158_315x315.jpg"
        },
        {
          title: "热身放松",
          count: "1个课程",
          backgroundImg: "/static/img/TrainingIndex/1519454845709_750x700.jpg"
        },
        {
          title: "伤痛预防",
          count: "1个课程",
          backgroundImg: "/static/img/TrainingIndex/1519455021015_750x700.jpg"
        },
        {
          title: "心肺激活",
          count: "1个课程",
          backgroundImg: "/static/img/TrainingIndex/1519888737768_315x315.png"
        }
      ]
    };
  },
  methods: {
    clickTraining() {
      this.$router.push({ path: "LesShow" });
    }
  }
};
</script>

<style scoped>
#training-list-content {
  width: 100%;
}
.training-list {
  margin: 0 auto;
  width: 900px;
}
.single-list {
  list-style: none;
  display: inline-block;
  width: 50%;
  background-color: white;
}
.single-list-button {
  width: 100%;
  height: 300px;
  padding: 5px;
}
.background-img {
  position: relative;
  width: 100%;
  height: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
}
.single-title {
  position: absolute;
  height: 20%;
  width: 100%;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 25%,
    rgba(0, 0, 0, 0.2) 75%,
    rgba(0, 0, 0, 0.4) 100%
  );
}
.single-title-text {
  position: absolute;
  left: 20px;
  top: 12px;
  font-size: 20px;
  color: white;
  font-weight: bold;
}
.single-info {
  position: relative;
  width: 100%;
  height: 20%;
  color: #584f60;
}
.single-info-count {
  position: absolute;
  left: 20px;
  top: 10px;
}
.single-info-level {
  position: absolute;
  left: 20px;
  top: 32px;
}
</style>
