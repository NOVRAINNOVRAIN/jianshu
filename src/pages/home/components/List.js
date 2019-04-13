import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <Link to='/detail' key={item.get('id')}>
                <ListItem>
                  <img className='pic' src={item.get('imgUrl')} alt={item.get('title')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
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