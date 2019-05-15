<template>
  <div id="my-move">
    <div class="title">
      <h2>动作库</h2>
      <p>动作的规范不但可以更高效的达到训练目的更能减少运动损伤</p>
    </div>
    <ul class="move-list clearfix">
      <li v-for="(item, index) in partList" :key="index">
        <router-link :to="{ name: 'movementlist', params: {bodyParts: item.partName}}">
          <div class="img">
            <img :src="item.picUrl">
          </div>
          <div class="name">{{item.bodyString}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      moveName: "",
      imgSrc: "",
      moveRouter: "",
      partList: [
        {
          partName: "pecs",
          bodyString: "胸部",
          picUrl: "static/img/55963b0e73800000.png"
        },
        {
          partName: "back",
          bodyString: "背部",
          picUrl: "static/img/55963ab1a4c00000.png"
        },
        {
          partName: "shoulder",
          bodyString: "肩部",
          picUrl: "static/img/55963b1db3c00000.png"
        },
        {
          partName: "arm",
          bodyString: "手臂",
          picUrl: "static/img/559639a46e400000.png"
        },
        {
          partName: "neck",
          bodyString: "颈部",
          picUrl: "static/img/55963afccdc00000.png"
        },
        {
          partName: "belly",
          bodyString: "腹部",
          picUrl: "static/img/55963b3fc0400000.png"
        },
        {
          partName: "waist",
          bodyString: "腰部",
          picUrl: "static/img/55963b2cc0800000.png"
        },
        {
          partName: "buttock",
          bodyString: "臀部",
          picUrl: "static/img/559639594f800000.png"
        },
        {
          partName: "leg",
          bodyString: "腿部",
          picUrl: "static/img/55963ad31b400000.png"
        },
        {
          partName: "wholebody",
          bodyString: "全身",
          picUrl: "static/img/559638c467800000.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
#my-move {
  margin: 0 auto;
  width: 900px;
  background-color: white;
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

.move-list {
  width: 768px;
  margin: 25px auto 15px;
  padding: 0;
}
.move-list li {
  width: 20%;
  margin-bottom: 65px;
  float: left;
  text-align: center;
  list-style-type: none;
}

.move-list li a {
  display: block;
  position: relative;
  text-decoration: none;
}
.move-list li a .img {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  display: block;
  max-width: 86px;
}
.move-list li a .name {
  position: relative;
  margin-top: 20px;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #584f60;
  /* font-size: 1.4rem; */
}

/* clearfix */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
</style>
