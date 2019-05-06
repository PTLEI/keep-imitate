<template>
  <div class="moveshow">
    <div class="header-pic">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveName: "腹肌激活",
      moveStep: [
        "平躺在瑜伽垫上，双脚并拢，屈膝抬腿的同时将臀部略微抬起，下背部用力贴紧地面",
        "绷紧身体，肩部略微离地，同时上下振动双手刺激腹肌收紧"
      ],
      breathe: ["全程保持均匀呼吸"],
      moveFeeling: ["腹部始终紧绷，同时会逐渐产生灼烧感"],
      commonMistake: [
        "错误：用力伸头，导致颈部疼痛",
        "解决：下颚始终贴紧颈部，同时后缩颈部"
      ],
      movePic: "/static/img/MoveShow/1500626509026.jpg"
    };
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
