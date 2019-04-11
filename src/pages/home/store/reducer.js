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
    }]
})


const reducer = (state=defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default reducer