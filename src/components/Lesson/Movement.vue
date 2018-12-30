<template>
    <div id="my-move">
        <div class="title">
            <h2>动作库</h2>
            <p>动作的规范不但可以更高效的达到训练目的更能减少运动损伤</p>
        </div>
        <ul class="move-list clearfix">
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/55963b0e73800000.png" >
                    </div>
                    <div class="name">胸部</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/55963ab1a4c00000.png" >
                    </div>
                    <div class="name">背部</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/55963b1db3c00000.png" >
                    </div>
                    <div class="name">肩部</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/559639a46e400000.png" >
                    </div>
                    <div class="name">手臂</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/55963afccdc00000.png" >
                    </div>
                    <div class="name">颈部</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/55963b3fc0400000.png" >
                    </div>
                    <div class="name">腹部</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/55963b2cc0800000.png" >
                    </div>
                    <div class="name">腰部</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/559639594f800000.png" >
                    </div>
                    <div class="name">臀部</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/55963ad31b400000.png" >
                    </div>
                    <div class="name">腿部</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'moveshow'}">
                    <div class="img">
                        <img src="static/img/559638c467800000.png" >
                    </div>
                    <div class="name">全身</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return{
            moveName: "",
            imgSrc: "",
            moveRouter: "",
        };
    },
}
</script>

<style scoped>
#my-move{
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

.move-list{
    width: 768px;
    margin: 25px auto 15px;
    padding: 0;
}
.move-list li{
    width: 20%;
    margin-bottom: 65px;
    float: left;
    text-align: center;
    list-style-type: none;
}

.move-list li a{
    display: block;
    position: relative;
    text-decoration: none;
}
.move-list li a .img{
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    display: block;
    max-width: 86px;
}
.move-list li a .name{
    position: relative;
    margin-top: 20px;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #584f60;
    /* font-size: 1.4rem; */
}

/* clearfix */
.clearfix::after{
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
}
</style>
