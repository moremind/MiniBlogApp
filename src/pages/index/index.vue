<!--
 * @Author: your name
 * @Date: 2021-05-18 12:27:39
 * @LastEditTime: 2021-05-25 23:00:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaNorthMiniApp\src\pages\index\index.vue
-->
<template>
  <view class="index">
    <view class="search-bar">
      <AtSearchBar
        placeholder='请输入ISBN号'
        showActionButton
        :value="value3"
        @change="onChange(this, 'value3')"
        @action-click="onActionClick"
      />
    </view>
    <view class="article-container">
      <view class="article"><Article ></Article></view>
      <view class="article"><Article ></Article></view>
    </view>
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

<style lang="scss">
page {
  background-color: #ECEFF1;
  /*background-color: #ffffff;*/
}
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 20px;
  height: 100%;
  width: 100%;
}
.article-container {
  .article {
    margin-top: 1rem;
  }

}
</style>
