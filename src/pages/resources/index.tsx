import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import WxParse from '../../component/wxParse/wxParse.js'

import Wx from '../../component/wxParse/wxParse.wxml

export default class Index extends Component {
  // config = {
  //   navigationBarBackgroundColor: '#ffffff',
  //   navigationBarTextStyle: 'black',
  //   navigationBarTitleText: 'WxParse 使用示例',
  //   backgroundColor: '#eeeeee',
  //   backgroundTextStyle: 'light'
  // }

  componentDidMount() {
    const article = '<div style="color: red">我是HTML代码</div><h2>标题2</h2><img src="http://192.168.122.142:80/public/1904/26/public-1904-26-c15d9fb7-0ad5-40a9-b845-6d085d6c0f30.jpg">'
    WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }

  render() {
    return (
      <View>
        <import src="https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/wxParse.wxml"/>
        <template is="wxParse" data="{{wxParseData:article.nodes}}"/>
        <import src='../../component/wxParse/wxParse.wxml'></import>
        <template is='wxParse' data='{{wxParseData:article.nodes}}' />
      </View>
    )
  }
}
