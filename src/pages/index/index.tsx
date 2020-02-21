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
      pageSize: 6,
      value: '',
      status: 'more',
      articles: [],
      searchArticles: [],
      isSearch: false
    }
  }
  async componentDidMount() {
    await this.getArticles(this.state.defaultPageNum);
  }
  onChange (value) {
    this.setState({
      value: value
    });
    console.log(value)
  }
  async onClear () {
    await this.setState({
      isSearch: false
    });
    await this.setState({
      searchArticles: []
    });
  }
  async onBlur () {
    await this.setState({
      isSearch: false
    });
    await this.setState({
      searchArticles: []
    });
    console.log(this.state.articles)
  }
  async onActionClick () {
    await this.setState({
      isSearch: true
    });
    await this.props.dispatch({
      type: 'home/searchArticle',
      payload: {
        keyword: this.state.value
      }
    });
    await this.props.home.articles.map((article) => {
      if(JSON.stringify(this.state.searchArticles).indexOf(JSON.stringify(article)) === -1){
        this.state.searchArticles.push(article);
      } else {

      }
    });
    // console.log(this.state.searchArticles.length)
    await this.props.dispatch({
      type: 'home/clean',
      payload: {
        articles: []
      }
    });
  }
  onClickArticle (articleId, title) {
    Taro.navigateTo({
      url: '/pages/ChildPages/ArticleDetails/index' + '?articleId=' + articleId + '&articleName=' + title
    });
  }
  async handleClick () {
    const that = this;
    if (this.props.home.nextPage != 0) {
      // 开始加载
      this.getArticles(this.props.home.nextPage).then(function () {
        if (that.props.home.nextPage == 0) {
          that.setState({
            status: 'noMore'
          })
        } else {
          that.setState({
            status: 'more'
          });
        }
      })
    } else {
      this.setState({
        status: 'noMore'
      });
    }
  }
  async getArticles (pageNumber) {
    await this.props.dispatch({
      type: 'home/load',
      payload: {
        pageNum: pageNumber,
        pageSize: this.state.pageSize
      }
    });
    await this.props.home.articles.map((article) => {
      this.state.articles.push(article);
    });
    await this.props.dispatch({
      type: 'home/clean',
      payload: {
        articles: []
      }
    });
  }

  render () {
    return (
      <View>
        {/*渲染搜索按钮*/}
        <AtSearchBar
          showActionButton
          actionName='搜一搜'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onClear={this.onClear.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onActionClick={this.onActionClick.bind(this)
          }
        />
        {
          this.state.isSearch ?
            <View>
              {this.state.searchArticles.map((post) =>
                <Article onClick={this.onClickArticle.bind(this, post.articleId, post.title)}
                         key={post.articleId}
                         articleId={post.articleId}
                         title={post.title}
                         author={post.author}
                         publishTime={post.publishTime}
                ></Article>
              )}
            </View> : <View>
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
        }
        {/*<Button onClick={this.getArticles}>请求文章</Button>*/}
         <View >
           <AtLoadMore
             className='load-more'
             onClick={this.handleClick.bind(this)}
             status={this.state.status}
             noMoreText={"没有更多了"}
           />
         </View>
      </View>
    )
  }
}
