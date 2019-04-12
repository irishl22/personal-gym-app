insert into user (
	user_first_name,
	user_last_name,
	user_email,
	user_hash,
	user_isAdmin,
	user_company_name,
	user_company_logo,
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
);

returning user_first_name, user_last_name, user_email, user_isAdmin, user_company_name, user_company_logo;