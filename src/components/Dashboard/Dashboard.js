import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import Header from './../Header/Header'

class Dashboard extends Component {
  componentDidMount() {
    this.props.getData()
}
  render() {
    
    return (
      <div>
        <Header />

      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
      user: reduxStoreState.user
  }
}

export default connect(mapStateToProps, {getData})(Dashboard)
