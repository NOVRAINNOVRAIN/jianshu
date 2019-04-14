import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Detailwrapper, Header, Content } from './style'


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
}


const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

export default connect(mapStateToProps, null)(Detail)