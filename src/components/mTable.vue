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
      <tr v-for="(row, index) in res">
        <td v-for="(item, i) in data">{{row[item.key]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "table",
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
</style>