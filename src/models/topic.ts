import * as ApiService from '../services/index'

export default {
  namespace: 'topic',
  state: {
    categories: [],
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    //dva中是action的处理器，用于处理异步操作
    // eslint-disable-next-line no-unused-vars
    *getCategory({ payload },{ call, put}){
      const { data } = yield call(ApiService.getCategory);
      yield put({
        type: 'save',
        payload: {
          categories: data.data
        }
      });
    },
    *getCategoryArticles({ payload },{ call, put}) {
      const { data } = yield call(ApiService.getArticlesByCategory, payload)
    }
  }
}
