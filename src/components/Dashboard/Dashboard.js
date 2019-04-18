import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import { getWorkouts, getTodaysWorkout, createWorkout, deleteWorkout } from './../../ducks/workoutReducer'
import Header from './../Header/Header'
import DisplayWorkouts from './../DisplayWorkouts/DisplayWorkouts'
import DisplayToday from './../DisplayToday/DisplayToday'
import './Dashboard.css'
import { Button } from './../StyledComponents/Buttons'
import { Input } from './../StyledComponents/Inputs'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: '',
      time: 0,
      workout_id: 0
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

handleCheckBox(prop, val) {
  this.setState({
    [prop]: val,
    style: prop
  });
  console.log(this.state.style)
}



render() {
    return (
      <div className="main-container">
        <Header />
        <div className="boxes">
          <div className="display-container">
            {this.props.workouts.workouts.map(workout => {
            return <DisplayWorkouts key={workout.workout_id} workout={workout}/>})}
          </div> 

          <div className="right-col">
            <div className="todays-container">
              {this.props.workouts.todaysWorkout.map((workout, i) => {
              return <DisplayToday key={workout.workout_id} workout={workout}/>})}
            </div>
            
            <div className="create-box">
            <h1>Create Workout</h1>
            <h3>Choose Style:</h3>
              <label>
                <input type="radio" name="style" onClick={e => this.handleCheckBox("AMRAP", e.target.checked)} value={this.state.style}/>
                AMRAP
              </label>
              <label>
                <input type="radio" name="style" onClick={e => this.handleCheckBox("Interval", e.target.checked)} value={this.state.style}/>
                Interval
              </label>
              <label>
                  <input type="radio" name="style" onClick={e => this.handleCheckBox("RFT", e.target.checked)} value={this.state.style}/>
                  RFT
              </label>
              <label>
                  <input type="radio" name="style" onClick={e => this.handleCheckBox("Chipper", e.target.checked)} value={this.state.style}/>
                  Chipper
              </label>  
              <label>
                  <input type="radio" name="style" onClick={e => this.handleCheckBox("Partner", e.target.checked)} value={this.state.style}/>
                  Partner
              </label>  
              <label className="workout-time">
                <h4>Workout Time:</h4>
                  <Input dash type="text" name="time" onChange={this.handleChange} value={this.state.time}/>
              </label>  
                <Button go onClick={() => this.createWorkout()}>Go!</Button>
            </div>
          </div>    
        
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

export default connect(mapStateToProps, {getData, getWorkouts, getTodaysWorkout, deleteWorkout})(Dashboard)
