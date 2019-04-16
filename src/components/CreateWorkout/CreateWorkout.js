import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovements } from './../../ducks/movementReducer'
import { getWorkouts } from './../../ducks/workoutReducer'
import { Link } from 'react-router-dom'
import Header from './../Header/Header'
import SelectMovement from '../SelectMovement/SelectMovement';
import axios from 'axios'
// import { Button } from './../StyledComponents/Buttons'
// import { Input } from './../StyledComponents/Inputs'

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movements: [],
      workout_id: 8,
      move_id: 0
    }
  }

  componentDidMount() {
    this.props.getMovements()
    this.props.getWorkouts()
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
  }
/// move_id coming out null even though console loggin shows its on state
  handleAddMove = () => {
    const { workout_id, move_id } = this.state
    axios.post('/api/insert-movement', {workout_id, move_id})
  }

  render() {
    // console.log(this.props.movements.movements)
    return (
      <div>
        {/* <Header /> */}
        {this.props.workouts.workouts.map((workout, i) => {
        return (
          <div key={workout.display_id}>
            {workout.style}
            {workout.time}
          </div>
          )})}
         
            <button onClick={this.handleAddMove}>Add Move</button>
          
          {this.props.movements.movements.map(movement => {
         return (
          <button key={movement.move_id} value={movement.move_id} onClick={this.handleSelect}>
            {movement.move_name}
          </button>
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

export default connect(mapStateToProps, {getMovements, getWorkouts})(CreateWorkout)


