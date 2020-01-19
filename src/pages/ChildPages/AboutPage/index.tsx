import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text, RichText, Button} from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line @typescript-eslint/no-var-requires,import/first
import Marked from 'marked'
// import WxParse from '../../../component/wxParse/wxParse.js'
// import Html2Wxml from '../../../component/html2wxml/html2wxml'
// // eslint-disable-next-line import/first
// import Markdown from 'markdown-it'
import ToWxml from '../../../component/towxml/index'
import {connect} from '@tarojs/redux';
// import about from "../../../models/about";

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
  config: Config = {
    usingComponents: {
      wemark: '../../../wemark/wemark'
    }
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      article: '# head',
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
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'about/load',
      payload: ''
    });
    // const towxml = new ToWxml();
    // console.log("----article:", this.props.about.article.data);
    // const textData = towxml.toJson(Marked(this.props.about.article.data.name), 'html');
    // console.log("***#####", textData)
    // this.setState({
    //   article: textData
    // });



    // console.log("---111>" + this.state.article)
    // var md = new Markdown();
    // const article = md.render('# Marked in browser\n\nRendered by **marked**. ```java \n' +
    //   '\tpublic static void main(String[] args) {\n' +
    //   '        SpringApplication.run(JavanorthappApplication.class, args);\n' +
    //   '    }\n' +
    //   '```');
    // console.log(this.state.article)
    // Html2Wxml.html2wxml('article', article, this.$scope, 5);
    // // Html2Wxml.html2wxml('article', 'html', article, this.$scope);
    // WxParse.wxParse('article', 'html', article, this.$scope, 5)

  }


  componentWillUnmount () {

  }

  componentDidShow () {

    // console.log("----->>>>111" + this.state.article)
  }

  componentDidHide () { }


  showPage () {
    // console.log("--------------====>" + JSON.stringify(this.props.about.article.data.name))
    // this.setState({
    //   article: Marked(this.props.about.article.data.name)
    // })
    // console.log("---------***" + this.state.article)
    // // const toWxml = new ToWxml();
    // // toWxml.toJson('# Article title','markdown');
    // // let wxml = toWxml.toJson('# Article title', 'markdown');
    // // console.log("uuuuuuuuuuuuuuuuuuuuu", wxml)
    // return Marked(this.props.about.article.data.name);

    // return this.state.article
    // var md = new Markdown();
    // console.log(md.render(this.getData()));
    // console.log(Marked('# Marked in browser\n\nRendered by **marked**. ```java\n' +
    //   '\tpublic static void main(String[] args) {\n' +
    //   '        SpringApplication.run(JavanorthappApplication.class, args);\n' +
    //   '    }\n' +
    //   '```'));
    // return md.render(this.getData());

    // return Marked(this.getData());
    // return md.render('# Marked in browser\n\nRendered by **marked**.')
  }

  render () {
    return (
      <View>
        <Button onClick={this.showPage}>测试按钮1</Button>
        {/*<Text>{JSON.stringify(this.showPage())}</Text>*/}
        {/*<View>{Marked(this.props.about.article.data.name)}</View>*/}
        <Text>{this.state.article}</Text>
        {/*<Text>{this.state}</Text>*/}
        <View className='index'>
          <wemark md={this.state.md} link highlight type='wemark' />
          <wemark md={this.state.article} link highlight type='wemark' />
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
