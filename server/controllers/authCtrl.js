const bcrypt = require('bcryptjs')

module.exports = {
    read: (req, res, next) => {
        const db = req.app.get('db')

        db.find_accounts()
        .then(accounts => {
            res.status(200).send(accounts)
        }).catch(err => {
            res.status(500).send('controller', err)
        })
    },
    register: async (req, res) => {
        const { first, last, email, password, isAdmin, company, logo } = req.body
        const db = req.app.get('db');
        const accountArr = await db.find_account_by_email([email]) 
        if(accountArr[0]) {
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        let newAccArr = await db.create_account([
            first,
            last, 
            email,
            hash, 
            isAdmin, 
            company, 
            logo
        ])
        req.session.user =  {
            id: newAccArr[0].account_id,
            first: newAccArr[0].account_first_name,
            last: newAccArr[0].account_last_name, 
            email: newAccArr[0].account_email, 
            isAdmin: newAccArr[0].account_isAdmin, 
            company: newAccArr[0].account_company_name, 
            logo: newAccArr[0].account_company_logo 
        };
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true,
        })
    },
    async login(req, res) {
        const { email, password } = req.body;
        const db = req.app.get('db');
        const accountArr = await db.find_account_by_email([email])
        if(!accountArr[0]) {
            return res.status(200).send({message: 'Account Not Found'})
        }
        const result = bcrypt.compareSync(password, accountArr[0].account_hash)
        if(!result) {
            return res.status(401).send({message: 'Password Incorrect'})
        }
        req.session.user =  {
            id: accountArr[0].account_id,
            first: accountArr[0].account_first_name,
            last: accountArr[0].account_last_name, 
            email: accountArr[0].account_email, 
            isAdmin: accountArr[0].account_isAdmin, 
            company: accountArr[0].account_company_name, 
            logo: accountArr[0].account_company_logo 
        }    
        res.status(200).send({
            message: 'Login Successful',
            loggedIn: true
        })
    },
    userData(req, res) {
        if(req.session.user) res.status(200).send(req.session.user)
        else res.status(401).send('Please Login')
    }
}