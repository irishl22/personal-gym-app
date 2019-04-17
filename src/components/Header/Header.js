import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import { Button } from './../StyledComponents/Buttons'
import './Header.css'

class Header extends Component {
 componentDidMount() {
     this.props.getData()
 }   
  render() {
    const { first, last, logo } = this.props.user
    return (
      <div className="container">
        <img src={logo} alt="Liber8 Logo" style={{width: 100}}/>
        <h3>Welcome, Trainer {first} {last}</h3>
      
        <a href='http://localhost:6140/logout'><Button>Logout</Button></a>
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

