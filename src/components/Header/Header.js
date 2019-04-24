import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./../../ducks/userReducer";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  hamMenu = () => {

  }

  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { first, last, url } = this.props.user;
    return (
      <div className="container">
       
       <div className="nav-links">
            <a href="http://localhost:3000/#/dashboard">Home</a>
            <a href="http://localhost:3000/#/createworkout">Edit Workout</a>
            <a href="http://localhost:3000/#/addmove">Add Exercise</a>
            <a href="http://localhost:6140/logout">Logout</a>
      </div>    
        <div className={this.state.showMenu ? 'menu slide' : 'menu'}>
        
          <div className="links-container">
            <a href="http://localhost:3000/#/dashboard">Home</a>
            <hr/>
            <a href="http://localhost:3000/#/createworkout">Edit Workout</a>
            <hr/>
            <a href="http://localhost:3000/#/addmove">Add Exercise</a>
            <hr/>
            <a href="http://localhost:6140/logout">Logout</a>
                
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

export default connect(
  mapStateToProps,
  { getData }
)(Header);
