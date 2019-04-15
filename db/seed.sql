CREATE TABLE account (
	account_id serial primary key,
	account_first_name varchar(80) NOT NULL,
	account_last_name varchar(80) NOT NULL,
	account_email varchar(80) NOT NULL,
	account_hash TEXT NOT NULL,
	account_isAdmin BOOLEAN,
	account_company_name varchar(100),
	account_company_logo varchar(550)
)

CREATE TABLE display (
	display_id SERIAL PRIMARY KEY,
	move_id INT NOT NULL,
	workout_id INT NOT NULL
);

CREATE TABLE movement (
	move_id SERIAL PRIMARY KEY,
	move_name varchar(100) NOT NULL,
	move_style varchar(100) NOT NULL,
	move_muscle_group varchar(100) NOT NULL,
	move_equip_1 varchar(100) NOT NULL,
	move_equip_2 varchar(100),
	move_equip_3 varchar(100),
	move_location varchar(100) NOT NULL,
	move_sets INT NOT NULL,
	move_reps INT NOT NULL
);

CREATE TABLE workout (
	workout_id SERIAL PRIMARY KEY,
	workout_style varchar(80) NOT NULL,
	workout_time INT NOT NULL,
	workout_date DATE NOT NULL DEFAULT CURRENT_DATE,
	account_id INT NOT NULL
);

ALTER TABLE display ADD CONSTRAINT display_fk0 FOREIGN KEY (move_id) REFERENCES movement(move_id);

ALTER TABLE display ADD CONSTRAINT display_fk1 FOREIGN KEY (workout_id) REFERENCES workout(workout_id);

ALTER TABLE workout ADD CONSTRAINT workout_fk0 FOREIGN KEY (account_id) REFERENCES account(account_id);