<template>
  <div id="app">
    <navbar v-if="!notFind" class="header-nav"></navbar>
    <div class="main-body">
      <router-view />
    </div>
    <myFooter v-if="!notFind"></myFooter>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import myFooter from "./components/Footer";
import { throttle } from "loadsh";
export default {
  name: "App",
  components: {
    Navbar,
    myFooter
  },
  computed: {
    notFind: function() {
      return this.$route.path.split("/").reverse()[0] === "404";
    }
  }
  // mounted() {
  //   document.addEventListener(
  //     "scroll",
  //     throttle(() => {
  //       console.log(document.getElementsByTagName("body")[0].scrollTop);
  //     }, 500)
  //   );
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 760px;
  background: white;
}
body {
  margin: 0;
  background-color: #fafafa;
}
a {
  text-decoration: none;
}
.header-nav {
  z-index: 11;
}
.main-body {
  margin-top: 60px;
}
/* clearfix */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
</style>
