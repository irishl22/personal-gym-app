import React from 'react'
import './DisplayWorkouts.css'

export default function DisplayWorkouts(props) {
  return props.workout.style[10] ? (
    <div className="workout-container">
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Move #1: {props.workout.name[0]}</p>
    </div>
  ) : props.workout.style[1] ? (
    <div className="workout-container">
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Move #1: {props.workout.name[0]}</p>
      <p>Move #2: {props.workout.name[1]}</p>
    </div>

  ) : props.workout.style[2] ? (
    <div>
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Move #1: {props.workout.name[0]}</p>
      <p>Move #2: {props.workout.name[1]}</p>
      <p>Move #3: {props.workout.name[2]}</p>
    </div>

  ) : props.workout.style[3] ? (
    <div>
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Move #1: {props.workout.name[0]}</p>
      <p>Move #2: {props.workout.name[1]}</p>
      <p>Move #3: {props.workout.name[2]}</p>
      <p>Move #4: {props.workout.name[3]}</p>
    </div>

  ) : props.workout.style[4] ? (
    <div>
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Move #1: {props.workout.name[0]}</p>
      <p>Move #2: {props.workout.name[1]}</p>
      <p>Move #3: {props.workout.name[2]}</p>
      <p>Move #4: {props.workout.name[3]}</p>
      <p>Move #5: {props.workout.name[4]}</p>
    </div>

  ) : props.workout.style[5] ? (
    <div>
      <p>Workout Format: {props.workout.style[0]}</p>
      <p>Workout Time: {props.workout.time[0]}</p>
      <p>Move #1: {props.workout.name[0]}</p>
      <p>Move #2: {props.workout.name[1]}</p>
      <p>Move #3: {props.workout.name[2]}</p>
      <p>Move #4: {props.workout.name[3]}</p>
      <p>Move #5: {props.workout.name[4]}</p>
      <p>Move #6: {props.workout.name[5]}</p>
    </div>

  ) : (
    <div>

    </div>

  )
}

