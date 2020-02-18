import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import {connect} from "@tarojs/redux";
// @ts-ignore
@connect(({ home }) => ({
  home
}))
export default class Index extends Component {
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      article: ''
    }
  }

  //注册组件与设置标题
  config: Config = {
    navigationBarTitleText: this.props.title,
    usingComponents: {
      wemark: '../../../wemark/wemark',
    }
  };
  componentWillMount () {
    // 显示导航栏
    Taro.setNavigationBarTitle({
      title: this.$router.params.articleName
    });
  }
  async componentDidMount () {
    await this.getContent();
  }

  // 异步转为同步获取content，然后将content渲染到页面
  async getContent() {
    await this.props.dispatch({
      type: 'home/getContent',
      payload: {
        articleId: this.$router.params.articleId
      }
    });
    await this.setState({
      article: this.props.home.content
    })
  }

  //todo 将markdown文章转为html显示出来
  render () {
    return (
      <View className='article-detail'>
        <View className='article-title'>
          <wemark md={this.state.article} link highlight type='wemark' />
        </View>
        <View className='content'>
          <wemark md={this.state.articles.article} link highlight type='wemark' />
        </View>
      </View>
    )
  }
}
