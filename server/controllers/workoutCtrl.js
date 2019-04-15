module.exports = {
    readWorkouts: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_workouts()
        return res.status(200).send(response)
    },
    getTodaysWorkout: async (req, res) => {
        const db = req.app.get('db')
        let response = await
        db.get_workout_todays()
        return res.status(200).send(response)
    },
    createWorkout: async (req, res) => {
        const { style, time } = req.body
        const { id } = req.session.user

        const db = req.app.get('db')
        const newWorkout = await db.create_workout([style, time, id])

        return res.status(200).send(newWorkout)
    },
    updateWorkout(req, res) {

    },
    deleteWorkout(req, res) {

    }
}