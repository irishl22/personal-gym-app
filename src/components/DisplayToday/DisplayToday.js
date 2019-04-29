import React from 'react'
import './DisplayToday.css'
import { Button, EDButton } from './../StyledComponents/Buttons'
import { InputTime } from './../StyledComponents/Inputs'

export default function DisplayToday(props) {
  return (!props.editing && props.isAdmin) ? (
    <div className="">
    <div className="workout-card">
      <p>Workout Format: {props.workout.workout_style}</p>
      <p>Workout Time: {props.workout.workout_time}</p>
      <p>Exercise 1: {props.workout.name[0]} <span>{props.workout.sets[0]} x {props.workout.reps[0]}</span></p>
      <p>Exercise 2: {props.workout.name[1]} <span>{props.workout.sets[1]} x {props.workout.reps[1]}</span></p>
      <p>Exercise 3: {props.workout.name[2]} <span>{props.workout.sets[2]} x {props.workout.reps[2]}</span></p>
      <p>Exercise 4: {props.workout.name[3]} <span>{props.workout.sets[3]} x {props.workout.reps[3]}</span></p>
      {/* <p>Exercise 5: {props.workout.name[4]}</p>
      <p>Exercise 6: {props.workout.name[5]}</p> */}
    </div>
      
      <div className="todays-buttons">
        <EDButton onClick={props.handleEditClick}>Edit Workout</EDButton>
        <EDButton onClick={() => props.deleteWorkout(props.workout.workout_id)}>Delete Workout</EDButton>
      </div>
    </div> 
  ) : (props.editing && props.isAdmin) ? (
    <div className="editing">
      <label>
                <input type="radio" name="style" onClick={e => props.handleCheckBox("AMRAP", e.target.checked)} value={props.style}/>
                AMRAP
              </label>
              <label>
                <input type="radio" name="style" onClick={e => props.handleCheckBox("Interval", e.target.checked)} value={props.style}/>
                Interval
              </label>
              <label>
                  <input type="radio" name="style" onClick={e => props.handleCheckBox("RFT", e.target.checked)} value={props.style}/>
                  RFT
              </label>
              <label>
                  <input type="radio" name="style" onClick={e => props.handleCheckBox("Chipper", e.target.checked)} value={props.style}/>
                  Chipper
              </label>  
              <label>
                  <input type="radio" name="style" onClick={e => props.handleCheckBox("Partner", e.target.checked)} value={props.style}/>
                  Partner
              </label> 
              
               
              <label className="workout-time">
                  Time: <InputTime dash name="time" onChange={props.handleChange} value={props.time}/>
              </label> 

              <Button primary onClick={() => props.updateWorkout(props.style, props.time, props.workout.workout_id)}>Update Workout</Button>

    </div>
  ) : (
    <div className="">
      <div className="workout-card">
        <p>Workout Format: {props.workout.workout_style}</p>
        <p>Workout Time: {props.workout.workout_time}</p>
        <p>Exercise 1: {props.workout.name[0]} <span>{props.workout.sets[0]} x {props.workout.reps[0]}</span></p>
        <p>Exercise 2: {props.workout.name[1]} <span>{props.workout.sets[1]} x {props.workout.reps[1]}</span></p>
        <p>Exercise 3: {props.workout.name[2]} <span>{props.workout.sets[2]} x {props.workout.reps[2]}</span></p>
        <p>Exercise 4: {props.workout.name[3]} <span>{props.workout.sets[3]} x {props.workout.reps[3]}</span></p>
        {/* <p>Exercise 5: {props.workout.name[4]}</p>
        <p>Exercise 6: {props.workout.name[5]}</p> */}

      </div>
        <div className="rate-workout">
          <h3>Rate Workout!</h3>
          <span className="first-star">&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
        </div>
    </div> 
  )
}