import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import { getWorkouts, getTodaysWorkout, createWorkout } from './../../ducks/workoutReducer'
import Header from './../Header/Header'
import DisplayWorkouts from './../DisplayWorkouts/DisplayWorkouts'
import DisplayToday from './../DisplayToday/DisplayToday'
import CreateWorkout from '../CreateWorkout/CreateWorkout';


class Dashboard extends Component {
  componentDidMount() {
    this.props.getData()
    this.props.getWorkouts()
    this.props.getTodaysWorkout()
}

  render() {
    return (
      <div>
        <Header />

        {this.props.workouts.workouts.map((workout, i) => {
        return <DisplayWorkouts key={workout.display_id} workout={workout}/>})}

        {this.props.workouts.todaysWorkout.map((workout, i) => {
        return <DisplayToday key={workout.display_id} workout={workout}/>})}

        <CreateWorkout createWorkout={this.props.createWorkout}/>
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
      user: reduxStoreState.user,
      workouts: reduxStoreState.workouts
  }
}

export default connect(mapStateToProps, {getData, getWorkouts, getTodaysWorkout})(Dashboard)
