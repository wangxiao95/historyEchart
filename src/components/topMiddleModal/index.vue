<template>
  <div id="modal">
    <div class="title fix">
      <span class="fl title-text"><span class="dot"></span>发动机详细情况</span>
      <span class="fr close" @click="moreFn">X</span>
    </div>
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
        <TopMiddleModalChart5></TopMiddleModalChart5>
      </div>
      <div class="item">
        <TopMiddleModalChart6></TopMiddleModalChart6>
      </div>
    </div>
  </div>
</template>

<script>
  import BlockTitle from '../blockTitle'
  import TopMiddleModalChart1 from './topMiddleModalChart1'
  import TopMiddleModalChart2 from './topMiddleModalChart2'
  import TopMiddleModalChart3 from './topMiddleModalChart3'
  import TopMiddleModalChart4 from './topMiddleModalChart4'
  import TopMiddleModalChart5 from './topMiddleModalChart5'
  import TopMiddleModalChart6 from './topMiddleModalChart6'
  export default {
    name: "index",
    components: {
      BlockTitle,
      TopMiddleModalChart1,
      TopMiddleModalChart2,
      TopMiddleModalChart3,
      TopMiddleModalChart4,
      TopMiddleModalChart5,
      TopMiddleModalChart6,
    },
    computed: {

    },
    methods: {
      moreFn() {
        this.$emit('moreFn')
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/style/base";
  .main{
    width: 100%;
    height: calc(100% - 40px);
    background: #05164C;
    .item{
      width: calc((100% - 12px) / 3);
      height: calc(50% - 4px);
      margin: 2px;
      border: 1px solid #0874B5;
      border-radius: 3px;
      .fl;
    }
  }
  .title{
    height: 40px;
    padding-left: 15px;
    box-shadow: inset 0px 0px 10px #008EAE;
    .title-text{
      height: 40px;
      line-height: 40px;
      background: none;
    }
  }
  .close{
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    margin-right: -5px;
    border: 1px solid #0874B5;
    box-shadow: inset 0px 0px 10px #008EAE;
  }
</style>