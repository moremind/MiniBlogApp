<!--
 * @Author: your name
 * @Date: 2021-05-20 00:18:44
 * @LastEditTime: 2021-06-07 23:57:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaNorthMiniApp\src\pages\aboutme\index.vue
-->
<template>
  <view class="user-info-bar">
    <UserInfoBar :weChatUserLogin="weChatUserLogin" :isLogined="isLogined" @click="weChatUserLogin(event)"/>
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
  data() {
    return {
      isLogined: false, // 登陆状态
    }
  },
  setup() {
    
  },
  methods: {
    weChatUserLogin(event){
      // wechat 登陆逻辑
      // 1.获取用户授权wx.authorize，授权能够拿到scope.userInfo
      // 2.checkSession session=>保持 no-session=>wechat login(wx.login)
      // 3.调用 wx.login 能够拿到当前小程序的唯一标识（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）及本次登录的会话密钥（session_key）
      // 4.调用微信小程序wx.getUserInfo拿到用户数据存存储于数据库，如果用户数据库已经存在则直接更新页面状态即可
      // 最终目的：拿到用户登陆信息存储至数据库

      this.isLogined = true;
      console.log("登陆")
      console.log(this.isLogined)
    }
  }
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