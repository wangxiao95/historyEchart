<template>
  <div class="container">
    <Row id="header" class="header">{{title}}</Row>
    <Row class="home-top fix" :style="style">
      <div class="top-item">
        <TopLeft></TopLeft>
      </div>
      <div class="top-item">
        <TopMiddle></TopMiddle>
      </div>
      <div class="top-item">
        <TopRight></TopRight>
      </div>
    </Row>
    <Row class="home-bottom fix" :style="style">
      <div class="bottom-item">
        <BottomLeft></BottomLeft>
      </div>
      <div class="bottom-item">
        <!--<TopRight></TopRight>-->
      </div>
    </Row>
    <div v-show="TopMiddleModal" class="modalPanel">
      <TopMiddleModal class="modal"></TopMiddleModal>
    </div>
  </div>
</template>

<script>
  import TopLeft from './topLeft'
  import TopMiddle from './topMiddle'
  import TopRight from './topRight'
  import BottomLeft from './bottomLeft'
  import TopMiddleModal from './topMiddleModal'
export default {
  name: 'Home',
  components: {
    TopLeft,
    TopMiddle,
    TopRight,
    BottomLeft,
    TopMiddleModal,
  },
  data() {
    return {
      title: 'XX型FDJ',
      TopMiddleModal: true
    }
  },
  computed: {
    style() {
      return {
        height: (window.innerHeight - 25 - 60) / 2 + 'px'
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
      overflow: hidden;
      .fl;
    }
  }
  .home-bottom{
    .bottom-item{
      width: 49.5%;
      height: 100%;
      /*padding: 2px;*/
      margin: 0.25%;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      border: 1px solid #0874B5;
      overflow: hidden;
      .fl;
    }
  }
  .modalPanel{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 999;
    /*opacity: .2;*/
    .modal{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 80%;
      height: 90%;
      margin: auto;
      border: 1px solid #0874B5;
      border-radius: 5px;
      /*background: #0874B5;*/
    }
  }
</style>
