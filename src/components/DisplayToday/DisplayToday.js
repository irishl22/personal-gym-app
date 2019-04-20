import React from 'react'
import './DisplayToday.css'
import { Button } from './../StyledComponents/Buttons'
import { InputTime } from './../StyledComponents/Inputs'

export default function DisplayToday(props) {
  return !props.editing ? (
    <div className="">
      <p>{props.workout.workout_style}</p>
      <p>{props.workout.workout_time}</p>
      <p>{props.workout.name[0]}</p>
      <p>{props.workout.name[1]}</p>
      <p>{props.workout.name[2]}</p>
      <p>{props.workout.name[3]}</p>
      <p>{props.workout.name[4]}</p>
      <p>{props.workout.name[5]}</p>
      
      <div className="todays-buttons">
        <Button primary onClick={props.handleEditClick}>Edit Workout</Button>
        <Button go onClick={() => props.deleteWorkout(props.workout.workout_id)}>Delete Workout</Button>
      </div>
    </div> 
  ) : (
    <div>
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
              <Button primary onClick={() => props.updateWorkout(props.style, props.time, props.workout.workout_id)}>Update Workout</Button>

              <label className="workout-time">
                  <InputTime dash name="time" onChange={props.handleChange} value={props.time}/>
              </label> 
              
              <Button primary onClick={props.handleUpdate}>Update Style</Button>
    </div>
  )
}