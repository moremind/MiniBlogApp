import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config: Config = {
  };

  componentWillMount () {
    Taro.setNavigationBarTitle({
      title: this.$router.params.articleName,
      success () {
        console.log("加载页面业务");
      }
    });
  }

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
