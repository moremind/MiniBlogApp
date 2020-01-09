import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid } from "taro-ui"
import './index.scss'
import JavaBasicPng from '../../assets/pic/Java.jpg'
import JvmPng from '../../assets/pic/jvm.png'
import JavaInterview from '../../assets/pic/interview-bak.jpg'
import SpringPng from '../../assets/pic/spring.png'
import SpringBootPng from '../../assets/pic/springboot.jpg'
import SpringCloudPng from '../../assets/pic/springcloud.png'
import NetworkPng from '../../assets/pic/network1.png'
import WebPng from '../../assets/pic/frontend1.png'
import RecordPng from '../../assets/pic/book2.png'

export default class Topics extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      dataList: [
        {
          image: JavaBasicPng,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/Java.jpg',
          value: 'Java专题'
        },
        {
          image: JvmPng,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/jvm.png',
          value: 'JVM专题'
        },
        {
          image: JavaInterview,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/Java.jpg',
          value: 'Java开发面试'
        },

        {
          image: SpringPng,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/spring.png',
          value: 'Spring框架'
        },
        {
          image: SpringBootPng,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/springboot.jpg',
          value: 'SpringBoot模块'
        },
        {
          image: SpringCloudPng,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/springcloud.png',
          value: 'SpringCloud模块'
        },
        {
          image: NetworkPng,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/network1.png',
          value: '网络编程'
        },
        {
          image: WebPng,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/frontend1.png',
          value: 'Web编程'
        },
        {
          image: RecordPng,
          // image: 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/book2.png',
          value: '技术杂记'
        }
      ]
    }
  }
  config: Config = {
    navigationBarTitleText: '专题'
  };
  static data  = {

  };

  onClickJavaBasic () {
    console.log('------------------>')
  }

  render () {
    return (
      <View className='topics-content'>
        <AtGrid onClick={"",this.state.dataList[1], this.onClickJavaBasic} data={this.state.dataList} />
      </View>
    )
  }
}
