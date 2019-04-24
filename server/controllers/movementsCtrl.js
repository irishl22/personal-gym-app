module.exports = {
    readMovements: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_movements()
        return res.status(200).send(response)
    },
    insertMove: async (req, res) => {
        const { move_id, sets, reps } = req.body
        const db = req.app.get('db')
        let response = await db.insert_move([move_id, sets, reps])
        return res.status(200).send(response)
    },
    addMovement: async (req, res) => {
        const { name, style, em1, em2, equip1, equip2, equip3, equip4, location1, location2, location3 } = req.body
        const db = req.app.get('db')
        let response = await db.create_move([name, style, em1, em2, equip1, equip2, equip3, equip4, location1, location2, location3])
        return res.status(200).send(response)
    }
        
    
}