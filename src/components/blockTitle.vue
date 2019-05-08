<template>
  <div class="title fix">
    <span class="fl">{{text}}</span>
    <a class="fr more" href="javascript:;" @click="moreFn">更多</a>
  </div>
</template>

<script>
  export default {
    name: "blockTitle",
    props: {
      text: '',
      more: '更多'
    },
    methods: {
      moreFn() {
        this.$emit('moreFn')
      }
    }
  }
</script>

<style scoped>
.more{
  color: #fff;
}
</style>