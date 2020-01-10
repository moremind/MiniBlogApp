import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor() {
    super();
    this.state = {
      routerParams: this.$router.params.value
    }
    // Taro.setNavigationBarTitle(this.$router.params.value);
  }
  setTitle () {
    return this.$router.params.value
  }

  config: Config = {
    navigationBarTitleText: ''
    // navigationBarTitleText: Taro.setNavigationBarTitle((Object)this.$router.params.value)
  };

  //接收路由参数，在生命周期函数中获取
  componentWillMount () {
    console.log(typeof this.$router.params.value) // 输出 { id: 2, type: 'test' }
  }

  componentDidMount () {
    Taro.setNavigationBarTitle({
      title: this.$router.params.value,
      success () {
        console.log("加载页面业务");
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
