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
  td, th {height:32px;width:1%;}
  table thead, tbody tr {
    display:table;
    width: calc(100% - 5px);
    table-layout:fixed;
  }
  ::-webkit-scrollbar {
    width: 5px; /*对垂直流动条有效*/
    height: 10px; /*对水平流动条有效*/
  }

  /*定义滚动条的轨道颜色、内阴影及圆角*/
  ::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background: linear-gradient(#052357, #3262A0);
    box-shadow: inset 0px 0px 10px #008EAE;
    border-radius: 3px;
  }


  /*定义滑块颜色、内阴影及圆角*/
  ::-webkit-scrollbar-thumb{
    border-radius: 7px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #E8E8E8;
  }

  /*定义两端按钮的样式*/
  ::-webkit-scrollbar-button {
    /*background-color:cyan;*/
  }

  /*定义右下角汇合处的样式*/
  ::-webkit-scrollbar-corner {
    /*background:khaki;*/
  }
  table{
    width: 100%;
    height: 100%;
    color: #fff;
    border-collapse: collapse;
    thead{
      display: block;
      width: calc(100% - 5px);
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
      height: calc(100%);
      display: block;
      overflow-y:auto;
      tr{
        width: 100%;
        td{
          min-height: 30px;
          width: 100px;
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