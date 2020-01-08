import Taro, { Component, Config } from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import { AtIcon, AtDivider } from 'taro-ui'
import './index.scss'

export default class Article extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '文章详情'
  };
  constructor () {
    super(...arguments)
    this.state = {
      thumb: '',
      articleTitle: '',
      articleAuthor: '',
      articleDate: ''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='article'>
        {/*文章内容*/}
        <View className='at-row'>
          {/*图片*/}
          <View >
            <Image className='article-thumb' src={"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/blog/home/hero.png"}/>
          </View>
          <View className='article-content'>
            {/*标题*/}
            <View className='at-col article-title'>文章标题</View>
            {/*标签*/}
            <View className='article-tag'>
              <View className='author-view'>
                <View className='at-icon at-icon-user' />
                <Text className='author'>小猫咪</Text>
              </View>
              <View className='publish-view'>
                <View className='at-icon at-icon-calendar' />
                <Text className='publish-date'>2020年1月2日</Text>
              </View>
            </View>
          </View>
        </View>
        <AtDivider height='16Px' lineColor='#ccc' />
      </View>

    )
  }
}
