require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authCtrl')
const workoutCtrl = require('./controllers/workoutCtrl')
const movementsCtrl = require('./controllers/movementsCtrl')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`listening on ${SERVER_PORT}`)
    })
})

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// Login endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/getAccounts', authCtrl.read)
app.get('/auth/user-data', authCtrl.userData)
// app.get('/logout', authCtrl.logout)

// // Dashboard endpoints
// app.get('/api/user-workouts', workoutCtrl.readWorkouts)
// app.post('/api/user-workout', workoutCtrl.createWorkout)
// app.put('/api/user-workout/:id', workoutCtrl.updateWorkout)
// app.delete('/api/user-workout/:id', workoutCtrl.deleteWorkout)

// // Movement endpoints
// app.get('/api/movements', movementsCtrl.readMovements)
// app.post('/api/movement', movementsCtrl.createMovement)
// app.delete('/api/movement:id', movementsCtrl.deleteMovement)


