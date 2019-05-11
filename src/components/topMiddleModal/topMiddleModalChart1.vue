<template>
  <div class="inner">
    <BlockTitle text="故障件统计" :isMore=false></BlockTitle>
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
            name: '故障件a',
            value: 5
          },
          {
            name: '故障件b',
            value: 7
          },
          {
            name: '故障件c',
            value: 9
          },
          {
            name: '故障件d',
            value: 2
          },
          {
            name: '故障件d',
            value: 2
          },
          {
            name: '故障件d',
            value: 2
          },
          {
            name: '故障件d',
            value: 2
          },
          {
            name: '故障件d',
            value: 20
          },
          {
            name: '故障件d',
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
          textStyle: {
            color: "#fff",
            // fontSize: 17,
          },
          lineStyle: {
            color: "#fff",
            // fontSize: 17,
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
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              interval: 0,
              rotate: 30
            },
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            type: 'value'
          },
          series: {
            type: 'bar',
            data:  this.barData
          }
        };

        myChart.setOption(_.merge({}, chartConfig, option));
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
  height: calc(100% - 40px);
}
</style>