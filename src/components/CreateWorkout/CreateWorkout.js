import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovements } from './../../ducks/movementReducer'
import { getWorkouts, getTodaysWorkout } from './../../ducks/workoutReducer'
import { Link } from 'react-router-dom'
import Header from './../Header/Header'
import axios from 'axios'
import './CreateWorkout.css'
import { MoveButton, ListButton, DoneButton } from './../StyledComponents/Buttons'
import { Input } from './../StyledComponents/Inputs'

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movements: [],
      move_id: 0,
      workout_id: 0,
      style: '',
      equip: '',
      location: '',
      muscle: '',
      movesList: [],
      sets: '',
      reps: ''
    }
  }

  componentDidMount() {
    this.props.getMovements()
    this.props.getWorkouts()
    this.props.getTodaysWorkout()
  }
  
  handleRadio(prop, val) {
    this.setState({
      [prop]: val,
      style: prop
    });
    console.log(this.state.style)
}
  
handleDropDownLocation = (e) => {
    this.setState({
      location: e.target.value
    });
 console.log(this.state.location)   
}

handleDropDownMuscle = (e) => {
    this.setState({
      muscle: e.target.value
    });
 console.log(this.state.muscle)   
}
handleDropDownEquip = (e) => {
    this.setState({
      equip: e.target.value
    });
    console.log(this.state.equip)
}

handleSelect = (e) => {
    this.setState({
      move_id: e.target.value
    })
    this.setState({movesList: [...this.state.movesList, e.target.name]})
  }
  
  handleAddMove = () => {
    const id = this.props.workouts.todaysWorkout.map(workout => {
      return workout.id
    })
    const workout_id = id
    const { move_id, sets, reps } = this.state
    axios.post('/api/insert-movement', { workout_id, move_id, sets, reps });
    this.setState({
      sets: '',
      reps: ''
    })
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value 
    })
  }

  render() {
    let chosenMoves = this.state.movesList.map((move, i) => {
      return (
        <div className="moves-list">
          <p key={i}>{move}</p> 
         <Input secondary onChange={this.handleChange} name="sets" value={this.state.sets} placeholder="Set(s)"/> x <Input onChange={this.handleChange} name="reps" value={this.state.reps} secondary placeholder="Reps"/>
         <ListButton onClick={this.handleAddMove}>Add Move</ListButton>
        </div>
      )
    }) 

    let allMoves = this.props.movements.movements
    .filter(move => 
      !this.state.style &&
      !this.state.equip &&
      !this.state.location &&
      !this.state.muscle
      )
    .map((movement, i) => {
      return (
          <MoveButton key={movement.move_name} value={movement.move_id} name={movement.move_name} onClick={this.handleSelect}>
          {movement.move_name}
          </MoveButton>
      )
    })

    // Filter by style
    let styledMoves = this.props.movements.movements
      .filter(movement => 
          movement.move_style === this.state.style)
      .map(movement => {
        return (
          <MoveButton key={movement.move_id} value={movement.move_id} name={movement.move_name} onClick={this.handleSelect}>
        {movement.move_name}
      </MoveButton>
    )
  })
    // Filter by equip
  let EquipMoves = this.props.movements.movements
      .filter(move => 
        move.move_equip_1 === this.state.equip ||
        move.move_equip_2 === this.state.equip ||
        move.move_equip_3 === this.state.equip ||
        move.move_equip_4 === this.state.equip)
      .map(movement => {
        return (
          <MoveButton key={movement.move_id} value={movement.move_id} name={movement.move_name} onClick={this.handleSelect}>
        {movement.move_name}
      </MoveButton>
    )
  })
    // Filter by location
  let locationMoves = this.props.movements.movements
      .filter(move => 
        move.move_location_1 === this.state.location ||
        move.move_location_2 === this.state.location
        )
      .map(movement => {
        return (
          <MoveButton key={movement.move_id} value={movement.move_id} name={movement.move_name} onClick={this.handleSelect}>
        {movement.move_name}
      </MoveButton>
    )
  })
    // Filter by muscle group
  let muscleMoves = this.props.movements.movements
      .filter(move => 
        move.move_muscle_group_1 === this.state.muscle || 
        move.move_muscle_group_2 === this.state.muscle
        )
      .map(movement => {
        return (
          <MoveButton key={movement.move_id} value={movement.move_id} name={movement.move_name} onClick={this.handleSelect}>
        {movement.move_name}
      </MoveButton>
    )
  })

    return (
      <div className="page-container">
          <Header />

      <div className="main-body">
       <div className="setup-container">
          {this.props.workouts.todaysWorkout.map(workout => {
            return (
              <div className="workout-headline" key={workout.workout_id}>
              <h3>Today's Workout:</h3> <span>{`Format: ${workout.workout_style} `}</span> <span className="time">{`Time: 
              ${workout.workout_time}`}</span>
            </div>
            )})}
            <div>
              {chosenMoves}
              <Link to='/dashboard'>
                <DoneButton>Done</DoneButton>
              </Link>
            </div>

          </div>

      <div className="button-container">
              <h1>Workout Style:</h1>
        <div className="workout-style-filter">
              <h5>Power</h5>
                  <input type="radio" name="style" onChange={e => this.handleRadio("Power", e.target.checked)} value={this.state.style}/>
              <h5>Cardio</h5>
                  <input type="radio" name="style" onChange={e => this.handleRadio("Cardio", e.target.checked)} value={this.state.style}/>
              <h5>Strength</h5>
                  <input type="radio" name="style" onChange={e => this.handleRadio("Strength", e.target.checked)} value={this.state.style}/>
              <h5>Strength/Stability</h5>
                  <input type="radio" name="style" onChange={e => this.handleRadio("Strength/Stability", e.target.checked)} value={this.state.style}/>
              <h5>Stability/Mobility</h5>
                  <input type="radio" name="style" onChange={e => this.handleRadio("Stability/Mobility", e.target.checked)} value={this.state.style}/>
            </div>
          
          <div className="menus-container">
            <div className="workout-equip-filter">
              <h4>Equipment Needed:</h4>
                <div className="box">
                  <select onChange={this.handleDropDownEquip} value={this.state.equip}>
                    <option value="">Select Equipment &#9663;</option>
                    <option>Bands</option>
                    <option>Bar</option>
                    <option>Bench</option>
                    <option>Bosu</option>
                    <option>Box</option>
                    <option>Dumbbells</option>
                    <option>Jump Rope</option>
                    <option>Kettlebell</option>
                    <option>Mat</option>
                    <option>Med Ball</option>
                    <option>Plate</option>
                    <option>Rope</option>
                    <option>Sliders</option>
                    <option>Steppers</option>
                    <option>TRX</option>
                    <option>None</option>
                  </select>  
                </div>
            </div>
            <div className="workout-muscle-filter">
              <h4>Muscle Group:</h4>
              <div className="box muscle">
                <select onChange={this.handleDropDownMuscle} value={this.state.muscle}>
                  <option value="">Select Muscle Group &#9663;</option>
                  <option>Arms</option>
                  <option>Back</option>
                  <option>Bicep</option>
                  <option>Chest</option>
                  <option>Core</option>
                  <option>Full Body</option>
                  <option>Heart</option>
                  <option>Legs</option>
                  <option>Shoulders</option>
                </select>  
              </div>
            </div>
            <div className="workout-location-filter">
              <h4>Location:</h4>
              <div className="box location">
                <select onChange={this.handleDropDownLocation} value={this.state.location}>
                  <option value="">Select Location  &#9663;</option>
                  <option>Hardwood</option>
                  <option>Outside</option>
                  <option>Rig</option>
                  <option>Rubber</option>
                  <option>Turf</option>
                </select>  
              </div>
            </div>
          </div>
            <div className="moves-container">
              {allMoves} 
              {styledMoves}
              {EquipMoves}
              {locationMoves}
              {muscleMoves}
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
      workouts: reduxStoreState.workouts,
      movements: reduxStoreState.movements
  }
}

export default connect(mapStateToProps, {getMovements, getWorkouts, getTodaysWorkout})(CreateWorkout)



