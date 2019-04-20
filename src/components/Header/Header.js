import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
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
    const { first, logo } = this.props.user
    return (
      <div className="container">
        <img src={logo} alt="Liber8 Logo" style={{width: 100}}/>
        <h3>Welcome, {first}</h3>

            <div 
              className={this.state.showMenu ? 'top-menu slide' : 'no-show'}
              onClick={() => this.setState({showMenu: !this.state.showMenu})}
              >
                <a href='http://localhost:3000/#/dashboard' className="closebtn">&times;</a>
                <a href='http://localhost:3000/#/dashboard'>Home</a>
                <a href='http://localhost:3000/#/'>Edit Profile</a>
                <a href='http://localhost:3000/#/createworkout'>Add New Exercise</a>
                <a href='http://localhost:6140/logout'><span>Logout</span></a>
            </div>

            <span
              className={this.state.showMenu ? 'no-show' : 'ham-menu'}
              onClick={() => this.setState({showMenu: !this.state.showMenu})}
              >&#9776;</span>
        
        
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

