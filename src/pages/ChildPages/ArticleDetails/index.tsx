import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '文章详情'
  };

  //todo 将markdown文章转为html显示出来
  render () {
    return (
      <View className='article-detail'>
        <View className='article-title'>
          <View>文章标题</View>
        </View>
      </View>
    )
  }
}
