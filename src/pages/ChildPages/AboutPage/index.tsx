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
      wemark: '../../../wemark/wemark',
      // "towxml": '../../../component/towxml/towxml'
    }
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      articles: '# head',
      md: '# heading\n\nText'
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
      articles: this.props.about.articles.data
    })
  }

  componentDidMount() {
    this.getList();
  }


  componentWillUnmount () {

  }

  componentDidShow () {

    // console.log("----->>>>111" + this.state.article)
  }

  componentDidHide () { }


  render () {
    return (
      <View>
        {/*<Text>{JSON.stringify(this.showPage())}</Text>*/}
        {/*<View>{Marked(this.props.about.article.data.name)}</View>*/}
        {/*<Text>{this.state.article}</Text>*/}
        {/*<Text>{this.state}</Text>*/}
        <View className='index'>
          {/*<wemark md={this.state.md} link highlight type='wemark' >{this.state.md}</wemark>*/}
          <wemark md={this.state.articles.article} link highlight type='wemark' />
        </View>
        {/*<import src='../../../component/towxml/towxml.wxml' />*/}
        {/*<template is='nodes'  data='{{...article}}'/>*/}
        {/*<import src="../../../component/html2wxml/html2wxml.wxml" />*/}
        {/*<template is='html2wxml' data='{{wxmlData:article}}' />*/}
        {/*<RichText nodes={'article'}>{this.state.article}</RichText>*/}
        {/*<RichText nodes={'data'}>{this.showPage()}</RichText>*/}
      </View>
    )
  }
}
