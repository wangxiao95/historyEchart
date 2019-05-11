<template>
  <div class="inner">
    <div class="top">
      <BlockTitle text="状态情况" :is-more=false @moreFn="more"></BlockTitle>
      <Form ref="formInline" :model="formInline" inline>
        <Row style="text-align: left; padding: 10px;">
          <FormItem label="参数:" :label-width=70>
            <Input v-model="formInline.input"></Input>
          </FormItem>
          <FormItem label="FDJ号码:" :label-width=70>
            <Input v-model="formInline.input"></Input>
          </FormItem>
          <FormItem label="日期:" :label-width=70>
            <Input v-model="formInline.input"></Input>
          </FormItem>
          <FormItem label="架次:" :label-width=70>
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
            <Button class="queryBtn" type="primary" @click="query">查询</Button>
          </FormItem>
        </Row>
      </Form>
      <Row style="text-align: left; height: 30px; line-height: 30px;padding-left: 10px; color: #fff;">
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
          textStyle: {
            color: '#ffffff'
          },
          xAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            },
            splitNumber: this.chartData.length
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
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

<style scoped lang="less">
  .inner{
    background: linear-gradient(to right, #042E73, #04194E);
  }
  .top{
    /*height: 40%;*/
  }
  .bottom{
    height: calc(100% - 164px);
  }
  /deep/ .ivu-form-item{
    margin-bottom: 0;
  }

  /deep/ .ivu-form-inline .ivu-form-item {
    margin-right: 0;
    width: calc((100%) / 4);
    input {
      height: 26px;
      line-height: 26px;
      color: #fff;
      background: #1D3F75;
      border: 1px solid #0874B5;
    }
    i {
      color: #fff;
      height: 26px;
      line-height: 26px;
    }
  }

  /deep/ .ivu-form-item {
    margin-bottom: 0;
  }

  /deep/ .ivu-form {
    .ivu-form-item-label {
      color: #fff;
    }
  }

  .queryBtn {
    margin-left: 25px;
    width: 40px;
    height: 26px;
    line-height: 24px;
    padding: 0;
    background: #022F66;
    border-color: #666;
    border-radius: 2px;
  }
</style>