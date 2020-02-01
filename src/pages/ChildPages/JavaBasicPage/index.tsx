import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtSearchBar } from 'taro-ui'
// eslint-disable-next-line import/first
import { View } from '@tarojs/components'
import Article from "../../../component/Article";

export default class Index extends Component {

  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      title: this.$router.params.value
    }
    // Taro.setNavigationBarTitle(this.$router.params.value);
  }
  setTitle () {
    return this.$router.params.value
  }

  config: Config = {
  };

  //接收路由参数，在生命周期函数中获取
  componentWillMount () {
    Taro.setNavigationBarTitle({
      title: this.$router.params.value,
      success () {
        console.log("加载页面业务");
      }
    });
    console.log(typeof this.$router.params.value) // 输出 { id: 2, type: 'test' }
  }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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
      url: '/pages/ChildPages/ArticleDetails/index' + '?articleName=' + '哈哈哈'
    }).then(function () {
    });
  }

  render () {
    return (
      <View className='index'>
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

      </View>
    )
  }
}
