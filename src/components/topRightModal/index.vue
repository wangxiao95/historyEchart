<template>
  <div id="modal">
    <div class="title fix">
      <span class="fl title-text"><span class="dot"></span>发动机详细情况</span>
      <span class="fr close" @click="moreFn">X</span>
    </div>
    <div class="main">
      <div class="item">
        <TopRightModalChart1></TopRightModalChart1>
      </div>
      <div class="item">
        <TopRightModalChart2></TopRightModalChart2>
      </div>
      <div class="item">
        <TopRightModalChart3></TopRightModalChart3>
      </div>
      <div class="item">
        <TopRightModalChart4></TopRightModalChart4>
      </div>
      <div class="item">
        <TopRightModalChart5></TopRightModalChart5>
      </div>
      <div class="item">
        <TopRightModalChart6></TopRightModalChart6>
      </div>
    </div>
  </div>
</template>

<script>
  import BlockTitle from '../blockTitle'
  import TopRightModalChart1 from './topRightModalChart1'
  import TopRightModalChart2 from './topRightModalChart2'
  import TopRightModalChart3 from './topRightModalChart3'
  import TopRightModalChart4 from './topRightModalChart4'
  import TopRightModalChart5 from './topRightModalChart5'
  import TopRightModalChart6 from './topRightModalChart6'
  export default {
    name: "index",
    components: {
      BlockTitle,
      TopRightModalChart1,
      TopRightModalChart2,
      TopRightModalChart3,
      TopRightModalChart4,
      TopRightModalChart5,
      TopRightModalChart6,
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