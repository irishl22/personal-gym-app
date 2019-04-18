import React from 'react'
// import './DisplayWorkouts.css'

export default function DisplayWorkouts(props) {
  return (
    <div className="workout-container">
      <p>Workout ID:{props.workout.workout_id}</p>
      <p>{props.workout.style}</p>
      <p>{props.workout.time}</p>
      <p>{props.workout.name}</p>
      <br/>
      <br/>
      <br/>
      
      
      
      
     
    </div>
  );
}

