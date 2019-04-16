import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWorkouts } from './../../ducks/workoutReducer'
import { Link } from 'react-router-dom'
import Header from './../Header/Header'
import SelectMovement from '../SelectMovement/SelectMovement';
// import { Button } from './../StyledComponents/Buttons'
// import { Input } from './../StyledComponents/Inputs'

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movements: []
    }
  }

  componentDidMount() {
    this.props.getWorkouts()
}

  handleCancel = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        {this.props.workouts.workouts.map((workout, i) => {
        return (
          <div key={workout.display_id}>
            {workout.workout_style}
            {workout.workout_time}
          </div>
          )})}
          <Link to='/selectmovement'>
            <button>Add Move</button>
          </Link>
       
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

export default connect(mapStateToProps, {getWorkouts})(CreateWorkout)


