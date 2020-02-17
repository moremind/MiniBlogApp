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
  // console.log("get data:---------->" + JSON.stringify(API.get({
  //   url: 'http://localhost:8090/api/test'
  // })))
  return API.get({
    url: '/test'
  });
}

export function getIndexArticle(pageNum, pageSize) {
  return API.get({
    url: '/article/getArticle?' + 'pageNum=' + pageNum + '&pageSize=' + pageSize
  });

}
