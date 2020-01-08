import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './index.scss'

export default class UserInfoBar extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user-info'>
        {/*用户头像*/}
        <View className='at-row at-row__justify--center'>
          <View className='user-pic'>
            <Image className='user-avi-pic' src='https://finen-1251602255.cos.ap-shanghai.myqcloud.com/blog/home/hero.png' />
          </View>
        </View>
        {/*用户名称*/}
        <View className='at-row at-row__justify--center'>
          <View className='username'>pingo</View>
        </View>
      </View>
    )
  }
}
