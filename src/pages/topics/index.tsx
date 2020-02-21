import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid } from "taro-ui"
import * as Conf from './config'
import './index.scss'
import {connect} from "@tarojs/redux";

// @ts-ignore
@connect(({ topic }) => ({
  topic
}))
export default class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      // dataList: [
      //   {
      //     id: Conf.TOPIC_ONE.index,
      //     url: Conf.TOPIC_ONE.url,
      //     image: Conf.TOPIC_ONE.image,
      //     value: Conf.TOPIC_ONE.name
      //   },
      //   {
      //     id: Conf.TOPIC_TWO.index,
      //     url: Conf.TOPIC_TWO.url,
      //     image: Conf.TOPIC_TWO.image,
      //     value: Conf.TOPIC_TWO.name
      //   },
      //   {
      //     id: Conf.TOPIC_THREE.index,
      //     url: Conf.TOPIC_THREE.url,
      //     image: Conf.TOPIC_THREE.image,
      //     value: Conf.TOPIC_THREE.name
      //   },
      //   {
      //     id: Conf.TOPIC_FOUR.index,
      //     url: Conf.TOPIC_FOUR.url,
      //     image: Conf.TOPIC_FOUR.image,
      //     value: Conf.TOPIC_FOUR.name
      //   },
      //   {
      //     id: Conf.TOPIC_FIVE.index,
      //     url: Conf.TOPIC_FIVE.url,
      //     image: Conf.TOPIC_FIVE.image,
      //     value: Conf.TOPIC_FIVE.name
      //   },
      //   {
      //     id: Conf.TOPIC_SIX.index,
      //     url: Conf.TOPIC_SIX.url,
      //     image: Conf.TOPIC_SIX.image,
      //     value: Conf.TOPIC_SIX.name
      //   },
      //   {
      //     id: Conf.TOPIC_SEVEN.index,
      //     url: Conf.TOPIC_SEVEN.url,
      //     image: Conf.TOPIC_SEVEN.image,
      //     value: Conf.TOPIC_SEVEN.name
      //   },
      //   {
      //     id: Conf.TOPIC_EIGHT.index,
      //     url: Conf.TOPIC_EIGHT.url,
      //     image: Conf.TOPIC_EIGHT.image,
      //     value: Conf.TOPIC_EIGHT.name
      //   },
      //   {
      //     id: Conf.TOPIC_NINE.index,
      //     url: Conf.TOPIC_NINE.url,
      //     image: Conf.TOPIC_NINE.image,
      //     value: Conf.TOPIC_NINE.name
      //   }
      // ]
    }
  }
  config: Config = {
    navigationBarTitleText: '专题'
  };

  /**
   * 获取分类
   */
  async getCategories () {
    await this.props.dispatch({
      type: 'topic/getCategory'
    });
    await this.props.topic.categories.map((category) => {
      this.state.categories.push(category);
    });
  }

  async componentWillMount () {
    await this.getCategories();
  }

  // component卸载时清空category
  componentWillUnmount () {
    this.setState({
      categories: []
    })
  }

  handlerClick = (navPage, id) => {
    if (navPage.id === id) {
      Taro.navigateTo({
        url: navPage.url + '?pageIndex=' + id + '&origin=' + navPage.origin + '&value=' + navPage.value
      });
    } else {
      console.log("error pages")
    }
  };

  render () {
    return (
      <View className='topics-content'>
        <AtGrid onClick={this.handlerClick} data={this.state.categories} />
      </View>
    )
  }
}
