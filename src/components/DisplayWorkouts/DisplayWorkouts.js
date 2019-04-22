import React from 'react'
import './DisplayWorkouts.css'

export default function DisplayWorkouts(props) {
  return props.workout.name[5] ? (
    <div className="workout-container">
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Exercise 1: {props.workout.name[0]}</p>
    </div>
  ) : props.workout.name[4] ? (
    <div className="workout-container">
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Exercise 1: {props.workout.name[0]}</p>
      <p>Exercise 2: {props.workout.name[1]}</p>
    </div>

  ) : props.workout.name[3] ? (
    <div className="workout-container">
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Exercise 1: {props.workout.name[0]}</p>
      <p>Exercise 2: {props.workout.name[1]}</p>
      <p>Exercise 3: {props.workout.name[2]}</p>
    </div>

  ) : props.workout.name[2] ? (
    <div className="workout-container">
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Exercise 1: {props.workout.name[0]}</p>
      <p>Exercise 2: {props.workout.name[1]}</p>
      <p>Exercise 3: {props.workout.name[2]}</p>
      <p>Exercise 4: {props.workout.name[3]}</p>
    </div>

  ) : props.workout.name[1] ? (
    <div className="workout-container">
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Exercise 1: {props.workout.name[0]}</p>
      <p>Exercise 2: {props.workout.name[1]}</p>
      <p>Exercise 3: {props.workout.name[2]}</p>
      <p>Exercise 4: {props.workout.name[3]}</p>
      <p>Exercise 5: {props.workout.name[4]}</p>
    </div>

  ) : props.workout.name[0] ? (
    <div className="workout-container">
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Exercise 1: {props.workout.name[0]}</p>
      <p>Exercise 2: {props.workout.name[1]}</p>
      <p>Exercise 3: {props.workout.name[2]}</p>
      <p>Exercise 4: {props.workout.name[3]}</p>
      <p>Exercise 5: {props.workout.name[4]}</p>
      <p>Exercise 6: {props.workout.name[5]}</p>
    </div>

  ) : (
    <div>

    </div>

  )
}

