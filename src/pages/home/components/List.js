import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'


class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <ListItem key={item.get('id')}>
                <img className='pic' src={item.get('imgUrl')} alt={item.get('title')} />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage']),
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {    
    const action = actionCreators.getMoreACticleListAction(page)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)