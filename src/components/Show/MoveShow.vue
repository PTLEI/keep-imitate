<template>
    <div class="moveshow">
       <div class="container">

       </div>
       <div class="content">
           <h1 class="name">动作名称</h1>
           <h4>步骤</h4>
           <ul>
               
               <li></li>
               <li></li>
           </ul>
           <h4>呼吸</h4>
           <ul>
               <li></li>
               <li></li>
           </ul>
           <h4>动作感觉 </h4>
           <ul>
               <li></li>
               <li></li>
           </ul>
           <p></p>
           <p></p>
           <h4>常见错误</h4>
           <ul>
               <li></li>
               <li></li>
           </ul>



           <h4>细节图示</h4>
           <div ></div>
       </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.moveshow{
    margin: 0 auto;
    width:900px;
}
.container{
    height: 300px;
    background: #eee;
}

.name{
    font-size: 24px;
    margin: 45px 0 56px;
    position: relative;
}
.name::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 16px;
    border-bottom: 5px solid #24c789;
}
.content {
    text-align: left;
}
.content ul{
    padding: 0;
    list-style-position: inside;
}
.content ul li{
    
}
</style>
