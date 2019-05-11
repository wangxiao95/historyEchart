<template>
  <div id="modal">
    <BlockTitle></BlockTitle>
    <div class="main">
      <div class="item">
        <TopMiddleModalChart1></TopMiddleModalChart1>
      </div>
      <div class="item">
        <TopMiddleModalChart2></TopMiddleModalChart2>
      </div>
      <div class="item">
        <TopMiddleModalChart3></TopMiddleModalChart3>
      </div>
      <div class="item">
        <TopMiddleModalChart4></TopMiddleModalChart4>
      </div>
      <div class="item">
        <BlockTitle text="障件统计" :isMore=false></BlockTitle>
        <div id="topMiddleModalChart2"></div>
      </div>
      <div class="item">
        <BlockTitle text="障件统计" :isMore=false></BlockTitle>
        <div id="topMiddleModalChart3"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import BlockTitle from '../blockTitle'
  import TopMiddleModalChart1 from './topMiddleModalChart1'
  import TopMiddleModalChart2 from './topMiddleModalChart2'
  import TopMiddleModalChart3 from './topMiddleModalChart3'
  import TopMiddleModalChart4 from './topMiddleModalChart3'
  export default {
    name: "index",
    components: {
      BlockTitle,
      TopMiddleModalChart1,
      TopMiddleModalChart2,
      TopMiddleModalChart3,
      TopMiddleModalChart4,
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/style/base";
  .main{
    width: 100%;
    height: calc(100% - 30px);
    background: #ffffff;
    .item{
      width: calc((100% - 12px) / 3);
      height: 50%;
      margin: 2px;
      border: 1px solid #0874B5;
      border-radius: 3px;
      .fl;
    }
  }
</style>