<template>
  <el-carousel :height="calHeight" :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in imgInfo" :key="index">
      <div class="carousel-img" :style="{'background-image': 'url(' + item.src + ')'}"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ["page", "height"],
  data() {
    return {
      calHeight: this.height,
      imgInfo: [
        {
          src: "/static/img/carousel1.jpg"
        },
        {
          src: "/static/img/carousel2.jpg"
        },
        {
          src: "/static/img/carousel3.jpg"
        },
        {
          src: "/static/img/carousel4.jpg"
        }
      ]
    };
  },
  created() {
    if (this.page === 2) {
      this.imgInfo = [
        {
          src: "/static/img/carousel11.jpg"
        },
        {
          src: "/static/img/carousel12.jpg"
        },
        {
          src: "/static/img/carousel13.jpg"
        },
        {
          src: "/static/img/carousel14.jpg"
        }
      ];
    }
  }
};
</script>

<style>
.el-carousel {
  width: 100%;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-img {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>