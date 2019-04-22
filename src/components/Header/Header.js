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
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { first, last, company, logo } = this.props.user;
    return (
      <div className="container">
       <div className="nav-links">
       <h5>{company}</h5>
          <a href="http://localhost:3000/#/dashboard">Home</a>
          <a href="http://localhost:6140/logout">Logout</a>
       </div>
        <div className="name-logo">
          <img
            className="company-logo"
            src={logo}
            alt="Liber8 Logo"
            style={{ width: 50 }}
          />
          <h3>
            Welcome, {first} {last}
          </h3>
       </div>
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
