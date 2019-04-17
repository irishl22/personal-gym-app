insert into workout (
    workout_style,
    workout_time,
    account_id
) values (
    $1,
    $2,
    $3
);

insert into display (
    workout_id
) SELECT max(workout_id) FROM workout;

