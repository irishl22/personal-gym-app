module.exports = {
    readWorkouts: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_workouts()
        return res.status(200).send(response)
    },
    createWorkout(req, res) {

    },
    updateWorkout(req, res) {

    },
    deleteWorkout(req, res) {

    }
}