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
      editing: false,
      sets: 0,
      reps: 0
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
            
        <div className="create-body">
            <h1 className="create-headline">CREATE WORKOUT</h1>
            <h4 className="create-sub-headline">Workout &#9679; Eat Well &#9679; Be Patient</h4>
            <div className="create-box">
            <h3>Choose Format:</h3>
              <label>
                <h4>AMRAP</h4>
                <input type="radio" name="style" onClick={e => this.handleCheckBox("AMRAP", e.target.checked)} value={this.state.style}/>
              </label>
              <label>
                <h4>Interval</h4>
                <input type="radio" name="style" onClick={e => this.handleCheckBox("Interval", e.target.checked)} value={this.state.style}/>
              </label>
              <label>
                  <h4>RFT</h4>
                  <input type="radio" name="style" onClick={e => this.handleCheckBox("RFT", e.target.checked)} value={this.state.style}/>
              </label>
              <label>
                  <h4>Chipper</h4>
                  <input type="radio" name="style" onClick={e => this.handleCheckBox("Chipper", e.target.checked)} value={this.state.style}/>
              </label>  
              <label>
                  <h4>Partner</h4>
                  <input type="radio" name="style" onClick={e => this.handleCheckBox("Partner", e.target.checked)} value={this.state.style}/>
              </label>  
              <div className="workout-time">
                <h3>Workout Time: </h3><InputTime dash name="time" onChange={this.handleChange} value={this.state.time}/>
                  
              </div>  
                <GoButton go onClick={() => this.createWorkout()}>Go!</GoButton>
            </div>
        </div>
        <div className="workouts">

          <div className="display-container">
          <h1>Recent Workouts</h1>
          {this.props.workouts.workouts.map(workout => {
            return <DisplayWorkouts key={workout.workout_id} workout={workout}/>})}
          </div> 
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
