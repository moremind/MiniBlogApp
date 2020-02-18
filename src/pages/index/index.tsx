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

  config: Config = {
    navigationBarTitleText: '首页'
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      defaultPageNum: 1,
      currentPageNum: '',
      pageSize: 6,
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
  onClickArticle (articleId, title) {
    Taro.navigateTo({
      url: '/pages/ChildPages/ArticleDetails/index' + '?articleId=' + articleId + '&articleName=' + title
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
        pageNum: this.state.defaultPageNum,
        pageSize: this.state.pageSize
      }
    });
    await this.props.home.articles.map((article) => {
      this.state.articles.push(article);
    });
  }
  componentDidMount() {
    this.getArticles();
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
          {this.state.articles.map((post) =>
            <Article onClick={this.onClickArticle.bind(this, post.articleId, post.title)}
                     key={post.articleId}
                     articleId={post.articleId}
                     title={post.title}
                     author={post.author}
                     publishTime={post.publishTime}
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
}
