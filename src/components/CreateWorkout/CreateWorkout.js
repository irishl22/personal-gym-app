import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovements } from './../../ducks/movementReducer'
import { getWorkouts, getTodaysWorkout } from './../../ducks/workoutReducer'
// import { Link } from 'react-router-dom'
import Header from './../Header/Header'
// import SelectMovement from '../SelectMovement/SelectMovement';
import axios from 'axios'
import './CreateWorkout.css'
import { MoveButton } from './../StyledComponents/Buttons'

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movements: [],
      move_id: 0,
      workout_id: 0,
      style: '',
      equip: '',
      location: ''
    }
  }

  componentDidMount() {
    this.props.getMovements()
    this.props.getWorkouts()
    this.props.getTodaysWorkout()
  }
  
  handleCheckBox(prop, val) {
    this.setState({
      [prop]: val,
      style: prop
    });
    function filterS(arr, style) {
      return arr.filter(move => move.move_style === style)
    }
    console.log(filterS(this.props.movements.movements, this.state.style))
}
  
handleDropDown = (e) => {
    this.setState({
      location: e.target.value
    });
 console.log(this.state.location)   
}

  handleSelect = (e) => {
    this.setState({
      move_id: e.target.value
    })
    console.log(this.state.move_id)
  }

  //inserting move into display w/ workout_id
  handleAddMove = () => {
    const id = this.props.workouts.todaysWorkout.map(workout => {
      return workout.id
    })
    const workout_id = id
    
    const { move_id } = this.state
    axios.post('/api/insert-movement', { workout_id, move_id })
    console.log(workout_id)
  }

  render() {
    // console.log(this.props.workouts)
    return (
      <div className="page-container">
          <Header />
        <div className="create-workout-body">
          {this.props.workouts.todaysWorkout.map(workout => {
          return (
            <div key={workout.workout_id}>
              {workout.workout_style}
              {workout.workout_time}
              {workout.workout_id} 
            </div>
            )})}
          
          <div className="workout-style-filter">
            <h4>Workout Style:</h4>
            <h5>Power</h5>
                <input type="checkbox" name="time" onChange={e => this.handleCheckBox("Power", e.target.checked)} value={this.state.time}/>
            <h5>Cardio</h5>
                <input type="checkbox" name="time" onChange={this.handleChange} value={this.state.time}/>
            <h5>Strength</h5>
                <input type="checkbox" name="time" onChange={this.handleChange} value={this.state.time}/>
            <h5>Strength/Stability</h5>
                <input type="checkbox" name="time" onChange={this.handleChange} value={this.state.time}/>
            <h5>Stability/Mobility</h5>
                <input type="checkbox" name="time" onChange={this.handleChange} value={this.state.time}/>
          </div>
          <div className="workout-muscle-filter">
            <h4>Muscle Group:</h4>
            <select onChange={this.handleDropDown} value={this.state.location}>
              <option></option>
          </div>
          <div className="workout-location-filter">
            <h4>Location:</h4>
            <select onChange={this.handleDropDown} value={this.state.location}>
              <option>Hardwood</option>
              <option>Mat</option>
              <option>Outside</option>
              <option>Rig</option>
              <option>Rubber</option>
              <option>Turf</option>
            </select>  
          </div>
            
            <div className="button-container">
              {this.props.movements.movements.map(movement => {
                return (
                  <MoveButton key={movement.move_id} value={movement.move_id} onClick={this.handleSelect}>
                {movement.move_name}
              </MoveButton>
            )
          })}
            </div>
        
          <MoveButton onClick={this.handleAddMove}>Add Move</MoveButton>
        </div>
      </div>
      )
    }
}

function mapStateToProps(reduxStoreState) {
  return {
      user: reduxStoreState.user,
      workouts: reduxStoreState.workouts,
      movements: reduxStoreState.movements
  }
}

export default connect(mapStateToProps, {getMovements, getWorkouts, getTodaysWorkout})(CreateWorkout)





// {this.props.workouts.todaysWorkout.map(workout => {
//   return (
//     <div key={workout.workout_id}>
//       {workout.workout_style}
//       {workout.workout_time}
//       {workout.workout_id} 
//     </div>
//     )})}


