<template>
    <div id="training-class">
        <div class="training-class-content">
            <div class="title">
                <h2>课程分类</h2>
                <p>丰富的训练课程，规范你的训练过程</p>
            </div>
            <ul class="class-list clearfix">
                <el-button type="text" style="width: 100%; color: #ffffff; padding: 0 auto" @click="clickTrain">
                <li class="trainlist" v-for="(item, index) in trainingInfo" :key="index" :style="{backgroundImage:'url(' + item.backgroundImg + ')'}">
                        <div class="mark"></div>
                        <div class="Info">
                            <h3>{{item.title}}</h3>
                            <p>{{item.count}}</p>
                        </div>
                    
                </li>
                </el-button>
            </ul>
            <div class="check-all">
                <p>没有想要的分类</p>
                <a href="">全部课程</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            trainingInfo: [{
                title: '柔韧性提升',
                count: '1个课程',
                backgroundImg: '/static/img/TrainingIndex/1517217173158_315x315.jpg',
            }, {
                title: '热身放松',
                count: '1个课程',
                backgroundImg: '/static/img/TrainingIndex/1519454845709_750x700.jpg',
            }, {
                title: '伤痛预防',
                count: '1个课程',
                backgroundImg: '/static/img/TrainingIndex/1519455021015_750x700.jpg',
            }, {
                title: '心肺激活',
                count: '1个课程',
                backgroundImg: '/static/img/TrainingIndex/1519888737768_315x315.png',
            }, {
                title: '力量激活',
                count: '1个课程',
                backgroundImg: '/static/img/TrainingIndex/1520240773072_315x315.jpg',
            }, {
                title: '燃脂训练',
                count: '1个课程',
                backgroundImg: '/static/img/TrainingIndex/1519888737768_315x315.png',
            }, {
                title: '形体改善',
                count: '1个课程',
                backgroundImg: '/static/img/TrainingIndex/1499681112983_375x375.jpg',
            }, {
                title: '形体矫正',
                count: '1个课程',
                backgroundImg: '/static/img/TrainingIndex/1510299776373_315x315.jpg',
            }],
        }
    },
    methods: {
        clickTrain() {
            this.$router.push({path: '/LesShow'})
        }
    }
}
</script>

<style scoped>
div{
    display: block;
    margin: 0;
}
.training-class-content{
    margin: 0 auto;
    width: 900px;
    background: rgb(207, 206, 206);
}
.title{
    width: 100%;
    text-align: center;
    margin: 20px auto;
}
.title h2{
    color: #24c789;
}
.title p{
    font-size: 16px;
    margin: 0 auto;
    color: #999;
}

.class-list{
    position: relative;
    text-align: center;
    margin: 0;
    padding: 0;
}
.class-list li{
    list-style: none;
    width: 23%;
    height: 200px;
    float: left;
    margin:0 1% 10px 0;
}
.trainlist {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.Info {
    padding-top: 30px;
}

.check-all{
    display: block;
    text-align: center;
    padding-bottom: 36px;
}
.check-all p{

    color: #999;
    font-size: 12px;
    margin-bottom: 12px;
}
.check-all a{
    display: inline-block;
    width: 150px;
    height: 33px;
    line-height: 33px;
    border: 1px solid #24c789;
    font-size: 12px;
    color: #24c789;
    border-radius: 33px 33px;
    text-decoration: none;
}
.mark {
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 2;
}

/* clearfix */
.clearfix::after{
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
}
</style>
