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

  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      title: this.$router.params.value,
      articles: []
    }
    // Taro.setNavigationBarTitle(this.$router.params.value);
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
    console.log(JSON.stringify(this.props.topicDetail.articles))
  }

  async componentDidMount () {
    await this.getArticlesByCategory();

  }

  componentWillUnmount () {
    this.setState({
      articles: []
    })
  }

  componentDidShow () { }

  componentDidHide () { }

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


  render () {
    return (
      <View className='index'>
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
        </View>
      </View>
    )
  }
}
