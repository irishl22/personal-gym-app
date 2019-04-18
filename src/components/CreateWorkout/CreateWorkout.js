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
// import { Input } from './../StyledComponents/Inputs'

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movements: [],
      move_id: 0,
      workout_id: 0
    }
  }

  componentDidMount() {
    this.props.getMovements()
    this.props.getWorkouts()
    this.props.getTodaysWorkout()
}

  handleCancel = () => {
    this.setState({
      number: this.state.number - 1
    })
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
      <div className="create-workout-body">
        <Header />
        {this.props.workouts.todaysWorkout.map(workout => {
        return (
          <div key={workout.workout_id}>
            {workout.workout_style}
            {workout.workout_time}
            {workout.workout_id}
            
          </div>
          )})}
         
            <button onClick={this.handleAddMove}>Add Move</button>
          
          {this.props.movements.movements.map(movement => {
         return (
          <MoveButton key={movement.move_id} value={movement.move_id} onClick={this.handleSelect}>
            {movement.move_name}
          </MoveButton>
         )
       })}
       
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


