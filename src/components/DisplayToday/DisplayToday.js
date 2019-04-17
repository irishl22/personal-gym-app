import React from 'react'
import './DisplayToday.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function DisplayToday(props) {
  return (
    <div className="workout-container">
      <p>{props.workout.workout_style}</p>
      {/* <p>{props.workout.time[0]}</p>
      <p>{props.workout.name[0]}</p>
      <p>{props.workout.name[1]}</p>
      <p>{props.workout.name[2]}</p>
      <p>{props.workout.name[3]}</p>
      <p>{props.workout.name[4]}</p>
      <p>{props.workout.name[5]}</p> */}
      <br/>
      <br/>
      <br/>
      <Link to='/createworkout'>
        <button>Edit Workout</button>
      </Link>
      <button>Delete Workout</button>
    </div> 
  );
}