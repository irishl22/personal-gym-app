delete from display d using workout w
    where d.workout_id = $1;