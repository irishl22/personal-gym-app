select 
w.workout_id,
w.workout_style, 
w.workout_time,
w.workout_date,
m.move_name,
m.move_sets,
m.move_reps,
d.display_id
from movement m
join display d on m.move_id = d.move_id
join workout w on w.workout_id = d.workout_id