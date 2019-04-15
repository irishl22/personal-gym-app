import React from 'react'
// import './DisplayToday.css'

export default function DisplayToday(props) {
  return (
    <div className="workout-container">
      {props.workout.workout_style}
      {props.workout.workout_time}
      {props.workout.move_name}
    </div>
  );
}





