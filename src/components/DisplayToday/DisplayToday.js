import React from 'react'
import './DisplayToday.css'

export default function DisplayToday(props) {
  return (
    <div className="workout-container">
      <p>{props.workout.style[0]}</p>
      <p>{props.workout.time[0]}</p>
      <p>{props.workout.name[0]}</p>
      <p>{props.workout.name[1]}</p>
      <p>{props.workout.name[2]}</p>
      <p>{props.workout.name[3]}</p>
      <p>{props.workout.name[4]}</p>
      <p>{props.workout.name[5]}</p>
      <br/>
      <br/>
      <br/>
    </div> 
  );
}