import React from 'react'
import './DisplayToday.css'
import { Button } from './../StyledComponents/Buttons'

export default function DisplayToday(props) {
  return (
    <div className="">
      <p>{props.workout.workout_style}</p>
      <p>{props.workout.time}</p>
      <p>{props.workout.name[0]}</p>
      <p>{props.workout.name[1]}</p>
      <p>{props.workout.name[2]}</p>
      <p>{props.workout.name[3]}</p>
      <p>{props.workout.name[4]}</p>
      <p>{props.workout.name[5]}</p>
      
      <div className="todays-buttons">
        <Button primary>Edit Workout</Button>
        <Button go onClick={() => props.deleteWorkout(props.workout.workout_id)}>Delete Workout</Button>
      </div>
    </div> 
  );
}