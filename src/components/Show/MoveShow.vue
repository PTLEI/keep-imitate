<template>
  <div class="moveshow">
    <button @click="test">test</button>
    {{moveDetail.commonMistake}}
    <!-- <div class="header-pic">
      <img :src="movePic">
    </div>
    <div class="content">
      <h1 class="name">{{moveName}}</h1>
      <h4>步骤</h4>
      <ul>
        <li v-for="(item, index) in moveStep">{{item}}</li>
      </ul>
      <h4>呼吸</h4>
      <ul>
        <li v-for="(item, index) in breathe">{{item}}</li>
      </ul>
      <h4>动作感觉</h4>
      <ul>
        <li v-for="(item, index) in moveFeeling">{{item}}</li>
      </ul>
      <p></p>
      <p></p>
      <h4>常见错误</h4>
      <ul>
        <li v-for="(item, index) in commonMistake">{{item}}</li>
      </ul>

      <h4>细节图示</h4>
      <div class="img">
        <img :src="movePic">
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveDetail: {}
    };
  },
  methods: {
    test() {
      console.log(typeof this.moveDetail.commonMistake);
      console.log(this.moveDetail.commonMistake);
    }
  },
  created() {
    this.$api
      .getMoveDetail(this.$route.params.movementId)
      .then(res => {
        this.moveDetail = res.data.data[0];
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
