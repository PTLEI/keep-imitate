<template>
  <footer class="my-footer">
    <a class="beian" href="http://www.beian.miit.gov.cn/">浙ICP备19038695号</a>
    <div class="footer-wrapper clearfix">
      <div class="info-left">
        <ul class="footer-list">
          <a href>关于我们</a>
          <a href="#">加入我们</a>
          <a href="#">训练课程</a>
        </ul>
        <ul class="footer-list">
          <a href="#">社区精选</a>
          <a href="#">社区规范</a>
          <a href="#">隐私政策</a>
        </ul>
      </div>
      <div class="info-right">
        <div class="info-test">
          哪有什么天生如此，只是我们天天坚持
          <br />自律给我自由
        </div>
        <div class="help"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.my-footer {
  width: 100%;
  position: relative;
  bottom: 0;
  /* margin-top: 20px;
  border-top: 1px solid #909399; */
}
.footer-wrapper {
  margin: 0 auto;
  width: 900px;
  text-align: center;
}

.info-left {
  float: left;
  text-align: center;
  height: 90px;
  vertical-align: middle;
}
.footer-list a {
  display: inline-block;
  text-decoration: none;
  font-size: 12px;
  color: #584f60;
  margin-right: 30px;
}

.info-right {
  float: right;
  text-align: center;
  vertical-align: middle;
  font-size: 10px;
  height: 90px;
  margin-right: 40px;
}
.info-test {
  display: inline-block;
}
.help {
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}

/* clearfix */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}

.beian {
  display: block;
  text-align: center;
  color: #584f60;
  font-size: 15px;
}
</style>
