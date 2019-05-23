<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <myFooter></myFooter>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import myFooter from "./components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    myFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 760px;
}
body {
  margin: 0;
  background-color: #fafafa;
}
a {
  text-decoration: none;
}
/* clearfix */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
</style>
