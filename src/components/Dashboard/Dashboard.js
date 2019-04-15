import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import { getWorkouts } from './../../ducks/workoutReducer'
import Header from './../Header/Header'
import DisplayWorkouts from './../DisplayWorkouts/DisplayWorkouts'
import DisplayToday from './../DisplayToday/DisplayToday'


class Dashboard extends Component {
  componentDidMount() {
    this.props.getData()
    this.props.getWorkouts()
}

  render() {
    return (
      <div>
        <Header />

        {this.props.workouts.workouts.map((workout, i) => {
        return <DisplayWorkouts key={workout.display_id} workout={workout}/>})}

        <DisplayToday />
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
      user: reduxStoreState.user,
      workouts: reduxStoreState.workout
  }
}

export default connect(mapStateToProps, {getData, getWorkouts})(Dashboard)
