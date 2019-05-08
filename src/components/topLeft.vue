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
            {
              name: '完好',
              value: 70,
              itemStyle: {
                color: '#44A5C7'
              }
            },
            {
              name: '故障',
              value: 18,
              itemStyle: {
                color: '#AE7C77'
              }
            },
            {
              name: '待送修',
              value: 10,
              itemStyle: {
                color: '#8C7DB1'
              }
            },
            {
              name: '待注销',
              value: 5,
              itemStyle: {
                color: '#DCBA2C'
              }
            },
            {
              name: '随机进厂',
              value: 10,
              itemStyle: {
                color: ''
              }
            },
          ],
          dom: 'topLeft1'
        },
        //右图数据
        rightData: {
          title: '地面情况',
          data: [
            {
              name: '完好',
              value: 70,
              itemStyle: {
                color: '#44A5C7'
              }
            },
            {
              name: '故障',
              value: 18,
              itemStyle: {
                color: '#AE7C77'
              }
            },
            {
              name: '待送修',
              value: 10,
              itemStyle: {
                color: '#8C7DB1'
              }
            },
            {
              name: '待注销',
              value: 5,
              itemStyle: {
                color: '#DCBA2C'
              }
            },
            {
              name: '在厂',
              value: 10,
              itemStyle: {
                color: ''
              }
            },
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
        var myChart = echarts.init(document.getElementById(obj.dom));
        var option = {
          title : {
            text: obj.title,
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
            data: obj.data.map(item => {return item.name}),
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
              data: obj.data,
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
    overflow: auto;
  }
  .item-bottom{
    height: 70%;
    margin-top: 5%;
  }
</style>