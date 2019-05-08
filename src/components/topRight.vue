<template>
  <div class="inner">
    <Row class="item-top">
      <BlockTitle text="FDJ故障信息" @moreFn="more"></BlockTitle>
      <Row class="form-row">
        <Form ref="formInline" :model="formInline" inline>
          <FormItem label="起始时间:" :label-width=65>
            <DatePicker type="datetime" @on-change="startChange"></DatePicker>
          </FormItem>
          <FormItem label="结束时间:" :label-width=65>
            <DatePicker type="datetime" @on-change="endChange"></DatePicker>
          </FormItem>
          <FormItem>
            <Button style="margin-left: 5px;" type="primary" @click="query">查询</Button>
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
              normal:{color:"#3FBB49"},
            }
          },
          {
            name: '任务不成功',
            type: 'bar',
            stack:'a',
            data: [3, 4, 4, 2, 5, 1],

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
              normal:{color:"#DCBA2C"},
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
            })
          },
          xAxis: {
            data: ["aa","bb","cc","dd","ee","ff"],
            splitLine:{
              show:false,
            },
          },
          yAxis: {
            splitLine:{
              show:false,
            },
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

<style scoped>
  .form-row{
    /*min-height: 50px;*/
    text-align: left;
    /*line-height: 50px;*/
    padding: 10px;
  }
  .row{
    height: 30px;
    text-align: left;
    line-height: 30px;
    padding-left: 10px;
  }
  .item-top{
    height: 30%;
    overflow: auto;
  }
  .item-bottom{
    height: 70%;
  }
  /deep/.ivu-form-inline .ivu-form-item{
    margin-right: 0;
  }
  /deep/ .ivu-form-item{
    margin-bottom: 0;
  }
</style>