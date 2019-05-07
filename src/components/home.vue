<template>
  <div class="container">
    <Row id="header" class="header">{{title}}</Row>
    <Row class="home-top fix" :style="style">
      <div class="top-item">
        <TopLeft></TopLeft>
      </div>
      <div class="top-item">col-8</div>
      <div class="top-item">col-8</div>
    </Row>
    <Row class="home-bottom fix" :style="style">
      <div>12</div>
      <div>12</div>
    </Row>
  </div>
</template>

<script>
  import TopLeft from './topLeft'
export default {
  name: 'Home',
  components: {
    TopLeft,
  },
  data() {
    return {
      title: 'XX型FDJ',
    }
  },
  computed: {
    style() {
      return {
        height: (window.innerHeight - 60) / 2 + 'px'
      }
    }
  },
  created() {
    console.log(echarts);
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/style/base";
  .header{
    height: 60px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 800;
    text-align: left;
    line-height: 60px;
    padding-left: 20px;
    background: linear-gradient(#022F66, #3262A0);
  }
  .home-top{
    .top-item{
      width: 33%;
      height: 100%;
      /*padding: 2px;*/
      margin: 0.166%;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      border: 1px solid #0874B5;
      .fl;
    }
  }

</style>
