// 测试请求about页面
import Service from '../services/index'

export default {
  namespace: 'about',
  state: {
    article: ''
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    //dva中是action的处理器，用于处理异步操作
    *load ({call}) {
      // let { data } = yield call
    }
  }
}
