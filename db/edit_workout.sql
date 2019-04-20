update workout
set workout_style = $1,
    workout_time = $2
where
 workout_id = $3;