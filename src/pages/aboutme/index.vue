<!--
 * @Author: your name
 * @Date: 2021-05-20 00:18:44
 * @LastEditTime: 2021-06-01 22:21:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaNorthMiniApp\src\pages\aboutme\index.vue
-->
<template>
  <view class="user-info-bar">
    <UserInfoBar/>
  </view>
  <view class="faq">
    <AtList>
      <AtListItem title='标题文字' arrow='right' />
      <AtDivider/>
      <AtListItem title='标题文字' arrow='right' />
      <AtDivider  />
      <AtListItem title='标题文字' arrow='right' />
      <AtDivider  />
      <AtListItem title='标题文字' arrow='right' />
    </AtList>
  </view>
</template>

<script>
import UserInfoBar from '../../components/UserInfoBar'
import { AtList, AtListItem, AtDivider  } from 'taro-ui-vue3/lib'
export default {
  name: 'About',
  components: {
    UserInfoBar,
    AtList,
    AtListItem,
    AtDivider,
  },
  setup() {
    
  },
}
</script>

<style lang="scss">
page {
  background-color: #ECEFF1;
  /*background-color: #ffffff;*/
}
.faq {
  margin-top: 50px;
  font: 16px "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
}
.at-list > .at-divider  {
  height: 1px;
  .at-divider__line {
    background-color: #ECEFF1;

  }

}
.at-list__item .item-extra__icon-arrow {
  color: #ccc;
  font-size: 32px;
}
</style>