<template>
  <div class="inner">
    <Row class="item-top">
      <BlockTitle text="FDJ故障信息" @moreFn="more"></BlockTitle>
      <Row class="form-row">
        <Form ref="formInline" :model="formInline" inline>
          <FormItem label="起始时间:" :label-width=65>
            <DatePicker type="datetime" @on-change="startChange"></DatePicker>
          </FormItem>&nbsp;
          <FormItem label="结束时间:" :label-width=65>
            <DatePicker type="datetime" @on-change="endChange"></DatePicker>
          </FormItem>
          <FormItem>
            <Button class="queryBtn" type="primary" @click="query">查询</Button>
          </FormItem>
        </Form>
      </Row>
      <Row class="row">
        <Col span="10">故障次数：{{count}}</Col>
        <Col span="10">平均修后工作时间：{{workTime}}</Col>
      </Row>
    </Row>
    <Row class="item-bottom">
      <div id="topRightChart" style="width: 100%; height: 100%;"></div>
    </Row>
  </div>
</template>

<script>
  import BlockTitle from './blockTitle'
  export default {
    name: "topRight",
    components: {
      BlockTitle,
    },
    data() {
      return {
        //基础数据
        count: 12,
        workTime: 2312,
        formInline: {
          startTime: '',
          endTime: '',
        },
        barData: [
          {
            name: '无影响',
            data: [5, 3, 4, 7, 2, 7],
            type: 'bar',
            stack:'a',
            itemStyle:{
              normal:{color:"#2CCA40"},
            }
          },
          {
            name: '任务不成功',
            type: 'bar',
            stack:'a',
            data: [3, 4, 4, 2, 5, 1],
            itemStyle:{
              normal:{color:"#774E3D"},
            }

          },
          {
            name: '事故征候',
            type: 'bar',
            stack:'a',
            data: [2, 5, 6, 2, 1, 7],
          },
          {
            name: '停飞',
            type: 'bar',
            stack:'a',
            data: [3, 10, 4, 4, 3, 2],
            itemStyle:{
              normal:{color:"#7ED8C0"},
            }
          },
          {
            name: '其他',
            type: 'bar',
            stack:'a',
            data: [3, 6, 4, 4, 3, 7],
            itemStyle:{
            // normal:{color:"#aacc5C"},
          }
          }
        ]
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
        var myChart = echarts.init(document.getElementById('topRightChart'));
        var option = {
          title: {
            text: null,
            // left:'20px',
            textStyle: {
              // color: "#436EEE",
              // fontSize: 17,
            }
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            itemWidth:15,
            itemHeight:15,
            bottom: 0,
            data: this.barData.map(item => {
              return item.name;
            }),
            textStyle: {
              color: "#fff",
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
          xAxis: {
            data: ["aa","bb","cc","dd","ee","ff"],
            splitLine:{
              show:false,
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            }
          },
          yAxis: {
            splitLine:{
              show:false,
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            }
          },
          series: this.barData
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
  .form-row{
    min-height: 32px;
    text-align: left;
    line-height: 32px;
    padding: 10px;
  }
  .row{
    color: #ffffff;
    height: 30px;
    text-align: left;
    line-height: 30px;
    padding-left: 10px;
  }
  .item-top{
    /*height: 30%;*/
    /*overflow: hidden;*/
  }
  .item-bottom{
    height: calc(100% - 112px);
  }
  /deep/.ivu-form-inline .ivu-form-item{
    margin-right: 0;
    width: calc((100% - 60px) / 2);
    input{
      height: 26px;
      line-height: 26px;
      color: #fff;
      background: #1D3F75;
      border: 1px solid #0874B5;
    }
    i{
      color: #fff;
      height: 26px;
      line-height: 26px;
    }
  }
  /deep/.ivu-form-inline .ivu-form-item:last-child{
    width: 40px;
  }
  /deep/ .ivu-form-item{
    margin-bottom: 0;
  }
  /deep/ .ivu-form {
    .ivu-form-item-label{
      color: #fff;
    }
  }
  .queryBtn{
    margin-left: 5px;width:40px;height:26px;line-height: 24px;padding:0;background: #022F66;border-color:#666;border-radius: 2px;
  }
</style>