import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './../../ducks/userReducer'
import { getWorkouts, getTodaysWorkout, createWorkout, deleteWorkout, updateWorkout } from './../../ducks/workoutReducer'
import Header from './../Header/Header'
import DisplayWorkouts from './../DisplayWorkouts/DisplayWorkouts'
import DisplayToday from './../DisplayToday/DisplayToday'
import './Dashboard.css'
import { GoButton } from './../StyledComponents/Buttons'
import { InputTime } from './../StyledComponents/Inputs'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: '',
      time: 30,
      workout_id: 0,
      editing: false
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

createWorkout = () => {
  let { style, time } = this.state
  createWorkout(style, time)
  this.setState({ style: '', time: ''})
  this.props.history.push('/createworkout')
}

handleCheckBox = (prop, val) => {
  this.setState({
    [prop]: val,
    style: prop
  });
}

handleEditClick = () => {
  this.setState({
    editing: !this.state.editing
  })
}

handleUpdate = () => {
  this.setState({
    editing: !this.state.editing
  })
}

render() {
    return (
      <div className="main-container">
        <Header />
        <div className="boxes">
          <div className="display-container">
          <h1>Recent Workouts</h1>
            {this.props.workouts.workouts.map(workout => {
            return <DisplayWorkouts key={workout.workout_id} workout={workout}/>})}
          </div> 

          <div className="right-col">
            <div className="todays-container">
            <h1>Todays Workout</h1>
              {this.props.workouts.todaysWorkout.map((workout, i) => {
              return <DisplayToday 
                key={workout.workout_id} 
                workout={workout} 
                editing={this.state.editing} 
                style={this.state.style}
                time={this.state.time}
                handleEditClick={this.handleEditClick} 
                deleteWorkout={this.props.deleteWorkout}
                updateWorkout={this.props.updateWorkout}
                handleUpdate={this.handleUpdate}
                handleCheckBox={this.handleCheckBox}
                handleChange={this.handleChange}
                />})}
            </div>
            
            <div className="create-box">
            <h1>Create Workout</h1>
            <h3>Choose Format:</h3>
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
                  <InputTime dash name="time" onChange={this.handleChange} value={this.state.time}/>
              </label>  
                <GoButton go onClick={() => this.createWorkout()}>Go!</GoButton>
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

export default connect(mapStateToProps, {getData, getWorkouts, getTodaysWorkout, deleteWorkout, updateWorkout})(Dashboard)
