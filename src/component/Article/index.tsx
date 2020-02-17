import Taro, {Component, Config} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import './index.scss'
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';
// type Props = {
//   onClick: () => void,
//   articleId: number,
//   title: string,
//   thumb: string,
//   author: string,
//   publishTime: string
// }
export default class Article extends Component {
  static options = {
    addGlobalClass: true
  };
  static defaultProps = {
    onClick: () => { },
    articleId: '',
    title: '',
    thumb: '',
    author: '',
    publishTime: ''
  };
  static propTypes = {
    onClick: PropTypes.func,
    articleId: PropTypes.number,
    title: PropTypes.string,
    thumb: PropTypes.string,
    author: PropTypes.string,
    publishTime: PropTypes.string
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      articleId: '',
      title: '',
      author: '',

    }
  }
  componentDidMount(): void {
  }

  render () {
    const {articleId, title} = this.props;
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
            <View className='at-col article-title'>{articleId}</View>
            {/*标签*/}
            <View className='article-tag'>
              <View className='author-view'>
                <View className='at-icon at-icon-user' />
                <Text className='author'>{title}</Text>
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
