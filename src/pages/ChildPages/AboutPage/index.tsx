import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text, RichText} from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line @typescript-eslint/no-var-requires,import/first
import Marked from 'marked'
import WxParse from '../../../component/wxParse/wxParse.js'
import Html2Wxml from '../../../component/html2wxml/html2wxml'
// eslint-disable-next-line import/first
import Markdown from 'markdown-it'

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
  constructor () {
    // eslint-disable-next-line prefer-rest-params
    super(...arguments);
    this.state = {
      article: []
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
    // const that = this;

    // await Taro.request({
    //   url: 'https://raw.githubusercontent.com/hirCodd/JavaNorth/master/JavaBasis/%E7%BC%96%E7%A8%8B%E7%8F%A0%E7%8E%91/%E5%AE%9E%E7%94%A8%E7%9A%84Java%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7%E4%B9%8B%E5%91%BD%E5%90%8D%E6%94%BB%E7%95%A5.md',
    // }).then(function (response) {
    //   console.log("request success");
    //   that.setState({
    //     article: JSON.stringify(response.data)
    //   });
    //   console.log(JSON.stringify(response.data))
    // });

    // this.state.article = this.getData();
  }

  componentDidMount() {
    var that = this;
    let p = new Promise(function (resolve, reject) {
      Taro.request({
        url: 'https://raw.githubusercontent.com/hirCodd/JavaNorth/master/JavaBasis/%E7%BC%96%E7%A8%8B%E7%8F%A0%E7%8E%91/%E5%AE%9E%E7%94%A8%E7%9A%84Java%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7%E4%B9%8B%E5%91%BD%E5%90%8D%E6%94%BB%E7%95%A5.md',
        success: function (res) {
          // console.log(JSON.stringify(res.data));
          resolve({data: JSON.stringify(res.data)});
          // return JSON.stringify(res.data).toString();
        },
        fail: function (res) {
          reject(res);
        }
      });
    });
    p.then(function (data) {

      console.log("--------------" + JSON.stringify(data))
      console.log(data.data)
    });


    console.log("---111>" + this.state.article)
    // var md = new Markdown();
    // const article = md.render('# Marked in browser\n\nRendered by **marked**. ```java \n' +
    //   '\tpublic static void main(String[] args) {\n' +
    //   '        SpringApplication.run(JavanorthappApplication.class, args);\n' +
    //   '    }\n' +
    //   '```');
    console.log(this.state.article)
    // Html2Wxml.html2wxml('article', article, this.$scope, 5);
    // // Html2Wxml.html2wxml('article', 'html', article, this.$scope);
    // WxParse.wxParse('article', 'html', article, this.$scope, 5)

  }


  componentWillUnmount () {

  }

  componentDidShow () {

    console.log("----->>>>111" + this.state.article)
  }

  componentDidHide () { }

  getData () {
    return new Promise(function (resolve, reject) {
      return Taro.request({
        url: 'https://raw.githubusercontent.com/hirCodd/JavaNorth/master/JavaBasis/%E7%BC%96%E7%A8%8B%E7%8F%A0%E7%8E%91/%E5%AE%9E%E7%94%A8%E7%9A%84Java%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7%E4%B9%8B%E5%91%BD%E5%90%8D%E6%94%BB%E7%95%A5.md',
        success: function (res) {
          // console.log(JSON.stringify(res.data));
          resolve({data: JSON.stringify(res.data)});
          // return JSON.stringify(res.data).toString();
        }
      });
    });

  }


  showPage () {
    return this.state.article
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
    return this.state.article && (
      <View>
        <View>{this.state.article}</View>
        {/*<import src='../../../component/wxParse/wxParse.wxml' />*/}
        {/*<template is='wxParse' data='{{wxParseData:article.nodes}}'/>*/}
        {/*<import src="../../../component/html2wxml/html2wxml.wxml" />*/}
        {/*<template is='html2wxml' data='{{wxmlData:article}}' />*/}
        <RichText nodes={'article'}>{this.state.article}</RichText>
        <RichText nodes={'data'}>{this.showPage()}</RichText>
      </View>
    )
  }
}
