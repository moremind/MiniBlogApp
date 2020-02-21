// 测试请求about页面
import * as ApiService from '../services/index'

export default {
  namespace: 'about',
  state: {
    article: ''
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, article: payload };
    }
  },
  effects: {
    //dva中是action的处理器，用于处理异步操作
    // eslint-disable-next-line no-unused-vars
    *load({ payload },{ select, call, put}){
      const { data } = yield call(ApiService.getMarkDown);
      yield put({type: 'save', payload: { data }})
    }
  }
}
