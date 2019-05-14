<template>
  <table>
    <slot name="tableHead">
      <thead>
      <tr>
        <th rowspan="2">姓名</th>
        <th colspan="2">年龄</th>
        <th rowspan="2">备注</th>
      </tr>
      <tr>
        <th>年龄</th>
        <th>年龄</th>
      </tr>
      </thead>
    </slot>
    <tbody>
      <tr v-for="(row, index) in res" :key="index">
        <td v-for="(item, i) in data" :key="i">{{row[item.key]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "mTable",
    props: {
      data: {
        type: [Object, Array],
        default: () => {
          return [
            {
              key: 'name'
            },
            {
              key: 'age'
            },
            {
              key: 'age1'
            },
            {
              key: 'aaa'
            },
          ];
        }
      },
      res: {
        type: Array,
        default: () => {
          return [
            {
              name: 'sdf',
              aaa: 'sdf',
              age: 12,
              age1: 12,
            },
            {
              name: 'rfg',
              aaa: 'rfg',
              age: 15,
              age1: 15,
            },
          ]
        }
      }
    }
  }
</script>

<style scoped lang="less">
  /*td, th {height:32px;width:1%;}*/
  table thead, tbody tr {
    display:table;
    width: calc(100% - 0px);
    table-layout:fixed;
  }
  table{
    width: 100%;
    height: 100%;
    color: #fff;
    border-collapse: collapse;
    thead{
      /*display: block;*/
      width: calc(100% - 0px);
      tr{
        th{
          height: 30px;
          color: #20D7ED;
          background: #20599C;
          opacity: .9;
          border: 1px solid transparent;
        }
        &:last-child th{
          border-bottom: none;
        }
      }
    }
    tbody{
      height: calc(100% - 60px);
      display: block;
      /*overflow-y:auto;*/
      tr{
        width: 100%;
        td{
          height: 30px;
          min-height: 30px;
          /*width: 100px;*/
          background: #20599C;
          opacity: .8;
          border-right: 1px dotted #fff;
          border-bottom: 1px dotted #fff;
        }
        td:last-child{
          border-right: none;
        }
      }
      tr:nth-child(odd){
        background: #010427;
      }
      tr:last-child td{
        border-bottom: none;
      }
    }
  }
</style>