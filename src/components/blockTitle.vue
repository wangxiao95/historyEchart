<template>
  <div class="title fix">
    <span class="fl title-text"><span class="dot"></span>{{text}}</span>
    <a v-show="isMore" class="fr more" href="javascript:;" @click="moreFn">{{more}}</a>
  </div>
</template>

<script>
  export default {
    name: "blockTitle",
    props: {
      text: '',
      more: {
        default: '更多'
      },
      isMore: {
        default: true
      }
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