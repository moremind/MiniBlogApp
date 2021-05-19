<template>
  <AtCard
    note='小Tips'
    extra='额外信息'
    title='这是个标题'
    thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
  >
    这也是内容区 可以随意定义功能
  </AtCard>
</template>

<script>
import { AtCard } from 'taro-ui-vue3/lib'
export default {
  name: 'Article',
  components: {
    AtCard
  },
  data() {
    return {

    }
  },
  setup() {

  },
  methods: {

  }

}
</script>

<style lang="scss">

</style>
