<template>
  <div class="inner">
    <BlockTitle text="发动机详细情况" @moreFn="more"></BlockTitle>
    <div class="table-box">
      <Table :columns="columns" :data="tableData"></Table>
    </div>
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
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
          {
            code: 'FDJ001',
            type: 'AF0_1',
            state: '1',
            stateType: '正常',
            condition: 'dsfdssdf',
          },
        ]
      }
    },
    methods: {
      more() {
        this.$emit('more')
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
.table-box{
  width: 100%;
  height: 100%;
}
</style>