<template>
  <div class="moveshow">
    <div class="header-pic">
      <img :src="moveDetail.picUrl">
    </div>
    <div class="content">
      <h1 class="name">{{moveDetail.name}}</h1>
      <h4>步骤</h4>
      <ul>
        <li v-for="(item, index) in moveDetail.moveStep">{{item}}</li>
      </ul>
      <h4>呼吸</h4>
      <ul>
        <li v-for="(item, index) in moveDetail.breathe">{{item}}</li>
      </ul>
      <h4>动作感觉</h4>
      <ul>
        <li v-for="(item, index) in moveDetail.moveFeeling">{{item}}</li>
      </ul>
      <p></p>
      <p></p>
      <h4>常见错误</h4>
      <ul>
        <li v-for="(item, index) in moveDetail.commonMistake">{{item}}</li>
      </ul>
      <h4>细节图示</h4>
      <div class="img">
        <!-- <img :src="movePic"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveDetail: {}
    };
  },
  methods: {},
  created() {
    this.$api
      .getMoveDetail(this.$route.params.movementId)
      .then(res => {
        this.moveDetail = res.data.data[0];
        this.moveDetail.moveStep = JSON.parse(this.moveDetail.moveStep);
        this.moveDetail.breathe = JSON.parse(this.moveDetail.breathe);
        this.moveDetail.moveFeeling = JSON.parse(this.moveDetail.moveFeeling);
        this.moveDetail.commonMistake = JSON.parse(
          this.moveDetail.commonMistake
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.moveshow {
  margin: 0 auto;
  width: 900px;
}
.header-pic {
  background: #eee;
}

.name {
  font-size: 24px;
  margin: 45px 0 56px;
  position: relative;
}
.name::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -20px;
  width: 16px;
  border-bottom: 5px solid #24c789;
}
.content {
  text-align: left;
}
.content ul {
  padding: 0;
  list-style-position: inside;
}
.content ul li {
  font-size: 14px;
}
.img {
  position: relative;
  width: 230px;
}
img {
  width: 100%;
  height: 100%;
}
.header-pic {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
