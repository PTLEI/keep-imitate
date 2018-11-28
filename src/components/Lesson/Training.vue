<template>
    <div id="training-class">
        <div class="training-class-content">
            <div class="title">
                <h2>课程分类</h2>
                <p>丰富的训练课程，规范你的训练过程</p>
            </div>
            <ul class="class-list clearfix">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
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
    margin: 0;
    padding: 0;
}
.class-list li{
    list-style: none;
    width: 24%;
    height: 300px;
    float: left;
    margin:0 1% 10px 0;
    background: #8f1a47ad;
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


/* clearfix */
.clearfix::after{
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
}
</style>
