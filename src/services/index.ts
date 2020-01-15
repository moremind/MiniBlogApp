/**
 * @description: 小程序所有请求的路由
 * @author: hefengen
 * @email: hefengen@hotmail.com
 * @date: 2020年1月14日
 * @licence: MIT hirCodd
 */


import API from './api'

// eslint-disable-next-line import/prefer-default-export
export function getMarkDown() {
  return API.get({
    url: 'https://raw.githubusercontent.com/hirCodd/JavaNorth/master/JavaBasis/%E7%BC%96%E7%A8%8B%E7%8F%A0%E7%8E%91/%E5%AE%9E%E7%94%A8%E7%9A%84Java%E7%BC%96%E7%A8%8B%E6%8A%80%E5%B7%A7%E4%B9%8B%E5%91%BD%E5%90%8D%E6%94%BB%E7%95%A5.md'
  });
}
