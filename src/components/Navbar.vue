<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="1">
            <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/Choice">发现精选</router-link>
        </el-menu-item>
        <el-submenu index="3">
            <template slot="title">训练课程</template>
            <el-menu-item index="3-1">
                <router-link to="/Training">课程分类</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
                <router-link to="/Movement">动作分类</router-link>
            </el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
            <router-link to="/Movement">登陆/注册</router-link>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name:'app-navbar',
    data() {
        return{
            activeIndex:'1',
        };
    },
    methods: {
        handleSelect(key,keyPath) {
            console.log(key,keyPath);
        }
    }
}
</script>

<style scoped>
.el-menu-demo{
    width: 100%;
    top: 0;
}
.login{
    float: right;
}
a{
    color: #909399;
    width: 100%;
}
a:hover{
    color: black;
}

</style>
