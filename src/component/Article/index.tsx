import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import './index.scss'
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';

export default class Article extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    onClick: () => {},
  };
  static propTypes = {
    onClick: PropTypes.func,
  };
  constructor () {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments)
    this.state = {
    }
  }

  render () {
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
