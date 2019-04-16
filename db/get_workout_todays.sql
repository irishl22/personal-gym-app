select 
w.workout_date,
array_agg(w.workout_style) as style, 
array_agg(w.workout_time) as time,
array_agg(m.move_name) as name,
array_agg(m.move_sets) as sets,
array_agg(m.move_reps) as reps,
array_agg(d.display_id) as display
from movement m
join display d on m.move_id = d.move_id
join workout w on w.workout_id = d.workout_id
where w.workout_date = current_date
group by w.workout_date











