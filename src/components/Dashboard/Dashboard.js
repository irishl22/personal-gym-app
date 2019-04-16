import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import { getWorkouts, getTodaysWorkout, createWorkout } from './../../ducks/workoutReducer'
import Header from './../Header/Header'
import DisplayWorkouts from './../DisplayWorkouts/DisplayWorkouts'
import DisplayToday from './../DisplayToday/DisplayToday'
// import './Dashboard.css'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: '',
      time: 0
  }
}
  componentDidMount() {
    this.props.getData()
    this.props.getWorkouts()
    this.props.getTodaysWorkout()
}

handleChange = e => {
  let { name, value } = e.target
  this.setState({
    [name]: value 
  })
}

createWorkout() {
  let { style, time } = this.state
  createWorkout(style, time) 
  this.setState({ style: '', time: ''})
  this.props.history.push('/createworkout')
}

  render() {
    console.log(this.props.workouts.workouts[0])
    return (
      <div>
        <Header />
        <div className="display-container">
          {this.props.workouts.workouts.map((workout, i) => {
          return <DisplayWorkouts key={workout} workout={workout}/>})}
        </div> 

        <div className="todays-container">
          {this.props.workouts.todaysWorkout.map((workout, i) => {
          return <DisplayToday key={workout.display[i]} workout={workout}/>})}
        </div>
       
       <div className="create-box">
          <input type="text" name="style" placeholder="Workout Type" value={this.state.style} onChange={this.handleChange}/>
          <input type="number" name="time" placeholder="Workout Time" value={this.state.time} onChange={this.handleChange}/>
          <button onClick={() => this.createWorkout()}>Go!</button>
       </div>

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
