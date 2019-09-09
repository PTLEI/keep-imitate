<template>
  <div id="training-list-content">
    <ul class="training-list">
      <li v-for="(item, index) in trainingList" :key="index" class="single-list">
        <el-button type="text" class="single-list-button" @click="clickLesson(item.lessonId)">
          <div class="background-img" :style="{backgroundImage:'url(' + item.picUrl + ')'}">
            <div class="single-title">
              <span class="single-title-text">{{item.title}}</span>
              <span class="single-lesson-count">{{item.count}}节</span>
            </div>
          </div>
          <div class="single-info">
            <span class="single-info-level">level: {{item.level}}</span>
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
      trainingList: []
    };
  },
  methods: {
    clickLesson(id) {
      this.$router.push({ path: `/LesShow/${id}` });
    }
  },
  mounted() {
    this.$api
      .getLessonList(this.$route.params.trainId)
      .then(res => {
        this.trainingList = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
#training-list-content {
  width: 100%;
  background: #fafafa;
}
.training-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  margin: 0 auto;
  padding: 20px 0 0;
  width: 860px;
}
.single-list {
  list-style: none;
  width: 426px;
  background-color: white;
  margin-top: 20px;
  box-sizing: border-box;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  transition: all 300ms ease;
}
.single-list:hover {
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -3px, 0);
}
.single-list:hover .background-img {
  border-radius: 0px;
}
.single-list-button {
  width: 100%;
  height: 300px;
  padding: 0;
  border: 0;
}
.background-img {
  position: relative;
  width: 100%;
  height: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}
.single-title {
  position: absolute;
  height: 36%;
  width: 100%;
  left: 0;
  bottom: 0;
  color: white;
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
  top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.single-lesson-count {
  position: absolute;
  left: 20px;
  top: 50px;
}

.single-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 20px;
  height: 20%;
  color: #584f60;
}
.single-info-level {
  font-size: 15px;
  font-weight: bold;
}
</style>
