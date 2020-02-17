import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
// eslint-disable-next-line import/first
import { AtSearchBar, AtLoadMore  } from 'taro-ui'
// eslint-disable-next-line import/first
import {Button, View} from '@tarojs/components'
import Article from "../../component/Article";

import {connect} from '@tarojs/redux';

// @ts-ignore
@connect(({ home }) => ({
  home
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
    navigationBarTitleText: '首页'
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      value: '',
      status: 'more',
      articles: []
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  onClickArticle () {
    console.log("ssss");
    Taro.navigateTo({
      url: '/pages/ChildPages/ArticleDetails/index' + '?articleName=' + '哈哈哈'
    }).then(function () {
    });
  }
  handleClick () {
    // 开始加载
    this.setState({
      status: 'loading'
    });
    // 模拟异步请求数据
    setTimeout(() => {
      // 没有更多了
      this.setState({
        status: 'noMore'
      })
    }, 2000)
  }
  async getArticles() {
    await this.props.dispatch({
      type: 'home/load',
      payload: {
        pageNum: 1, pageSize: 2
      }
    });
    // await this.setState({
    //   articles: this.props.home.articles
    // });
    await this.props.home.articles.map((article) => {
      this.state.articles.push(article);
    });
    // await this.state.articles.push(this.props.home.articles);
    // console.log(JSON.stringify(this.props.home.articles))
    console.log(JSON.stringify(this.state.articles))
    this.state.articles.map((post) => {
      console.log(post)
    })
  }
  componentDidMount() {
    this.getArticles();

    // this.setState({
    //   articles: this.props.about.article.data
    // })

  }

  render () {
    return (
      <View>
        {/*渲染搜索按钮*/}
        <AtSearchBar
          actionName='搜一搜'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
        <View>
          {/*文章渲染列表*/}
          {/*{this.state.articles.map((article) => {*/}
          {/*  <View>{article}</View>*/}
          {/*})*/}
          {/*}*/}
          {/*<View>*/}
          {/*  /!*文章渲染列表*!/*/}
          {/*  <Article onClick={this.onClickArticle}></Article>*/}
          {/*</View>*/}
            {this.state.articles.map((post) =>
              <Article onClick={this.onClickArticle}
                       articleId={post.articleId}
                       title={post.title}
              ></Article>
            )}


        </View>
        <Button onClick={this.getArticles}>请求文章</Button>
         <View >
           <AtLoadMore
             className='load-more'
             onClick={this.handleClick.bind(this)}
             status={this.state.status}
           />
         </View>
      </View>
    )
  }



  componentWillMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

}
