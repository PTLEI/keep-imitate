<template>
  <div class="users">
    <h1>
      hello
    </h1>
      <ul>
          <li v-for="user in users">
              {{user}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users:["one","two","three"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
  position: relative;
}
h1{
  color: aqua;
}
ul{
  color: brown;
}
</style>
