import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {connect} from "@tarojs/redux";

// @ts-ignore
@connect(({ copyright }) => ({
  copyright
}))
export default class Index extends Component {
  config = {
    usingComponents: {
      wemark: '../../../wemark/wemark',
    }
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      copyrightContent: '# head'
    }
  }
  componentWillMount () {
    Taro.setNavigationBarTitle({
      title: this.$router.params.TitleText,
      success() {
        console.log("加载页面业务");
      }
    }).then(function () {
    });
  }
  async getList() {
    await this.props.dispatch({
      type: 'copyright/load',
      payload: ''
    });

    await this.setState({
      copyrightContent: this.props.copyright.copyright
    })
  }

  async componentDidMount() {
    await this.getList();
  }

  render () {
    return (
      <View className='index'>
        {/*<wemark md={this.state.md} link highlight type='wemark' >{this.state.md}</wemark>*/}
        <wemark md={this.state.copyrightContent} link highlight type='wemark' />
      </View>
    )
  }
}
