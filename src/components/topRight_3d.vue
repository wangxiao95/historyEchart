<template>
  <div class="inner">
    <Row class="item-top">
      <BlockTitle text="FDJ故障信息" @moreFn="more"></BlockTitle>
      <Row class="form-row">
        <Form ref="formInline" :model="formInline" inline>
          <FormItem label="起始时间:" label-width="80">
            <DatePicker type="datetime" @on-change="startChange"></DatePicker>
          </FormItem>
          <FormItem label="结束时间:" label-width="80">
            <DatePicker type="datetime" @on-change="endChange"></DatePicker>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="query">查询</Button>
          </FormItem>
        </Form>
      </Row>
      <Row class="row">故障次数：{{count}}</Row>
      <Row class="row">平均修后工作时间：{{workTime}}</Row>
    </Row>
    <Row class="item-bottom">
      <div id="chart" style="width: 100%; height: 100%;"></div>
    </Row>
  </div>
</template>

<script>
  import BlockTitle from './blockTitle'
  export default {
    name: "topLeft",
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
        var chart = Highcharts.chart('chart', {
          chart: {
            type: 'column',
            options3d: {
              enabled: true,
              alpha: 0,
              beta: 10,
              viewDistance: 25,
              depth: 40
            },
            marginTop: 30,
            marginRight: 30
          },
          credits: {
            enabled: false
          },
          title: {
            text: null
          },
          xAxis: {
            categories: ['a', 'b', 'c', 'd', 'e']
          },
          yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
              text: '故障次数'
            }
          },
          tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
          },
          plotOptions: {
            column: {
              stacking: 'normal',
              depth: 40
            }
          },
          legend: {
            symbolRadius: 0
          },
          series: [{
            name: '无影响',
            data: [5, 3, 4, 7, 2],
          }, {
            name: '任务不成功',
            data: [3, 4, 4, 2, 5],
          }, {
            name: '事故征候',
            data: [2, 5, 6, 2, 1],
          }, {
            name: '停飞',
            data: [3, 10, 4, 4, 3],
          }, {
            name: '其他',
            data: [3, 0, 4, 4, 3],
          }]
        });
      }
    },
    mounted() {
      this.initChart();
    }
  }
</script>

<style scoped>
  .form-row{
    height: 50px;
    text-align: left;
    line-height: 50px;
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
  }
  .item-bottom{
    height: 70%;
  }
</style>