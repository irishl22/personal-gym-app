module.exports = {
    readMovements: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_movements()
        return res.status(200).send(response)
    },
    insertMove: async (req, res) => {
        const { workout_id, move_id } = req.body
        const db = req.app.get('db')
        let response = await db.insert_move([workout_id, move_id])
        return res.status(200).send(response)
    },
    deleteMovements(req, res) {
        
    }
}