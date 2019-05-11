<template>
  <div class="inner">
    <BlockTitle text="障件统计" :isMore=false></BlockTitle>
    <div id="topMiddleModalChart4"></div>
  </div>
</template>

<script>
  import BlockTitle from '../blockTitle'
  export default {
    name: "topMiddleModalChart4",
    components: {
      BlockTitle,
    },
    data() {
      return {
        pieData: [
          {
            name: '分设计缺陷',
            value: 5
          },
          {
            name: '制造质量',
            value: 7
          },
          {
            name: '翻修质量',
            value: 9
          },
          {
            name: '其他',
            value: 4
          },
        ],
      }
    },
    methods: {
      initChart() {
        var myChart = echarts.init(document.getElementById('topMiddleModalChart4'));
        var option = {
          title : {
            text: '',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            // orient: 'vertical',
            itemWidth: 14,
            left: 'center',
            bottom: 20,
            data: this.pieData.map(item => {return item.name}),
          },
          series : [
            {
              name: '占比',
              type: 'pie',
              radius : '55%',
              center: ['50%', '40%'],
              label: {
                position: 'inside',
                formatter: '{d}%'
              },
              data: this.pieData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option);
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
#topMiddleModalChart4{
  width: 100%;
  height: calc(100% - 30px);
}
</style>