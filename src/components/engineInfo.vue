<template>
  <div class="inner">
    <BlockTitle text="发动机详细情况" @moreFn="more"></BlockTitle>
    <!--<div class="table-box">-->
      <!--<Table :columns="columns" :data="tableData"></Table>-->
    <!--</div>-->
    <div class="table-box">
      <table class="custom-table">
        <thead>
          <tr>
            <th>FDJ号码</th>
            <th>FDJ型别</th>
            <th>状态</th>
            <th>状态类别</th>
            <th>技术状况</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in tableData">
            <td>{{item.code}}</td>
            <td>{{item.type}}</td>
            <template v-if="item.state == '正常'">
              <td>{{item.state}}</td>
            </template>
            <template v-else>
              <td style="color:red;">{{item.state}}</td>
            </template>
            <template v-if="item.stateType == 1">
              <td>√</td>
            </template>
            <template v-else>
              <td style="color:red;font-weight: 500;">X</td>
            </template>
            <td>{{item.condition}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import BlockTitle from './blockTitle'
  export default {
    name: "engineInfo",
    components: {
      BlockTitle,
    },
    data() {
      return {
        columns: [
          {
            title: 'FDJ号码',
            key: 'code'
          },
          {
            title: 'FDJ型别',
            key: 'type'
          },
          {
            title: '状态',
            key: 'state'
          },
          {
            title: '状态类别',
            key: 'stateType'
          },
          {
            title: '技术状况',
            key: 'condition'
          },
        ],
        tableData: [
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '正常',
            stateType: '1',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '故障',
            stateType: '2',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '故障',
            stateType: '2',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '正常',
            stateType: '1',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '正常',
            stateType: '1',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '正常',
            stateType: '1',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '正常',
            stateType: '1',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '正常',
            stateType: '1',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '故障',
            stateType: '2',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '正常',
            stateType: '1',
            condition: 'dsfdssdf',
          },
        ]
      }
    },
    methods: {
      more() {

      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
.table-box{
  color: #fff;
  width: 100%;
  height: calc(100% - 30px);
  padding: 5px;
  background: #04377F;
  overflow: hidden;
  .custom-table{
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    thead{
      tr{
        th{
          height: 30px;
          color: #20D7ED;
          background: #20599C;
          opacity: .9;
          border-right: 1px solid transparent;
        }
      }
    }
    tbody{
      tr{
        width: 100%;
        td{
          height: calc((100% - 30px) / 10);
          background: #20599C;
          opacity: .8;
          border-right: 1px dotted #fff;
          border-bottom: 1px dotted #fff;
        }
        td:last-child{
          color: yellow;
          border-right: none;
        }
      }
      tr:nth-child(odd){
        background: #010427;
      }
      tr td:nth-child(2){
        color: #20D7ED;
        font-weight: 500;
      }
      tr td:nth-child(4){
        color: #03FC24;
        font-size: 18px;
        font-weight: 800;
      }
      tr:last-child td{
        border-bottom: none;
      }
    }
  }
}
</style>