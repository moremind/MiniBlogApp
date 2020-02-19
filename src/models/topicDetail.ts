import * as ApiService from '../services/index'

export default {
  namespace: 'topicDetail',
  state: {
    articles: [],
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    //dva中是action的处理器，用于处理异步操作

    *getCategoryArticles({ payload },{ call, put}) {
      const { data } = yield call(ApiService.getArticlesByCategory, payload.category);
      yield put({
        type: 'save',
        payload: {
          articles: data.data
        }
      });
    }
  }
}
