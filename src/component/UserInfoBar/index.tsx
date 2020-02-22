import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class UserInfoBar extends Component {
  render () {
    return (
      <View className='user-info'>
        {/*用户头像*/}
        {
          this.props.isLogin ?
            <View>
              <View className='at-row at-row__justify--center'>
                <View className='user-pic'>
                  <Image className='user-avi-pic' src={this.props.userInfo.avatarUrl} />
                </View>
              </View>
              {/*用户名称*/}
              <View className='at-row at-row__justify--center'>
                <View className='getUser'>
                  <View className='username'>{this.props.userInfo.nickName}</View>
                </View>
              </View>
            </View> : <View>
              {/*如果未登陆则使用默认的图片*/}
              <View className='at-row at-row__justify--center'>
                <View className='user-pic'>
                  <Image className='user-avi-pic' src='https://finen-1251602255.cos.ap-shanghai.myqcloud.com/blog/home/hero.png' />
                </View>
              </View>
              {/*用户名称*/}
              <View className='at-row at-row__justify--center'>
                <View className='getUser'>
                  <AtButton openType='getUserInfo' onGetUserInfo={this.props.onClick}>点我登陆</AtButton>
                </View>
                {/*<View className='username'>点击登陆</View>*/}
              </View>
            </View>
        }
      </View>
    )
  }
}
