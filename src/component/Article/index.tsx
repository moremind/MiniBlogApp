import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import './index.scss'
export default class Article extends Component {
  static options = {
    addGlobalClass: true
  };

  render () {
    // const {articleId, title} = this.props;
    // console.log(this.props)
    return (
      <View className='article' onClick={this.props.onClick}>
        {/*文章内容*/}
        <View className='at-row'>
          {/*图片*/}
          <View >
            <Image className='article-thumb' src={"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/blog/home/hero.png"}/>
          </View>
          <View className='article-content'>
            {/*标题*/}
            <View className='at-col article-title'>{this.props.title}</View>
            {/*<View className='at-col article-title'>{this.state.title}</View>*/}
            {/*标签*/}
            <View className='article-tag'>
              <View className='author-view'>
                <View className='at-icon at-icon-user' />
                <Text className='author'>{this.props.author}</Text>
              </View>
              <View className='publish-view'>
                <View className='at-icon at-icon-calendar' />
                <Text className='publish-date'>{this.props.publishTime}</Text>
              </View>
            </View>
          </View>
        </View>
        <AtDivider height='16Px' lineColor='#ccc' />
      </View>

    )
  }
}
