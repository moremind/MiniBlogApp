import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'
import store from './store'

import './app.scss'

import 'taro-ui-vue3/dist/style/index.scss'
import "taro-ui-vue3/dist/style/components/card.scss";

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

const TaroVueUI = createUI();

App.use(store, TaroVueUI);

export default App
