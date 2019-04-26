import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./../../ducks/userReducer";
import "./Header.css";
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class HeaderUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  logout = async () => {
    await axios.get('/logout')
    .catch(err => {console.log(err)})
    this.props.history.push('/')
  }

  componentDidMount() {
    this.props.getData();
  }
  
  render() {
    console.log(this.props.user)
    const { first, last, url } = this.props.user;
    return (
      <div className="container">
       
       <div className="nav-links">

          <div onClick={this.logout}>Logout</div>
      </div>    
        <div className={this.state.showMenu ? 'menu slide' : 'menu'}>
        
          <div className="links-container">
          
            <div onClick={this.logout}>Logout</div>
                
            <div 
              className="x-menu" 
              onClick={() => this.setState({showMenu: !this.state.showMenu})}>X</div>

          </div>
        </div>

        <div className="name-logo">
          <img
            className="company-logo"
            src={url}
            alt="Company Logo"
            style={{ width: 50 }}
          />
          <h3>
            Welcome, {first} {last}
          </h3>
          </div>

        <nav className="nav-bar">
          <div 
            className="ham-menu" 
            onClick={() => this.setState({showMenu: !this.state.showMenu})}>&#9776;</div>
        </nav>

      </div>
    );
  }
}

function mapStateToProps(reduxStoreState) {
  return {
    user: reduxStoreState.user
  };
}

export default withRouter(connect(mapStateToProps, { getData })(HeaderUser));
