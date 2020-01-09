// @ts-ignore
import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
// eslint-disable-next-line import/first
// @ts-ignore
import { AtSearchBar, AtList, AtListItem, AtCard  } from 'taro-ui'
import { View } from '@tarojs/components'
// @ts-ignore
import Article from "../../component/Article";


export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  onClickArticle () {
    console.log("ssss");
    Taro.navigateTo({
      url: '/pages/ChildPages/ArticleDetails/index'
    })
  }
  render () {
    return (
      <View>
        {/*渲染搜索按钮*/}
        <AtSearchBar
          actionName='搜一搜'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
        <View>
          {/*文章渲染列表*/}
          <Article onClick={this.onClickArticle}></Article>
        </View>
      </View>
    )
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

}
