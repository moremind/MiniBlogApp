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
    var md = new Markdown();
    const article = md.render('# Marked in browser\n\nRendered by **marked**. ```java \n' +
      '\tpublic static void main(String[] args) {\n' +
      '        SpringApplication.run(JavanorthappApplication.class, args);\n' +
      '    }\n' +
      '```');
    Html2Wxml.html2wxml('article', article, this.$scope, 5);
    // Html2Wxml.html2wxml('article', 'html', article, this.$scope);
    WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }


  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  showPage () {
    var md = new Markdown();
    console.log(md.render(
      ```java
    	  /**
    	    * The throwable that caused this throwable to get thrown, or null if this
    	    * throwable was not caused by another throwable, or if the causative
    	    * throwable is unknown.  If this field is equal to this throwable itself,
    	    * it indicates that the cause of this throwable has not yet been
    	    * initialized.
    	    *
    	    * @serial
    	    * @since 1.4
    	    */
    	      private Throwable cause = this;
    	  ```
    ))
    console.log(Marked('# Marked in browser\n\nRendered by **marked**. ```java\n' +
      '\tpublic static void main(String[] args) {\n' +
      '        SpringApplication.run(JavanorthappApplication.class, args);\n' +
      '    }\n' +
      '```'));

    return Marked('# Marked in browser\n\nRendered by **marked**. ```\n' +
      '\tpublic static void main(String[] args) {\n' +
      '        SpringApplication.run(JavanorthappApplication.class, args);\n' +
      '    }\n' +
      '```');
    // return md.render('# Marked in browser\n\nRendered by **marked**.')
  }

  render () {
    return (
      <View>
        <import src='../../../component/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
        <import src="../../../component/html2wxml/html2wxml.wxml" />
        <template is='html2wxml' data='{{wxmlData:article}}' />
      </View>
    )
  }
}
