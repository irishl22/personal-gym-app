module.exports = {
    readMovements: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_movements()
        return res.status(200).send(response)
    },
    createMovements(req, res) {

    },
    deleteMovements(req, res) {
        
    }
}