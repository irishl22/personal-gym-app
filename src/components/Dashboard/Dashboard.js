import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import Header from './../Header/Header'
import DisplayWorkouts from './../DisplayWorkouts/DisplayWorkouts'
import DisplayToday from './../DisplayToday/DisplayToday'
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: {}
    }
    this.getWorkouts = this.getWorkouts.bind(this)
  }
  componentDidMount() {
    this.props.getData()
}

getWorkouts() {
  axios.get('/api/user-workouts').then(res => {
    this.setState({ workouts: res.data})
  })
}

  render() {
    console.log(this.state.workouts)
    // const { workouts } = this.state
    // const workout = workouts.map((item, i) => {
    //   return <p key={i}>{item}</p>
    // })
    return (
      <div>
        <Header />
        {/* <DisplayWorkouts workouts={this.state.workouts}/> */}
      
        <DisplayToday />
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
