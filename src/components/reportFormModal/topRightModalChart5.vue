<template>
  <div class="inner">
    <BlockTitle text="故障专业统计" :isMore=false></BlockTitle>
    <div id="topMiddleModalChart5"></div>
  </div>
</template>

<script>
  import BlockTitle from '../blockTitle'

  export default {
    name: "topMiddleModalChart5",
    components: {
      BlockTitle,
    },
    data() {
      return {
        barData: [
          {
            name: '专业a',
            value: 5
          },
          {
            name: '专业b',
            value: 7
          },
          {
            name: '专业c',
            value: 9
          },
          {
            name: '专业d',
            value: 2
          },
          {
            name: '专业d',
            value: 2
          },
          {
            name: '专业d',
            value: 2
          },
          {
            name: '专业d',
            value: 2
          },
          {
            name: '专业d',
            value: 20
          },
          {
            name: '专业d',
            value: 2
          },
        ]
      }
    },
    methods: {
      initChart() {
        var myChart = echarts.init(document.getElementById('topMiddleModalChart5'));
        var option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: 'category',
            data: this.barData.map(item => {
              return item.name;
            }),
            splitLine: {
              show: false,
            },
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
  #topMiddleModalChart5 {
    width: 100%;
    height: calc(100% - 40px);
  }
</style>