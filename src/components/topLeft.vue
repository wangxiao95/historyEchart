<template>
  <div class="inner">
    <BlockTitle text="基本信息" @moreFn="more"></BlockTitle>
    <div id="main" ref="chart"></div>
  </div>
</template>

<script>
  import BlockTitle from './blockTitle'
  export default {
    name: "topLeft",
    components: {
      BlockTitle,
    },
    methods: {
      more() {
        console.log(1);
      }
    },
    mounted() {
      let myChart = echarts.init(document.getElementById('main'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      });
    }
  }
</script>

<style scoped>
#main{
  width: 100%;
  height: 100%;
}
</style>