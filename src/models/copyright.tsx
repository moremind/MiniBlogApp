import * as ApiService from '../services/index'

export default {
  namespace: 'copyright',
  state: {
    copyright: ''
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
      const { data } = yield call(ApiService.getCopyright);
      yield put({
        type: 'save',
        payload: {
          copyright: data.data
        }
      });
    }
  }
}
