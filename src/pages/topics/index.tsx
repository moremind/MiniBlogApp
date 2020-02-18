import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid } from "taro-ui"
import * as Conf from './config'
import './index.scss'


export default class Topics extends Component {
  constructor() {
    super();
    this.state = {
      dataList: [
        {
          index: Conf.TOPIC_ONE.index,
          url: Conf.TOPIC_ONE.url,
          image: Conf.TOPIC_ONE.image,
          value: Conf.TOPIC_ONE.name
        },
        {
          index: Conf.TOPIC_TWO.index,
          url: Conf.TOPIC_TWO.url,
          image: Conf.TOPIC_TWO.image,
          value: Conf.TOPIC_TWO.name
        },
        {
          index: Conf.TOPIC_THREE.index,
          url: Conf.TOPIC_THREE.url,
          image: Conf.TOPIC_THREE.image,
          value: Conf.TOPIC_THREE.name
        },
        {
          index: Conf.TOPIC_FOUR.index,
          url: Conf.TOPIC_FOUR.url,
          image: Conf.TOPIC_FOUR.image,
          value: Conf.TOPIC_FOUR.name
        },
        {
          index: Conf.TOPIC_FIVE.index,
          url: Conf.TOPIC_FIVE.url,
          image: Conf.TOPIC_FIVE.image,
          value: Conf.TOPIC_FIVE.name
        },
        {
          index: Conf.TOPIC_SIX.index,
          url: Conf.TOPIC_SIX.url,
          image: Conf.TOPIC_SIX.image,
          value: Conf.TOPIC_SIX.name
        },
        {
          index: Conf.TOPIC_SEVEN.index,
          url: Conf.TOPIC_SEVEN.url,
          image: Conf.TOPIC_SEVEN.image,
          value: Conf.TOPIC_SEVEN.name
        },
        {
          index: Conf.TOPIC_EIGHT.index,
          url: Conf.TOPIC_EIGHT.url,
          image: Conf.TOPIC_EIGHT.image,
          value: Conf.TOPIC_EIGHT.name
        },
        {
          index: Conf.TOPIC_NINE.index,
          url: Conf.TOPIC_NINE.url,
          image: Conf.TOPIC_NINE.image,
          value: Conf.TOPIC_NINE.name
        }
      ]
    }
  }
  config: Config = {
    navigationBarTitleText: '专题'
  };

  handlerClick = (value, index, ) => {
    console.log(value, index)
    if (value.index === index) {
      Taro.navigateTo({
        url: value.url + '?pageIndex=' + index + '&value=' + value.value
      }).then(

      );
    } else {
      console.log("error pages")
    }
  };

  render () {
    return (
      <View className='topics-content'>
        <AtGrid onClick={this.handlerClick} data={this.state.dataList} />
      </View>
    )
  }
}
