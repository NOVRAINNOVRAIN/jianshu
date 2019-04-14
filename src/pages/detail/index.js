import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Detailwrapper, Header, Content } from './style'
import { actionCreators } from './store'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <Detailwrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </Detailwrapper>
    )
  }

  componentDidMount() {
    this.props.getDetailInfo()
  }
}


const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailInfo() {
      const action = actionCreators.getDetailInfoAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)