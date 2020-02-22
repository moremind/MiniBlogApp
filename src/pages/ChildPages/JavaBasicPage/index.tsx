import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtSearchBar } from 'taro-ui'
// eslint-disable-next-line import/first
import { View } from '@tarojs/components'
import Article from "../../../component/Article";
import {connect} from "@tarojs/redux";

// @ts-ignore
@connect(({ topicDetail }) => ({
  topicDetail
}))
export default class Index extends Component {

  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      pageSize: 6,
      value: '',
      articles: [],
      searchArticles: [],
      isSearch: false
    }
  }

  config: Config = {
  };

  //接收路由参数，在生命周期函数中获取
  componentWillMount () {
    Taro.setNavigationBarTitle({
      title: this.$router.params.value
    });
  }

  // 通过分类获取文章
  async  getArticlesByCategory () {
    await this.props.dispatch({
      type: 'topicDetail/getCategoryArticles',
      payload: {
        category: this.$router.params.origin
      }
    });
    await this.props.topicDetail.articles.map((article) => {
      this.state.articles.push(article);
    });
  }

  async componentDidMount () {
    await this.getArticlesByCategory();

  }

  componentWillUnmount () {
    this.setState({
      articles: []
    })
  }

  onChange (value) {
    this.setState({
      value: value
    });
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
    //判断是否有重复文章
    await this.props.home.articles.map((article) => {
      if(JSON.stringify(this.state.searchArticles).indexOf(JSON.stringify(article)) === -1){
        this.state.searchArticles.push(article);
      } else {

      }
    });
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


  render () {
    return (
      <View>
        {/*渲染搜索按钮*/}
        {/*<AtSearchBar*/}
        {/*  showActionButton*/}
        {/*  actionName='搜一搜'*/}
        {/*  value={this.state.value}*/}
        {/*  onChange={this.onChange.bind(this)}*/}
        {/*  onClear={this.onClear.bind(this)}*/}
        {/*  onBlur={this.onBlur.bind(this)}*/}
        {/*  onActionClick={this.onActionClick.bind(this)*/}
        {/*  }*/}
        {/*/>*/}
        {
          this.state.isSearch ?
            <View>
              {this.state.searchArticles.map((post) =>
                <Article onClick={this.onClickArticle.bind(this, post.articleId, post.title)}
                         key={post.articleId}
                         articleId={post.articleId}
                         title={post.title}
                         thumb={post.thumb}
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
                         thumb={post.thumb}
                         author={post.author}
                         publishTime={post.publishTime}
                ></Article>
              )}
            </View>
        }
      </View>
    )
  }
}
