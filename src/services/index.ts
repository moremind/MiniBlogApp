/**
 * @description: 小程序所有请求的路由
 * @author: hefengen
 * @email: hefengen@hotmail.com
 * @date: 2020年1月14日
 * @licence: MIT hirCodd
 */


import Api from './api'

export function getMarkDown() {
  return Api.get({
    url: '/test'
  });
}

/**
 * 获取文章
 * @param pageNum
 * @param pageSize
 */
export function getIndexArticle(pageNum, pageSize) {
  return Api.get({
    url: '/article/getArticle?' + 'pageNum=' + pageNum + '&pageSize=' + pageSize
  });

}

/**
 * 通过文章id获取文章内容
 * @param articleId
 */
export function getContentById(articleId) {
  return Api.get({
    url: '/article/getContent?' + 'articleId=' + articleId
  })
}


