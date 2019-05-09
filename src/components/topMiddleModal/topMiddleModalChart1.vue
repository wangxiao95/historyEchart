<template>
  <div class="inner">
    <BlockTitle text="障件统计" :isMore=false></BlockTitle>
    <div id="topMiddleModalChart1"></div>
  </div>
</template>

<script>
  import BlockTitle from '../blockTitle'
  export default {
    name: "topMiddleModalChart1",
    components: {
      BlockTitle,
    },
    data() {
      return {
        barData: [
          {
            name: 'a',
            value: 5
          },
          {
            name: 'b',
            value: 7
          },
          {
            name: 'c',
            value: 9
          },
          {
            name: 'd',
            value: 2
          },
          {
            name: 'd',
            value: 2
          },
          {
            name: 'd',
            value: 2
          },
          {
            name: 'd',
            value: 2
          },
          {
            name: 'd',
            value: 20
          },
          {
            name: 'd',
            value: 2
          },
        ]
      }
    },
    methods: {
      initChart() {
        var myChart = echarts.init(document.getElementById('topMiddleModalChart1'));
        var option = {
          title: {
            text: '',
            // left:'20px',
            textStyle: {
              // color: "#436EEE",
              // fontSize: 17,
            }
          },
          tooltip: {
            trigger: "axis",
          },
          // legend: {
          //   itemWidth:15,
          //   itemHeight:15,
          //   bottom: 0,
          //   data: this.barData.map(item => {
          //     return item.name;
          //   })
          // },
          xAxis: {
            data: this.barData.map(item => {
              return item.name;
            }),
            splitLine:{
              show:false,
            },
          },
          yAxis: {
            splitLine:{
              show:false,
            },
          },
          series: {
            type: 'bar',
            data:  this.barData
          }
        };

        myChart.setOption(option);
      }
    },
    mounted() {
      this.initChart();
    }
  }
</script>

<style scoped>
#topMiddleModalChart1{
  width: 100%;
  height: calc(100% - 30px);
}
</style>