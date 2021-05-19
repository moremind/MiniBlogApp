export default {
  pages: [
    'pages/index/index',
    'pages/topics/index',
    'pages/aboutme/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
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
        pagePath: "pages/aboutme/index",
        text: "我",
        iconPath: "assets/icon/mine.png",
        selectedIconPath: "assets/icon/mine-selected.png"
      }]
  }
}
