delete from display d using workout w
    where d.workout_id = $1;

delete from workout w
    where w.workout_id = $1;