<template>
  <view class="index">
    <AtSearchBar
      placeholder='请输入ISBN号'
      showActionButton
      :value="value3"
      @change="onChange(this, 'value3')"
      @action-click="onActionClick"
    />
    <Article></Article>
  </view>
</template>

<script>
import { AtSearchBar } from 'taro-ui-vue3/lib'
import Article from "../../components/Article";
export default {
  name: 'Index',
  components: {
    AtSearchBar,
    Article
  },
  data() {
    return {
      value3: "",
    }
  },
  methods: {
    onActionClick() {
      console.log("点击")
    }
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
