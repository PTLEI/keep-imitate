<template>
  <div id="smoke-demo">
    <section id="smoke-container">
      <video id="smoke-video" src="/static/video/Demo/Smoke.mp4" autoplay muted loop></video>
      <h1 class="title-text">
        <span>K</span>
        <span>E</span>
        <span>E</span>
        <span>P</span>
        <span>坚</span>
        <span>持</span>
        <span>即</span>
        <span>不</span>
        <span>悔</span>
      </h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "smoke-demo",
  props: ["page", "height"],
  data() {
    return {};
  },
  mounted() {
    let video = document.getElementById("smoke-video");
    let videoContainer = document.getElementById("smoke-container");
    video.width = videoContainer.clientWidth;
    videoContainer.style.height = `${window.innerHeight - 60}px`;
  }
};
</script>

<style>
#smoke-demo {
  position: relative;
}
#smoke-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}
#smoke-container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #f00,
    #c03639,
    #ff0,
    #30b08f,
    #4ab7bd,
    #409eff,
    #e65da1
  );
  mix-blend-mode: color;
  pointer-events: none;
}
.title-text {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: 5em;
  letter-spacing: 0.2em;
  pointer-events: none;
}
.title-text span {
  opacity: 0;
  display: inline-block;
  animation: Flip 1s linear forwards;
}
@keyframes Flip {
  0% {
    opacity: 0;
    transform: rotateY(90deg);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: rotateY(0);
    filter: blur(0);
  }
}
.title-text span:nth-child(1) {
  animation-delay: 0s;
}
.title-text span:nth-child(2) {
  animation-delay: 0.5s;
}
.title-text span:nth-child(3) {
  animation-delay: 1s;
}
.title-text span:nth-child(4) {
  animation-delay: 1.5s;
}
.title-text span:nth-child(5) {
  animation-delay: 2s;
}
.title-text span:nth-child(6) {
  animation-delay: 2.25s;
}
.title-text span:nth-child(7) {
  animation-delay: 2.75s;
}
.title-text span:nth-child(8) {
  animation-delay: 3.5s;
}
.title-text span:nth-child(9) {
  animation-delay: 3.75s;
}
</style>