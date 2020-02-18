import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTextarea, AtButton }  from 'taro-ui'
export default class Index extends Component {

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
