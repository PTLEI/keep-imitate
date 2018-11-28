<template>
    <footer class="my-footer">
        <div class="footer-wrapper clearfix">
            <div class="info-left">
                <ul class="footer-list">
                    <a href="">关于我们</a>
                    <a href="#">训练课程</a>
                    <a href="#">用户协议</a>
                </ul>
                <ul class="footer-list">
                    <a href="#">加入我们</a>
                    <a href="#">运动轨迹</a>
                    <a href="#">隐私政策</a>
                </ul>
                <ul class="footer-list">
                    <a href="#">联系方式</a>
                    <a href="#">社区精选</a>
                    <a href="#">社区规范</a>
                </ul>
            </div>
            <div class="info-right">
                <div class="info-test">
                    哪有什么天生如此，只是我们天天坚持
                    <br>
                    自律给我自由
                </div>
                <div class="help"></div>
            </div>

        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.my-footer{
    margin: 0 auto;
   /* ?????????? */
    position: relative;
    bottom: 0;
    left: 50%;
    margin-left: -450px;
    text-align: center;
    width: 900px;
}



.info-left{
    float: left;

}
.footer-list{

}
.footer-list a{
    display: inline-block;
    text-decoration: none;
    font-size: 12px;
    color: #584f60;
    margin-right: 30px;
}

.info-right{
    float: right;
    text-align: center;
    font-size: 10px;
    height: 127px;
}
.info-test{
    display: inline-block;
    vertical-align: middle;
}
.help{
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
}

/* clearfix */
.clearfix::after{
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
}
</style>
