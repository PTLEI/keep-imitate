<template>
    <el-container>
        <el-header :style="{'background-image': 'url(' + headerImgUrl + ')', 'height': '280px'}">
            <div class="inner">
                <h4>瘦腿训练</h4>
                <p>本课程进行了为期 4 周的效果测试，一共 183 人参加。4 周后瘦腿成功率高达 69.7%，平均每人瘦了 2.19cm，相当于牛仔裤小了 2 个码，效果显著。如果配合减脂训练、饮食控制，还能让瘦腿效果更明显。</p>
                <p>1节</p>
                <p>22683910 人训练</p>
            </div>
            <div class="shadow"></div>
        </el-header>
        <el-main >
            <div>计划训练  第一节</div>
            <div class="step">
                <img src="https://static1.gotokeep.com/picture/frame/1501126047137.jpg">
                <p>侧卧左侧提膝</p>
                <p>1x20</p>
            </div>
            <div class="step">
                <img src="https://static1.gotokeep.com/picture/frame/1501126047137.jpg">
                <p>侧卧左侧提膝</p>
                <p>1x20</p>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            headerImgUrl: 'static/img/index_img1.jpg',

        }
    }
}
</script>

<style scoped>
    .el-container {
        width: 70%;
        height: 1000px;
        margin: 10px auto;
    }
    .el-header {
        margin-top: 15px;
        height: 280px;
        background-size: cover;
        background-position: center center;
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .inner {
        padding: 85px 25px 25px;
        color: #fff;
        text-align: left;
        z-index: 2;
    }
    .shadow {
        background-color: rgba(0,0,0,0.1);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .step:nth-child(2n+1) {
        width: 340px;
        margin-right: 35px;
        position: relative;
        left: 15px;
        display: inline-block;
    }
    .step:nth-child(2n) {
        margin: 0 0 35px;
        width: 340px;
        display: inline-block;
    }
</style>
