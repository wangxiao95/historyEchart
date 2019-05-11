<template>
  <div class="container">
    <div id="header" class="header">{{title}}</div>
    <div class="home-top fix">
      <div class="top-item">
        <TopLeft></TopLeft>
      </div>
      <div class="top-item">
        <TopMiddle @more="TopMiddleModal = true"></TopMiddle>
      </div>
      <div class="top-item">
        <TopRight></TopRight>
      </div>
    </div>
    <div class="home-bottom fix">
      <div class="bottom-item">
        <BottomLeft></BottomLeft>
      </div>
      <div class="bottom-item">
        <BottomRight></BottomRight>
      </div>
    </div>
    <div v-show="TopMiddleModal" class="modalPanel">
      <TopMiddleModal class="modal" @moreFn="TopMiddleModal = false"></TopMiddleModal>
    </div>
  </div>
</template>

<script>
  import TopLeft from './topLeft'
  import TopMiddle from './topMiddle'
  import TopRight from './topRight'
  import BottomRight from './bottomRight'
  import BottomLeft from './bottomLeft'
  import TopMiddleModal from './topMiddleModal'

  export default {
  name: 'Home',
  components: {
    TopLeft,
    TopMiddle,
    TopRight,
    BottomLeft,
    BottomRight,
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
  mounted: {
      // topMiddleMore() {
      //
      // }
  },
  created() {
    console.log(echarts);
  },
  mounted() {
    this.TopMiddleModal = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/style/base";
  .container{
    background: #010A27;
    /*background: url("../assets/img/bg.png") no-repeat;*/
    /*background-size: cover;*/
    overflow: hidden;
    .header{
      height: 60px;
      color: #ffffff;
      font-size: 20px;
      font-weight: 800;
      text-align: left;
      line-height: 60px;
      padding-left: 20px;
      background: linear-gradient(#052357, #3262A0);
      box-shadow: inset 0px 0px 10px #008EAE;
    }
    .home-top{
      height: calc((100% - 60px - 6px) / 2);
      margin: 2px 0;
      overflow: hidden;
      .top-item{
        width: calc((100% - 12px) / 3);
        height: 100%;
        /*padding: 2px;*/
        margin: 0 2px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #0874B5;
        overflow: hidden;
        .fl;
      }
    }
    .home-bottom{
      height: calc((100% - 60px - 6px) / 2);
      margin: 2px 0;
      overflow: hidden;
      .bottom-item{
        width: calc((100% - 8px) / 2);
        height: 100%;
        /*padding: 2px;*/
        margin: 0 2px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #0874B5;
        overflow: hidden;
        .fl;
      }
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
