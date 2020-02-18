import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss'
import dva from './utils/dva'
import models from './models/index'
import './app.scss'
import '@tarojs/async-await'
import { Provider } from "@tarojs/redux";

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();
class App extends Component {
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
  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'));
