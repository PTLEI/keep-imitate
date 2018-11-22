<template>
  <div id="app">
    <navbar></navbar>
      <router-view/>
    <myFooter></myFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import myFooter from './components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
a{
  text-decoration: none;
}
</style>
