import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import { Button } from './../StyledComponents/Buttons'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }
 componentDidMount() {
     this.props.getData()
 }   
  render() {
    const { first, last, logo } = this.props.user
    return (
      <div className="container">
        <img src={logo} alt="Liber8 Logo" style={{width: 100}}/>
        <h3>Welcome, Trainer {first} {last}</h3>

     
          <nav className="nav-bar">
            <div 
              className={this.state.showMenu ? 'link-container slide' : 'no-show'}
              onClick={() => this.setState({showMenu: !this.state.showMenu})}
              >
              <span>Home</span>
              <span>Edit Profile</span>
              <span>Add New Exercise</span>
              <a href='http://localhost:6140/logout'><span>Logout</span></a>
            </div>
            <span
              className={this.state.showMenu ? 'no-show' : 'ham-menu'}
              onClick={() => this.setState({showMenu: !this.state.showMenu})}
              >&#9776;</span>
        </nav>
        
        {/* <a href='http://localhost:6140/logout'><Button>Logout</Button></a> */}
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

