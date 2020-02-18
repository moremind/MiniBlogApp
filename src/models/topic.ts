import * as ApiService from '../services/index'

export default {
  namespace: 'topic',
  state: {
    articles: [],
    content: ''
  },
  reducers: {
    save (state, { payload }) {
      console.log(payload);
      return { ...state, ...payload };
    }
  },
  effects: {
    //dva中是action的处理器，用于处理异步操作
    // eslint-disable-next-line no-unused-vars
    *load({ payload },{ call, put}){
      const { data } = yield call(ApiService.getIndexArticle, payload.pageNum, payload.pageSize);
      yield put({
        type: 'save',
        payload: {
          articles: data.data.list
        }
      });
    },
    //根据文章id获取文章内容
    *getContent({ payload }, { call, put }) {
      const { data } = yield call(ApiService.getContentById, payload.articleId);
      yield put({
        type: 'save',
        payload: {
          content: data.data
        }
      });
    }
  }
}
