import React from 'react'
// import './DisplayWorkouts.css'

export default function DisplayWorkouts(props) {
  return (
    <div className="workout-container">
      <p>Workout ID:{props.workout.workout_id}</p>
      <p>{props.workout.workout_style}</p>
      <p>{props.workout.name}</p>
      {/* <p>{props.workout.time[0]}</p>
      <p>{props.workout.name[1]}</p>
      <p>{props.workout.name[2]}</p>
      <p>{props.workout.name[3]}</p>
      <p>{props.workout.name[4]}</p>
      <p>{props.workout.name[5]}</p> */}
      <br/>
      <br/>
      <br/>
      
      
      
      
     
    </div>
  );
}

