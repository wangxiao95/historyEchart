<template>
  <div class="inner">
    <div class="custom-table">
      <MTable class="table-box"></MTable>
    </div>
  </div>
</template>

<script>
  import BlockTitle from './blockTitle'
  import MTable from './mTable'

  export default {
    name: "bottomLeft",
    components: {
      BlockTitle,
      MTable,
    },
    data() {
      return {

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