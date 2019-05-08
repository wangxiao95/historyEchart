<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
window.onresize = function () {
  location.reload();
}
</script>

<style>
  html,body{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
