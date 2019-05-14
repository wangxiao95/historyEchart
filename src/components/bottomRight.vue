<template>
  <div class="inner">
    <Tabs type="card">
      <TabPane v-for="(tab, i) in tabs" :key="i" :label="tab.label">
        <div class="custom-table">
          <MTable v-show="tab.value == 1" :data="columns1" :res="tableData1" class="table-box">
            <template slot="tableHead">
              <thead>
                <tr>
                  <th colspan="7">fj 状 况</th>
                  <th colspan="6">fdj 状 况</th>
                </tr>
                <tr>
                  <th>型别</th>
                  <th>出厂号码</th>
                  <th>bd编号</th>
                  <th>翻修数</th>
                  <th>规定寿命</th>
                  <th>自总飞行时间</th>
                  <th>剩余寿命</th>
                  <th>型别</th>
                  <th>出厂号码</th>
                  <th>翻修数</th>
                  <th>规定寿命</th>
                  <th>本月工作时间</th>
                  <th>总工作时间</th>
                </tr>
              </thead>
            </template>
          </MTable>
          <MTable v-show="tab.value == 2" :data="columns2" :res="tableData2" class="table-box">
            <template slot="tableHead">
              <thead>
                <tr>
                  <th rowspan="2">出厂号码</th>
                  <th rowspan="2">翻修次数</th>
                  <th rowspan="2">规定寿命</th>
                  <th colspan="2">油封期限</th>
                  <th rowspan="2">油封次数</th>
                  <th rowspan="2">入库日期</th>
                  <th rowspan="2">发来单位</th>
                  <th rowspan="2">存放单位</th>
                  <th colspan="2">使用或外调情况</th>
                  <th rowspan="2">总工作时间</th>
                  <th rowspan="2">备注</th>
                </tr>
                <tr>
                  <th>起</th>
                  <th>止</th>
                  <th>日期</th>
                  <th>单位</th>
                </tr>
              </thead>
            </template>
          </MTable>
          <MTable v-show="tab.value == 3" :data="columns3" :res="tableData3" class="table-box">
            <template slot="tableHead">
              <thead>
              <tr>
                <th rowspan="2">型别</th>
                <th rowspan="2">出厂号码</th>
                <th rowspan="2">翻修次数</th>
                <th rowspan="2">规定寿命</th>
                <th rowspan="2">总工作时间</th>
                <th rowspan="2">剩余寿命</th>
                <th colspan="3">拆下</th>
                <th colspan="2">送修</th>
                <th rowspan="2">备注</th>
              </tr>
              <tr>
                <th>日期</th>
                <th>原因</th>
                <th>fj号码</th>
                <th>日期</th>
                <th>工厂</th>
              </tr>
              </thead>
            </template>
          </MTable>
          <MTable v-show="tab.value == 4" :data="columns4" :res="tableData4" class="table-box">
            <template slot="tableHead">
              <thead>
                <tr>
                  <th>fj型别</th>
                  <th>fj号码</th>
                  <th>fdj型别</th>
                  <th>出厂号码</th>
                  <th>翻修次数</th>
                  <th>规定寿命</th>
                  <th>本次翻修后工作时间</th>
                  <th>剩余寿命</th>
                  <th>提前更换原因</th>
                </tr>
              </thead>
            </template>
          </MTable>
          <MTable v-show="tab.value == 5" :data="columns5" :res="tableData5" class="table-box">
            <template slot="tableHead">
              <thead>
              <tr>
                <th rowspan="2">型别</th>
                <th rowspan="2">出厂号码</th>
                <th rowspan="2">翻修次数</th>
                <th rowspan="2">规定寿命</th>
                <th rowspan="2">总工作时间</th>
                <th rowspan="2">剩余寿命</th>
                <th colspan="3">报废</th>
                <th colspan="3">批准</th>
              </tr>
              <tr>
                <th>日期</th>
                <th>地点</th>
                <th>原因</th>
                <th>机关</th>
                <th>日期</th>
                <th>文号</th>
              </tr>
              </thead>
            </template>
          </MTable>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import MTable from './mTable'

  export default {
    name: "bottomLeft",
    components: {
      MTable,
    },
    data() {
      return {
        tabs: [
          {label: '机上hkfdj逐号报告表', value: '1'},
          {label: '库存hkfdj逐号报告表', value: '2'},
          {label: 'hkfdj待修、送修报告表', value: '3'},
          {label: '提前更换fdj统计报告表', value: '4'},
          {label: 'hkfdj报废统计报告表', value: '5'},
        ],
        columns1: [
          {key: 'a'},
          {key: 'b'},
          {key: 'c'},
          {key: 'd'},
          {key: 'e'},
          {key: 'f'},
          {key: 'g'},
          {key: 'h'},
          {key: 'i'},
          {key: 'j'},
          {key: 'k'},
          {key: 'l'},
          {key: 'm'},
        ],
        tableData1: [
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
        ],
        columns2: [
          {key: 'a'},
          {key: 'b'},
          {key: 'c'},
          {key: 'd'},
          {key: 'e'},
          {key: 'f'},
          {key: 'g'},
          {key: 'h'},
          {key: 'i'},
          {key: 'j'},
          {key: 'k'},
          {key: 'l'},
          {key: 'm'},
        ],
        tableData2: [
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df', m: 'dsf'},
        ],
        columns3: [
          {key: 'a'},
          {key: 'b'},
          {key: 'c'},
          {key: 'd'},
          {key: 'e'},
          {key: 'f'},
          {key: 'g'},
          {key: 'h'},
          {key: 'i'},
          {key: 'j'},
          {key: 'k'},
          {key: 'l'},
        ],
        tableData3: [
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
        ],
        columns4: [
          {key: 'a'},
          {key: 'b'},
          {key: 'c'},
          {key: 'd'},
          {key: 'e'},
          {key: 'f'},
          {key: 'g'},
          {key: 'h'},
        ],
        tableData4: [
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
        ],
        columns5: [
          {key: 'a'},
          {key: 'b'},
          {key: 'c'},
          {key: 'd'},
          {key: 'e'},
          {key: 'f'},
          {key: 'g'},
          {key: 'h'},
          {key: 'i'},
          {key: 'j'},
          {key: 'k'},
          {key: 'l'},
        ],
        tableData5: [
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
          {a: 'sdf', b: 'w5423', c: 'fsdf', d: 'dsf', e: 'fsdf', f: 'df', g: 'sdfsd', h: 'fd', i: 'dfas', j: 'df', k: 'fdsaf', l: 'df'},
        ],
      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
  .inner{
    background: linear-gradient(to right, #042E73, #04194E);
  }
  .custom-table{
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    /*overflow-x: auto;*/
    /*overflow-y: hidden;*/
    overflow: scroll;
  }
  /deep/.ivu-tabs-bar{
    margin-bottom: 0;
  }
  /deep/.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar{
    border-color: #0874B5;
    .ivu-tabs-tab-active{
      color: #03D536 !important;
      font-weight: 600;
      background: #053771 !important;
    }
    .ivu-tabs-tab{
      color: #fff;
      height: 30px;
      line-height: 30px;
      padding: 0 16px;
      border: 1px solid #0874B5;
      background: #054B8D;
    }
  }
  /deep/ .ivu-tabs{
    width: 100%;
    height: 100%;
    .ivu-tabs-bar{
      height: 30px;
      line-height: 30px;
    }
    .ivu-tabs-content{
      height: calc(100% - 30px);
      width: 100%;
    }
  }
</style>