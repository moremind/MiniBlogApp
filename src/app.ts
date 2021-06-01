/*
 * @Author: your name
 * @Date: 2021-05-18 12:27:39
 * @LastEditTime: 2021-06-01 12:31:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaNorthMiniApp\src\app.ts
 */
import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'
import store from './store'

import './app.scss'

import 'taro-ui-vue3/dist/style/index.scss'
import "taro-ui-vue3/dist/style/components/card.scss";
import "taro-ui-vue3/dist/style/components/flex.scss";
import "taro-ui-vue3/dist/style/components/icon.scss";
import "taro-ui-vue3/dist/style/components/grid.scss";
import "taro-ui-vue3/dist/style/components/list.scss";
import "taro-ui-vue3/dist/style/components/divider.scss";
const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

const TaroVueUI = createUI();

App.use(store, TaroVueUI);

export default App
