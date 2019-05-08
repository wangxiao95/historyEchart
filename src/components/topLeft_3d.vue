<template>
  <div class="inner">
    <Row class="item-top">
      <BlockTitle text="基本信息" @moreFn="more"></BlockTitle>
      <Row class="row">FDJ总数：{{FDJCount}}个</Row>
      <Row class="row">
        <Col span="12">生产厂商：{{manufacturer}}</Col>
        <Col span="12">规定寿命：{{life}}</Col>
      </Row>
      <Row class="row">
        <Col span="12">装备JX：{{JX}}</Col>
        <Col span="12">装备飞行团：{{team}}</Col>
      </Row>
    </Row>
    <Row class="item-bottom">
      <Col span="12" style="width: 50%;height:100%;" id="topLeft1"></Col>
      <Col span="12" style="width: 50%;height:100%;" id="topLeft2"></Col>
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
        FDJCount: 123234,
        manufacturer: '百度',
        life: 90,
        JX: 123234,
        team: 123234,

        //左图数据
        leftData: {
          title: '装机情况',
          data: [
            ['完好', 70],
            ['故障', 18],
            ['待送修', 10],
            ['待注销', 5],
            //FIXME 以下两种写法效果一样，只有name，value的情况可以简写为数组，需要其他配置项写成Object，例如：color
            // ['随机进厂', 10],
            {
              name: '随机进厂',
              y: 10,
              color: 'yellow'
            }
          ],
          dom: 'topLeft1'
        },
        //右图数据
        rightData: {
          title: '地面情况',
          data: [
            ['完好', 50],
            ['故障', 28],
            ['待送修', 12],
            ['待注销', 1],
            ['在厂', 10],
          ],
          dom: 'topLeft2'
        }
      }
    },
    methods: {
      more() {
        console.log(1);
      },
      leftInit(obj) {
        var chart = Highcharts.chart(obj.dom, {
          chart: {
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 50,
              beta: 0
            },
          },
          title: {
            text: obj.title,
            margin: 0
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 20,
              dataLabels: {
                enabled: true,

                distance: 1,
                format: '{point.percentage:.1f}%'
              },
              showInLegend: true
            }
          },
          legend: {
            symbolRadius: 0
          },
          credits: {
            enabled: false
          },
          series: [{
            type: 'pie',
            name: '占比',
            data: obj.data
          }]
        });
      }
    },
    mounted() {
      this.leftInit(this.leftData);
      this.leftInit(this.rightData);
    }
  }
</script>

<style scoped>
#main{
  width: 100%;
  height: 100%;
}
  .row{
    height: 30px;
    text-align: left;
    line-height: 30px;
    padding-left: 10px;
  }
  .item-top{
    height: 25%;
  }
  .item-bottom{
    height: 75%;
  }
</style>