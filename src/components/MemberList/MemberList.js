import React, { Component } from "react";
import "./MemberList.css";
import axios from 'axios'
import Header from './../Header/Header'

class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        members: []
    };
  }

  componentDidMount() {
      axios.get('/auth/getMembers').then(res => {
          this.setState({
              members: res.data
          })
      })
  }
  
  render() {
      let members = this.state.members.map(member => {
          return (
              <div className="member-card">
                <div className="profile-info">
                    <h5>Name: {member.account_first_name} {member.account_last_name}</h5>
                    <h5>Email: {member.account_email}</h5>
                </div>
                <img src={member.account_company_logo} alt="profile" />
              </div>
          )
      })

    return (
      <div className="members-container">
        <Header />
        <h1>Gym Members</h1>
        {members}
      </div>
    );
  }
}

export default MemberList;
