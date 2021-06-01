<!--
 * @Author: your name
 * @Date: 2021-05-28 12:11:44
 * @LastEditTime: 2021-06-01 12:29:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaNorthMiniApp\src\components\UserInfoBar.vue
-->
<template>
  <view class="user-info">
    <view class="user-avatar">
      <cover-image class="article-img" src="https://blog-pic-lib-1251602255.cos.ap-shanghai.myqcloud.com/img/bottom.jpg"/>
    </view>
    <view class="user-name">
    hello,finen
    </view>
  </view>
</template>
<script>
import {AtFlex, AtFlexItem } from 'taro-ui-vue3/lib'
export default {
  name: "UserInfoBar",
  components: {
    AtFlex,
    AtFlexItem,

  },
  setup() {

  },
}
</script>
<style lang="scss">

.user-info {
  justify-content: center;
  position: relative;
  padding: 10Px;
  margin: 0 auto;
  background-color: #FFFFFF;
  cover-image {
    border-radius: 40Px;
  }
  .user-avatar {
    display: flex;
    justify-content: center;
    .article-img{
      position: relative;
      height: 80Px;
      width: 80Px;
    }
  }
  .user-name {
    margin-top: 15Px;
    font-weight: 500;
    text-align: center;
    font: 16Px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
    border: 0 solid #ffffff;
    padding: 0 12Px;
    height: 40Px;
  }
}
</style>
