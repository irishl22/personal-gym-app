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

const mapState = (reduxState) => reduxState

export default connect(mapState, {getData})(Dashboard)
