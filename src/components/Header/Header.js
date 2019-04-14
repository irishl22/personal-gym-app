import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'

class Header extends Component {
 componentDidMount() {
     this.props.getData()
 }   
  render() {
    return (
      <div>
        {this.props.user.first}
        {this.props.user.last}
        {this.props.user.company}
        {this.props.user.logo}
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
    return {
        user: reduxStoreState.user
    }
}

export default connect(mapStateToProps, {getData})(Header)

