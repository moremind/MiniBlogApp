import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text, RichText, Button} from '@tarojs/components'
import './index.scss'
import {connect} from '@tarojs/redux';

// @ts-ignore
@connect(({ about }) => ({
  about
}))
export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    usingComponents: {
      wemark: '../../../wemark/wemark'
    }
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      aboutContent: '# head'
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
    console.log(this);

  }

  async getList() {
    await this.props.dispatch({
      type: 'about/load',
      payload: ''
    });

    await this.setState({
      aboutContent: this.props.about.about
    })
  }

  async componentDidMount() {
    await this.getList();
  }

  render () {
    return (
      <View>
        <View className='index'>
          {/*<wemark md={this.state.md} link highlight type='wemark' >{this.state.md}</wemark>*/}
          <wemark md={this.state.aboutContent} link highlight type='wemark' />
        </View>
      </View>
    )
  }
}
