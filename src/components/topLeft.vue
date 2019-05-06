<template>
  <div>
    <Title text="基本信息" @moreFn="more"></Title>
  </div>
</template>

<script>
  import Title from './title'
  export default {
    name: "topLeft",
    components: {
      Title,
    },
    methods: {
      more() {
        console.log(1);
      }
    }
  }
</script>

<style scoped>

</style>