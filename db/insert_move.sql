insert into display (
    workout_id,
    move_id
) values (
    (SELECT max(workout_id) FROM workout),
    $1
);

update movement
set move_sets = $2,
    move_reps = $3
where move_id = $1;    