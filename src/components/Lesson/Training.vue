<template>
  <div id="training-class">
    <div class="training-class-content">
      <div class="title">
        <h2>课程分类</h2>
        <p>丰富的训练课程，规范你的训练过程</p>
      </div>
      <ul class="class-list clearfix">
        <el-button type="text" class="main-content">
          <li
            class="trainlist"
            v-for="(item, index) in trainingInfo"
            :key="index"
            :style="{backgroundImage:'url(' + item.picUrl + ')'}"
            @click="clickTrain(item.trainId)"
          >
            <div class="mark"></div>
            <div class="Info">
              <h3>{{item.title}}</h3>
              <p>{{item.count}}个课程</p>
            </div>
          </li>
        </el-button>
      </ul>
      <div class="check-all">
        <p>没有想要的分类</p>
        <el-button @click="checkAllTrain">全部课程</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      trainingInfo: []
    };
  },
  mounted() {
    this.$api
      .getTrainList()
      .then(res => {
        this.trainingInfo = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    clickTrain(id) {
      this.$router.push({ path: `/LessonList/${id}` });
    },
    checkAllTrain() {
      this.$api
        .getTrainList()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
div {
  display: block;
  margin: 0;
}
#training-class {
  margin: 0;
}
.training-class-content {
  margin: 0 auto;
  width: 900px;
}
.title {
  width: 100%;
  text-align: center;
  margin: 20px auto;
}
.title h2 {
  color: #24c789;
}
.title p {
  font-size: 16px;
  margin: 0 auto;
  color: #999;
}

/* 课程列表 */
.class-list {
  position: relative;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}
.main-content {
  width: 100%;
  color: #ffffff;
}
.class-list li {
  list-style: none;
  width: 25%;
  height: 200px;
  float: left;
}
.trainlist {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.mark {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.Info {
  position: absolute;
  left: 0;
  top: 0;
  margin: auto 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Info p {
  color: #999;
}

/* 查看全部课程Button */
.check-all {
  display: block;
  text-align: center;
  padding-bottom: 36px;
}
.check-all p {
  color: #999;
  font-size: 12px;
  margin-bottom: 12px;
}
.check-all .el-button {
  display: inline-block;
  width: 150px;
  border: 1px solid #24c789;
  font-size: 12px;
  color: #24c789;
  border-radius: 33px 33px;
  text-decoration: none;
}
</style>
