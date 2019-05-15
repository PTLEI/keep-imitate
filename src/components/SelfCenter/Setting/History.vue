<template>
  <div id="History">
    <div class="top-title">训练历程</div>
    <div class="history-body">
      <ul class="train-wrap clearfix">
        <li
          v-for="(item, index) in historyList"
          class="single-history"
          :style="{backgroundImage: 'url(' + item.picUrl + ')'}"
          @click="clickHistory(item.trainId)"
        >
          <div class="mark"></div>
          <div class="Info">
            <h3>{{item.title}}</h3>
            <p>{{item.count}}个课程</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "/static/img/TrainingIndex/1519455021015_750x700.jpg",
      historyList: [{}, {}, {}, {}]
    };
  },
  mounted() {
    console.log(this.$store.state.currentUser.userId);
    this.$api
      .getHistory(this.$store.state.currentUser.userId)
      .then(res => {
        this.historyList = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    clickHistory(id) {
      this.$router.push({ path: `/LessonList/${id}` });
    }
  }
};
</script>

<style scoped>
#History {
  float: left;
  margin-left: 48px;
  width: 840px;
  box-sizing: border-box;
}
.top-title {
  font-size: 16px;
  font-weight: 700;
  font-family: Microsoft yahei;
}
.history-body {
  margin: 24px 0;
  border: 1px groove rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
.train-wrap {
  position: relative;
  padding: 0;
  margin: 0 auto;
  /* text-align: center; */
}
.single-history {
  list-style: none;
  position: relative;
  display: inline-block;
  height: 200px;
  width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 20px;
  box-sizing: border-box;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  transition: all 300ms ease;
}
.single-history:hover {
  cursor: pointer;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -3px, 0);
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
.Info h3 {
  color: #fff;
}
.Info p {
  color: #999;
}
</style>
