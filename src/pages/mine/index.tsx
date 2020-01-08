import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import UserInfoBar from "../../component/UserInfoBar";
import { AtList, AtListItem } from "taro-ui"

export default class Mine extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我的',
    backgroundColor: '#CCC'
  };

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='mine-index'>
        <UserInfoBar></UserInfoBar>
        <View className='about-reader'>
          <AtList>
            <AtListItem title='浏览记录' arrow='right' iconInfo={{ size: 24, color: '#F5C534', value: 'clock' }} />
            <AtListItem title='我的星标' arrow='right' iconInfo={{ size: 24, color: '#74CAFF', value: 'star' }} />
            <AtListItem title='点赞好文' arrow='right' iconInfo={{ size: 25, color: '#FF4959', value: 'heart-2' }} />
            {/*<AtListItem title='我的xx' arrow='right' extraText='详细信息' iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark' }} />*/}
          </AtList>
        </View>
        <View className='faq'>
          <AtList>
            <AtListItem title='关于' arrow='right' iconInfo={{ size: 24, color: '#74CAFF', value: 'help' }} />
            <AtListItem title='版权说明' arrow='right' iconInfo={{ size: 24, color: '#74CAFF', value: 'alert-circle' }} />
            <AtListItem title='意见与建议' arrow='right' iconInfo={{ size: 24, color: '#74CAFF', value: 'message' }} />
          </AtList>
        </View>
      </View>
    )
  }
}
