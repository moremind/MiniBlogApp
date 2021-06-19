<!--
 * @Author: your name
 * @Date: 2021-05-20 00:18:44
 * @LastEditTime: 2021-06-08 22:54:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaNorthMiniApp\src\pages\aboutme\index.vue
-->
<template>
  <view class="user-info-bar">
    <UserInfoBar :weChatUserLogin="weChatUserLogin"
                 :isLogined="isLogined"
                 @click="weChatUserLogin(event)"
                 :currentUser="this.$store.state.userInfo"/>
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
import Taro from '@tarojs/taro'
import UserInfoBar from '../../components/UserInfoBar'
import { AtList, AtListItem, AtDivider  } from 'taro-ui-vue3/lib'
import store from '../../store'
import { useStore } from 'vuex'
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
    const store = useStore()
    // const getUserInfo = computed(() => store.getters.getUserInfo)
    // const setUserInfo = () => {
    //   store.dispatch("setUserInfo")
    // },

    return {
      // setUserInfo,
      // userInfo: computed(() => store.state.userInfo)
    }
  },
  methods: {
    weChatUserLogin(event){
      var that = this;
      // wechat 登陆逻辑
      // 1.获取用户user profile
      // 2.checkSession session=>保持 no-session=>wechat login(wx.login)
      // 3.调用 wx.login 能够拿到当前小程序的唯一标识（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）及本次登录的会话密钥（session_key）
      // 4.发送到服务端存储用户数据
      // 最终目的：拿到用户登陆信息唯一标识存储至数据库
      // console.log(this.$store.setUserInfo)
      try{
        Taro.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log(res)
            var userInfo = res.userInfo;
            Taro.checkSession({
              success() {
                // 说明该用户的当前session未过期继续维持当前的登录状态
              },
              fail() {
                // 清除登录状态
                // session过期则需要重新登录
                that.$store.dispatch("setUserInfo", {});
                // that.$store.commit("setUserInfo", {})
                Taro.login({
                  success(res) {
                    if (res.code) {
                      Taro.request({
                        url: "http://localhost:8090/api/wechat/login",
                        data: {
                          code: res.code,
                          userInfo: userInfo
                        },
                        method: "POST",
                        header: {
                          'content-type': 'application/json' // 默认值
                        },
                        success(res) {
                          that.$store.dispatch("setUserInfo", userInfo);
                          // setUserInfo(userInfo);
                          that.isLogined = true;
                        },
                        fail(e) {
                        }
                      })
                    } else {
                      console.log('登录失败！' + res.errMsg)
                    }
                  }
                })
              }
            })
          },
          fail: (e) => {
            console.log(e)
          }
        })
      } catch(e) {
        console.warn(e)
      }
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
