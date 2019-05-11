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
  // location.reload();
}
</script>

<style>
  html,body{
    padding: 0;
    margin: 0;
  }
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*margin-top: 60px;*/
}
</style>
