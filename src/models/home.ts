import * as ApiService from '../services/index'

export default {
  namespace: 'home',
  state: {
    articles: []
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    //dva中是action的处理器，用于处理异步操作
    // eslint-disable-next-line no-unused-vars
    *load({ payload },{ call, put}){
      const { data } = yield call(ApiService.getIndexArticle, payload.pageNum, payload.pageSize);
      console.log("@@@@@data---->" + JSON.stringify(data.data.list));
      yield put({
        type: 'save',
        payload: {
          articles: data.data.list
        }
      });
    }
  }
  // effects: {
  //   //dva中是action的处理器，用于处理异步操作
  //   // eslint-disable-next-line no-unused-vars
  //   *load({ payload },{ select, call, put}){
  //     const { data } = yield call(ApiService.getIndexArticle(1, 2));
  //     console.log("@@@@@data---->" + JSON.stringify(data));
  //     yield put({type: 'save', payload: { data }})
  //   }
  // }
}
