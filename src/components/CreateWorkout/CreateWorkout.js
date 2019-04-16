import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWorkouts } from './../../ducks/workoutReducer'
import { Link } from 'react-router-dom'
import Header from './../Header/Header'
// import { Button } from './../StyledComponents/Buttons'
// import { Input } from './../StyledComponents/Inputs'

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  componentDidMount() {
    this.props.getWorkouts()
}

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value 
    })
  }

  handleAdd = () => {
    this.setState({
      number: this.state.number + 1
    })
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
          <button onClick={this.handleAdd}>Add Move</button>

         {+this.state.number === 1 ? (
           <div className="move-inputs">
             <input />
             <Link to='/selectmovement'><button>Select Move</button></Link>
             <button onClick={this.handleCancel}>Cancel</button>
           </div>
         ) : +this.state.number === 2 ? (
          <div className="move-inputs">
            <input />
            <Link to='/selectmovement'><button>Select Move</button></Link>
            <button onClick={this.handleCancel}>Cancel</button>
            <input />
            <Link to='/selectmovement'><button>Select Move</button></Link>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
          ) : (
           <div></div>
         )
        } 
        
       
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


