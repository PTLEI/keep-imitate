<template>
  <el-carousel height="500px" :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in imgInfo" :key="index">
      <div class="carousel-img">
        <img v-lazy="item.src">
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      imgInfo:[{
        src: "/static/img/carousel1.jpg"
      }, {
        src: "/static/img/carousel2.jpg" 
      }, {
        src: "/static/img/carousel3.jpg"
      }, {
        src: "/static/img/carousel4.jpg"
      }]
    }
  }
}
</script>

<style>
  .el-carousel{
    width: 80%;
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
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carousel-img{
    width: 100%;
  }
</style>