<template>
  <div class="inner">
    <div class="top">
      <BlockTitle text="状态情况" @moreFn="more"></BlockTitle>
      <Form ref="formInline" :model="formInline" inline>
        <Row style="text-align: left; padding: 10px;">
          <FormItem label="参数:" :label-width=40>
            <Input v-model="formInline.input"></Input>
          </FormItem>
          <FormItem label="FDJ号码:" :label-width=70>
            <Input v-model="formInline.input"></Input>
          </FormItem>
          <FormItem label="日期:" :label-width=40>
            <Input v-model="formInline.input"></Input>
          </FormItem>
          <FormItem label="架次:" :label-width=40>
            <Input v-model="formInline.input"></Input>
          </FormItem>
        </Row>
        <Row style="text-align: left; padding: 10px;">
          <FormItem label="起始时间:" :label-width=70>
            <DatePicker type="datetime" @on-change="startChange"></DatePicker>
          </FormItem>
          <FormItem label="结束时间:" :label-width=70>
            <DatePicker type="datetime" @on-change="endChange"></DatePicker>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="query">查询</Button>
          </FormItem>
        </Row>
      </Form>
      <Row style="text-align: left; padding: 10px;">
        <Col span="4">最大值：{{max}}</Col>
        <Col span="4">最小值：{{min}}</Col>
        <Col span="4">平均值：{{max}}</Col>
        <Col span="4">是否报警：{{max}}</Col>
        <Col span="4">报警次数：{{max}}</Col>
      </Row>
    </div>
    <div class="bottom" id="bottomLeftChart" style="width: 100%; "></div>
  </div>
</template>

<script>
  import BlockTitle from './blockTitle'
  export default {
    name: "bottomLeft",
    components: {
      BlockTitle,
    },
    data() {
      return {
        max: 356,
        min: 12,
        formInline: {
          input: '',
          startTime: '',
          endTime: '',
        },
        chartData:  [
          [1, 4862.4],
          [2, 5294.7],
          [3, 5934.5],
          [4, 7171.0],
          [5, 8964.4],
          [6, 10202.2],
          [7, 11962.5],
          [8, 14928.3],
          [9, 16909.2],
          [10, 18547.9],
          [11, 21617.8],
          [12, 26638.1],
        ],
      }
    },
    methods: {
      more() {
        console.log(1);
      },
      startChange(val) {
        this.formInline.startTime = val.split('T')[0];
      },
      endChange(val) {
        this.formInline.endTime = val.split('T')[0];
      },
      query() {
        console.log(this.formInline);
      },
      initChart() {
        var myChart = echarts.init(document.getElementById('bottomLeftChart'));
        var markLineOpt = {
          animation: false,
          label: {
            normal: {
              // formatter: 'y = 0.5 * x + 3',
              textStyle: {
                align: 'right'
              }
            }
          },
          lineStyle: {
            normal: {
              type: 'solid'
            }
          },
          tooltip: {
            // formatter: 'y = 0.5 * x + 3'
          },
          data: [[{
            coord: [0, 3],
            symbol: 'none'
          }, {
            coord: [20, 13],
            symbol: 'none'
          }]]
        };

        var option = {
          title: {
            text: null,
            x: 'center',
            y: 0
          },
          grid: [
            {x: '7%', y: '7%', width: '80%', height: '80%'},
            {x2: '7%', y: '7%', width: '80%', height: '80%'},
            {x: '7%', y2: '7%', width: '80%', height: '80%'},
            {x2: '7%', y2: '7%', width: '80%', height: '80%'}
          ],
          tooltip: {
            formatter: 'Group {a}: ({c})'
          },
          xAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            },
            splitNumber: this.chartData.length
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          },
          series: [
            {
              name: 'I',
              type: 'scatter',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.chartData,
              markLine: markLineOpt
            },

          ]
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
  .top{
    height: 40%;
    overflow: auto;
  }
  .bottom{
    height: 60%;
  }
  /deep/ .ivu-form-item{
    margin-bottom: 0;
  }
</style>