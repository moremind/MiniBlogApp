<template>
  <view class="article-card">
    <view class="article-title">
      文章标题
    </view>
    <view class="article-info">
      <at-flex>
        <at-flex-item :size="4" isAuto>
          <view class="article-img">
            <cover-image class="article-img" src="https://blog-pic-lib-1251602255.cos.ap-shanghai.myqcloud.com/img/bottom.jpg"/>
          </view>
        </at-flex-item>
        <at-flex-item :size="8" isAuto isWrap>
          <view class="article-intro">
            {{articleIntroduce.substring(0,60)}}...
          </view>
          <view class="article-tag">
            <AtTag
              size="small"
              name='tag-1'
              type='primary'
              circle
            >tag-1</AtTag>
            <AtTag
              size="small"
              name='tag-1'
              type='primary'
              circle
            >tag-2</AtTag>
          </view>
          <view class="article-view-time">
            <at-flex>
              <at-flex-item :size="4">
                <view class="publish-date">
                2021-05-05
                </view>
              </at-flex-item>
              <at-flex-item :size="6">
                <view class="article-icon">
                  <AtIcon value='clock' size='10' color='#A8A8A8'></AtIcon>60
                  <AtIcon value='heart-2' size='10' color='#A8A8A8'></AtIcon>3
                  <AtIcon value='message' size='10' color='#A8A8A8'></AtIcon>60
                </view>
              </at-flex-item>
            </at-flex>
          </view>
        </at-flex-item>
      </at-flex>
    </view>
  </view>
</template>

<script>
import { AtCard } from 'taro-ui-vue3/lib'
import { AtFlex, AtFlexItem, AtTag, AtIcon   } from 'taro-ui-vue3/lib'
export default {
  name: 'Article',
  components: {
    AtCard,
    AtFlex,
    AtFlexItem,
    AtTag,
    AtIcon,
  },
  data() {
    return {
      articleIntroduce: '您正在浏览基于 Vue 2.x 的 Element UI 文档; 点击这里 查看Vue 3.x 的升级版本 指南 组件 主题 资源 中文 网站快速成型工具 Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端'
    }
  },
  setup() {

  },
  methods: {

  }

}
</script>

<style lang="scss">
@media (max-width: 767Px) {
  .article-card {
    /*display: flex;*/
    position: relative;
    background-color: #fff;
    color: #000;
    padding: 25px;
    margin: 30px;
    border: 2px solid #fff;
    border-radius: 15px;
    // box-shadow: 0 10px 10px 0 #F7F7F7;
    .article-title {
      text-align: left;
      font-size: 18Px/1 "STFangsong",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
      font-weight: 500;
      padding-bottom: 10px;
    
      /*display: flex;*/
    }

  }
  .article-info {
    margin-top: 10px;
    .article-intro {
      margin: 0px 20px;
      font-size: 16px;
      text-align: left;
    }
    .article-tag  {
      margin: 10px 10px;
      font-size: 16px;
      text-align: left;
      view {
        margin-left: 10px;
        background-color: #66B1FF;
        color: #fff;
        // padding: 10px;
      }
    }
    .article-view-time {
      margin: 10px 20px;
      text-align: left;
    }
  }
  .publish-date {
    font-size: 18px;
  }
  .article-icon {
    font-size: 18px;
    .at-icon{
      margin: 0 5px;
    }
  }
}
@media (min-width: 768Px) and (max-width: 1024Px) {

}
</style>
