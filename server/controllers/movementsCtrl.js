module.exports = {
    readMovements: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_movements()
        return res.status(200).send(response)
    },
    insertMove: async (req, res) => {
        const { move_id } = req.body
        const db = req.app.get('db')
        let response = await db.insert_move([move_id])
        return res.status(200).send(response)
    },
    deleteMovements(req, res) {
        
    },

    movementsByStyle(req, res) {
        
    }
}