<template>
  <div class="inner">
    <BlockTitle text="故障厂商统计" :isMore=false></BlockTitle>
    <div id="topMiddleModalChart6"></div>
  </div>
</template>

<script>
  import BlockTitle from '../blockTitle'

  export default {
    name: "topMiddleModalChart6",
    components: {
      BlockTitle,
    },
    data() {
      return {
        barData: [
          {
            name: '厂商a',
            value: 5
          },
          {
            name: '厂商b',
            value: 7
          },
          {
            name: '厂商c',
            value: 9
          },
          {
            name: '厂商d',
            value: 2
          },
          {
            name: '厂商d',
            value: 2
          },
          {
            name: '厂商d',
            value: 2
          },
          {
            name: '厂商d',
            value: 2
          },
          {
            name: '厂商d',
            value: 20
          },
          {
            name: '厂商d',
            value: 2
          },
        ]
      }
    },
    methods: {
      initChart() {
        var myChart = echarts.init(document.getElementById('topMiddleModalChart6'));
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: 'category',
            data: this.barData.map(item => {
              return item.name;
            }),
            /*如果出现横坐标字数过长无法展示，打开这段代码倾斜展示*/
            axisLabel: {
              interval: 0,
              rotate: 30
            },
          },
          yAxis: {
            type: 'value'
          },

          series: [{
            data: this.barData,
            type: 'bar'
          }]
        };
        _.merge({}, chartConfig, option)
        myChart.setOption(_.merge({}, chartConfig, option));
      }
    },
    mounted() {
      this.initChart();
      console.log(this.barData.map(item => {
        return item.name;
      }));
    }
  }
</script>

<style scoped>
  #topMiddleModalChart6 {
    width: 100%;
    height: calc(100% - 40px);
  }
</style>