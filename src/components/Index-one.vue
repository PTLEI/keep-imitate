<template>
    <div id="Index-myone">
        <carousel />
        <section class="training-index">
          <h3>量体裁衣 & 多种健身训练供你选择</h3>
          <h4>训练计划针对不同人群、各种器械和阶段健身目标组合编排，适用最广泛的健身场景。</h4>
          <div class="training-wrap" style="background-image: url(static/img/background-img/storebg.jpg);">
              <div class="training-block">
                  <a href="#/LesShow" class="training-item">
                      <div class="training-detail" style="background-image: url(static/img/index_img1.jpg)">
                          <div class="training-title">瘦腿训练</div>
                          <div style="text-align: left">13分钟 49千卡</div>
                          <div class="training-population">48，385，041人训练</div>
                      </div>
                  </a>
                  <a href="#/LesShow" class="training-item">
                      <div class="training-detail" style="background-image: url(static/img/index_img2.jpg)">
                          <div class="training-title">马甲线养成</div>
                          <div style="text-align: left">12分钟 61千卡</div>
                          <div class="training-population">49，252，615人训练</div>
                      </div>
                  </a>
                  <a href="#/LesShow" class="training-item">
                      <div class="training-detail" style="background-image: url(static/img/index_img3.jpg)">
                          <div class="training-title">瑜伽·身体韵律</div>
                          <div style="text-align: left">32分钟 135千卡</div>
                          <div class="training-population">928，978人训练</div>
                      </div>
                  </a>
              </div>
              <div class="">

              </div>
          </div>
        </section>
        <section class="run-index">
           <h3>户外跑步 & 精准跑步记录，让你的跑步更加系统</h3>
           <h4>精准跑步路线记录，跑前热身与跑后拉伸，Keep 提供更加完善和专业的跑步指导。</h4>
           <div class="run-wrap"  style="background-image: url(static/img/background-img/runbg.jpg);">
               <div class="run-wrap-inner">
                   <div class="run-block">
                        <div class="run-speed"><img src="static/img/index_img4.jpg" ></div>
                        <div class="run-frequency"><img src="static/img/runchart.png" ></div>
                    </div>
               </div>
           </div>
        </section>
        <section class="community-index">
            <h3>运动社区 & 分享健身成果，一起进步</h3>
            <h4>拍照记录每一天的变化，分享好友相互勉励，在 Keep 健身不再是孤独的坚持。</h4>
            <div class="community-wrap">
                <a href="#" class="community-entry">
                    <div>你好  </div>
                </a>
                <a href="#" class="community-entry"></a>
                <a href="#" class="community-entry"></a>
                <a href="#" class="community-entry"></a>
                <a href="#" class="community-entry"></a>
                <a href="#" class="community-entry"></a>
            </div>
        </section>
        <!-- <section class="shop-index">
            <h3>品牌装备 & 商城，伴你尽兴挥汗</h3>
            <h4>Keep 品牌服饰、器械及智能装备，打破 App 边界成为你触手可及的运动伙伴。</h4>
            <div class="shop-wrap" style="background-image: url(static/img/background-img/storebg.jpg);">
                <div class="shop-wrap-inner">
                    <div class="shop-pic1"></div>
                    <div class="shop-pic2"></div>
                    <div class="shop-btn"></div>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script>
import carousel from '@/components/Carousel'
export default {
    components: {
        carousel,
    }
}
</script>

<style scoped>
h3,h4{
    width: 100%;
    text-align: center;
    color: #584f60;
}
h4{
    opacity: 0.5;
}

.training-wrap,
.run-wrap,
.shop-wrap{
    position: relative;
    height: 636px;
    margin: 20px 0;
    padding: 0 10%;
    background-color: #5e5566;
}
.community-wrap{
    position: relative;
    height: 636px;
    margin: 20px 0;
    background-color: #5e5566;
}

/* 训练块 *************************************/
.training-block{
    position: relative;
    top: -20px;
    width: 200px;
    height: 100%;
    /* border: 2px solid greenyellow; */
}
.training-item{
    position: relative;
    display: block;
    height: 33%;
    width: 300px;
    /* background-image: url('../../static/img/index_img1.jpg'); */
}
.training-title{
    font-size: 20px;
    margin-bottom: 6px;
    font-weight: bold;
    text-align: left
}
.training-population{
    position: absolute;
    bottom: 18px;
    left: 18px;
}
a .training-detail{
    position: relative;
    height: 100%;
    width: 100%;
    color: #fff;
    display: block;
    font-size: 14px;
    box-sizing: border-box;
    margin-top: 10px;
    background-size: 100%;
    padding: 20px;
}


/* 跑步块 ***********************************/
.run-wrap-inner{
    position: relative;
    width: 100%;
    height: 100%;
}

.run-block{
    position: absolute;
    top: -20px;
    right: 0;
    width:390px;
    max-height: 636px;
    height: 100%;
}
.run-speed{
    position: relative;
    height: 50%;
    width: 100%;
    /* transform: scale(1.2,1.2); */
    background-color: rgb(153, 146, 158);
    border-radius: 6px;
}
.run-speed img{
    width: 100%;
    height: 100%;
    border-radius: 6px;
}
.run-frequency{
    position: relative;
    height: 50%;
    width: 100%;
    /* transform: scale(1.2,1.2); */
    background-color: rgb(153, 146, 158);
    border-radius: 6px;
    margin-top: 10px;
}
.run-frequency img{
    width: 100%;
    height: 100%;
    border-radius: 6px;
}

/* 社区块****************************** */
.community-entry{
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 3px 3px;
    box-sizing: border-box;
}
.community-entry:nth-child(1){
    width: 21.45%;
    height: 58.49%;
    left: 3px;
    top: 3px;
}
.community-entry:nth-child(2){
    width: 21.45%;
    height: 38.67%;
    left: 3px;
    bottom: 3px;
}
.community-entry:nth-child(3){
    width: 26.38%;
    height: 48.2%;
    left: 22.08%;
    top: 3px;
}
.community-entry:nth-child(4){
    width: 26.38%;
    height: 48.2%;
    left: 49.00%;
    top: 3px;
}
.community-entry:nth-child(5){
    width: 23.19%;
    height: 41.19%;
    left: 75.69%;
    top: 3px;
}
.community-entry:nth-child(6){
    width: 23.19%;
    height: 356px;
    left: 75.69%;
    bottom: 3px;
}

/* 商城块********************************** */
.shop-wrap-inner{
    position: relative;
    width: 100%;
    height: 100%;
}
.shop-pic1{
    position: absolute;
    background-color: rgb(153, 146, 158);
    margin-top: 6px;
    left: 0;
    height: 70%;
    width: 60%;
}
.shop-pic2{
    position: absolute;
    background-color: rgb(153, 146, 158);
    top:73%;
    margin:auto;
    width: 100%;
    height: 23%;
}
.shop-btn{
    position: absolute;
    background-color: rgb(153, 146, 158);
    margin-top: 6px;
    right: 0;
    height: 70%;
    width: 39%;
}

/* ********************************************************** */
a:link,a:visited{
    display:block;
    font-weight:bold;
    font-size:14px;
    font-family:Verdana, Arial, Helvetica, sans-serif;
    color:#FFFFFF;
    text-align:center;
    text-decoration:none;
    background-color: rgb(153, 146, 158);
}
a:hover,a:active{
    background-color: aquamarine;
    transform:scale(1.1,1.1);
}


/* style="background-image: url(static\img\Index_img1.jpg)" */

</style>
