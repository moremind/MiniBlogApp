import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/mine/index',
      'pages/topics/index',
      'pages/ChildPages/ArticleDetails/index',
      'pages/ChildPages/JavaBasicPage/index',
      'pages/ChildPages/BrowsePage/index',
      'pages/ChildPages/FavoritePage/index',
      'pages/ChildPages/MyLikePage/index',
      'pages/ChildPages/AboutPage/index',
      'pages/ChildPages/CopyrightPage/index',
      'pages/ChildPages/IssuePage/index',
    ],
    tabBar: {
      backgroundColor: "#fff",
      borderStyle: "black",
      selectedColor: "#07C160",
      color: "#000",
      list: [
        {
          pagePath: "pages/index/index",
          text: "主页",
          iconPath: "assets/icon/home.png",
          selectedIconPath: "assets/icon/home-selected.png"
        },
        {
          pagePath: "pages/topics/index",
          text: "主题",
          iconPath: "assets/icon/topic.png",
          selectedIconPath: "assets/icon/topic-selected.png"
        },
        // {
        //   pagePath: "pages/resources/index",
        //   text: "主题",
        //   iconPath: "assets/icon/topic.png",
        //   selectedIconPath: "assets/icon/topic-selected.png"
        // },
        {
          pagePath: "pages/mine/index",
          text: "我",
          iconPath: "assets/icon/mine.png",
          selectedIconPath: "assets/icon/mine-selected.png"
        }]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
