/**
 * @description: 专题页面配置文件
 * @author: hefengen
 * @email: hefengen@hotmail.com
 * @date: 2020年1月30日
 * @licence: MIT hirCodd
 */
// import JavaBasicPng from '../../assets/pic/Java.jpg'
// import JvmPng from '../../assets/pic/jvm.png'
// import JavaInterview from '../../assets/pic/interview-bak.jpg'
// import SpringPng from '../../assets/pic/spring.png'
// import SpringBootPng from '../../assets/pic/springboot.jpg'
// import SpringCloudPng from '../../assets/pic/springcloud.png'
// import NetworkPng from '../../assets/pic/network1.png'
// import WebPng from '../../assets/pic/frontend1.png'
// import RecordPng from '../../assets/pic/book2.png'

const JavaBasicPng = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/Java.jpg';
const JvmPng = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/jvm.png';
const JavaInterview = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/interview.jpg';
const SpringPng = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/spring.png';
const SpringBootPng = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/springboot.jpg';
const SpringCloudPng = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/springcloud.png';
const NetworkPng = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/network1.png';
const WebPng = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/frontend1.png';
const RecordPng = 'https://javanorthapp-1251602255.cos.ap-chengdu.myqcloud.com/weapp/book2.png';


const commonUrl = '/pages/ChildPages/JavaBasicPage/index';
export const TOPIC_ONE = {
  index: 0,
  url: commonUrl,
  image: JavaBasicPng,
  name: 'Java专题'
};

export const TOPIC_TWO = {
  index: 1,
  url: commonUrl,
  image: JvmPng,
  name: 'JVM专题'
};

export const TOPIC_THREE = {
  index: 2,
  url: commonUrl,
  image: JavaInterview,
  name: 'Java开发面试'
};

export const TOPIC_FOUR = {
  index: 3,
  url: commonUrl,
  image: SpringPng,
  name: 'Spring框架'
};

export const TOPIC_FIVE = {
  index: 4,
  url: commonUrl,
  image: SpringBootPng,
  name: 'SpringBoot模块'
};

export const TOPIC_SIX = {
  index: 5,
  url: commonUrl,
  image: SpringCloudPng,
  name: 'SpringCloud模块'
};

export const TOPIC_SEVEN = {
  index: 6,
  url: commonUrl,
  image:NetworkPng,
  name: '网络编程'
};

export const TOPIC_EIGHT = {
  index: 7,
  url: commonUrl,
  image: WebPng,
  name: 'Web编程'
};

export const TOPIC_NINE = {
  index: 8,
  url: commonUrl,
  image: RecordPng,
  name: '技术杂记'
};
