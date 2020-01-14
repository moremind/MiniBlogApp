import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app, store, dispatch, registered;

function createApp(options?: any) {
  const { models } = options;
  // 开发环境打印日志
  if (process.env.NODE_ENV === 'development') {
    options.onAction = [createLogger()]
  }
  app = create({
    ...options
  });
  app.use(createLoading({}));
  if (!registered) models.forEach((model) => app.model(model));
  registered = true;
  app.start();

  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
}


