insert into account (
	account_first_name,
	account_last_name,
	account_email,
	account_hash,
	account_isAdmin,
	account_company_name,
	account_company_logo
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
)

returning
    account_id,
    account_first_name,
	account_last_name,
	account_email,
	account_isAdmin,
	account_company_name,
	account_company_logo;