import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTextarea, AtButton }  from 'taro-ui'
export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    // navigationBarTitleText: '首页'
  };
  componentWillMount () {
    Taro.setNavigationBarTitle({
      title: this.$router.params.TitleText,
      success() {
        console.log("加载页面业务");
      }
    }).then(function () {
    });
  }
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='issue'>
          <View className='issue-box'>
            <AtTextarea
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              maxLength={200}
              placeholder='你的问题是...'
            />
          </View>
          <View className='submit-button'>
            <AtButton type='primary' size='normal' className='submit'>提交</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
