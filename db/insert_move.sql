insert into display (
    workout_id,
    move_id
) values (
    (SELECT max(workout_id) FROM workout),
    $1
)
