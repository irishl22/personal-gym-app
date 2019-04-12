CREATE TABLE `user` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`user_first_name` varchar(80) NOT NULL,
	`user_last_name` varchar(80) NOT NULL,
	`user_email` varchar(80) NOT NULL,
	`user_hash` TEXT NOT NULL,
	`user_isAdmin` BOOLEAN NOT NULL,
	`user_company_name` varchar(100),
	`user_company_logo` varchar(250),
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `display` (
	`display_id` INT NOT NULL AUTO_INCREMENT,
	`move_id` INT NOT NULL,
	`workout_id` INT NOT NULL,
	PRIMARY KEY (`display_id`)
);

CREATE TABLE `movement` (
	`move_id` INT NOT NULL AUTO_INCREMENT,
	`move_name` varchar(100) NOT NULL,
	`move_style` varchar(100) NOT NULL,
	`move_muscle_group` varchar(100) NOT NULL,
	`move_equip_1` varchar(100) NOT NULL,
	`move_equip_2` varchar(100),
	`move_equip_3` varchar(100),
	`move_location` varchar(100) NOT NULL,
	`move_sets` INT NOT NULL,
	`move_reps` INT NOT NULL,
	PRIMARY KEY (`move_id`)
);

CREATE TABLE `workout` (
	`workout_id` INT NOT NULL AUTO_INCREMENT,
	`workout_style` varchar(80) NOT NULL,
	`workout_time` INT NOT NULL,
	`workout_date` DATE NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`workout_id`)
);

ALTER TABLE `display` ADD CONSTRAINT `display_fk0` FOREIGN KEY (`move_id`) REFERENCES `movement`(`move_id`);

ALTER TABLE `display` ADD CONSTRAINT `display_fk1` FOREIGN KEY (`workout_id`) REFERENCES `workout`(`workout_id`);

ALTER TABLE `workout` ADD CONSTRAINT `workout_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`);
