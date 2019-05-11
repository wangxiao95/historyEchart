<template>
  <div class="inner">
    <BlockTitle text="障件统计" :isMore=false></BlockTitle>
    <div id="topMiddleModalChart2"></div>
  </div>
</template>

<script>
  import BlockTitle from '../blockTitle'
  export default {
    name: "topMiddleModalChart2",
    components: {
      BlockTitle,
    },
    data() {
      return {
        barData: [
          {
            name: 'FDJ机体',
            value: 5
          },
          {
            name: '滑油系统',
            value: 7
          },
          {
            name: '主燃油系统',
            value: 9
          },
          {
            name: '加力燃油系统',
            value: 2
          },
          {
            name: '起动系统',
            value: 2
          },
          {
            name: '几何通道调节系统',
            value: 2
          },
          {
            name: '综调系统',
            value: 2
          },
          {
            name: '预防和消除喘振系统',
            value: 20
          },
          {
            name: '漏放油系统',
            value: 2
          },
        ],
      }
    },
    methods: {
      initChart() {
        var myChart = echarts.init(document.getElementById('topMiddleModalChart2'));
        var option = {
          xAxis: {
            type: 'category',
            data: this.barData.map(item => {
              return item.name;
            }),
            axisLabel: {
              interval:0,
              rotate: 20
            },
            // axisLabel: {
            //   interval: 0,
            //   formatter: function (value) {
            //
            //     var ret = "";//拼接加\n返回的类目项
            //     var maxLength = 2;//每项显示文字个数
            //     var valLength = value.length;//X轴类目项的文字个数
            //     var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
            //     if (rowN > 1)//如果类目项的文字大于3,
            //     {
            //       for (var i = 0; i < rowN; i++) {
            //         var temp = "";//每次截取的字符串
            //         var start = i * maxLength;//开始截取的位置
            //         var end = start + maxLength;//结束截取的位置
            //         //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
            //         temp = value.substring(start, end) + "\n";
            //         ret += temp; //凭借最终的字符串
            //       }
            //       return ret;
            //     }
            //     else {
            //       return value;
            //     }
            //   }
            // }
          },
          yAxis: {
            type: 'value'
          },

          series: [{
            data:  this.barData,
            type: 'bar'
          }]
        };

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
#topMiddleModalChart2{
  width: 100%;
  height: calc(100% - 30px);
}
</style>