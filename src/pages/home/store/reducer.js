import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
      id: 1,
      title: '社会热点',
      imgUrl: 'https://img.icons8.com/doodle/48/000000/bebo.png'
    },{
      id: 2,
      title: '音乐',
      imgUrl: 'https://img.icons8.com/metro/26/000000/musical-notes.png'
    },{
      id: 3,
      title: '手绘',
      imgUrl: 'https://img.icons8.com/dusk/64/000000/picture.png'
    }],
    articleList: [
      {
        id: 1,
        title: '一步步教你建立UI设计规范！',
        desc: '一、为什么要建立规范 用户体验一致 塑造品牌感利于多人协作 方便维护和更新，减少冗余内容',
        imgUrl: 'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468487353.74.webp'
      },
      {
        id: 2,
        title: '40分钟看完js主流面试题',
        desc: '1. javascript的typeof返回哪些数据类型. 答案：string,boolean,number,undefined,functio...',
        imgUrl: '//upload-images.jianshu.io/upload_images/15233518-3ac0dc11215d09af.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
      },
      {
        id: 3,
        title: '做了100张PPT，原来鱼骨图还可以这样用！',
        desc: '之前大家问过鱼骨图应该怎么使用，如何在PPT中更好的表现出来。 对于鱼骨图的使用确实是一个很好的元素，一旦用好不仅能让页面逻辑关系清晰还能丰富页...',
        imgUrl: '//upload-images.jianshu.io/upload_images/5369363-7ad0b2f6aa174237.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
      },
    ],
    recommendList: [
      {
        id: 1,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
      },
      {
        id: 2,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
      }
    ]
})


const reducer = (state=defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default reducer