require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authCtrl')
const workoutCtrl = require('./controllers/workoutCtrl')
const movementsCtrl = require('./controllers/movementsCtrl')
const aws = require('aws-sdk');
const cors = require('cors');
const twilio = require('twilio')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, accountSid, authToken, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;
const client = new twilio(accountSid, authToken)

const app = express();

app.use(cors())
app.get('/send-text', (req, res) => {
  const { textmessage } = req.query

  client.messages
  .create({
     body: textmessage,
     from: '+12052933798',
     to: '+18582499201'
   })
  .then(message => console.log(message.sid));
})

app.get('/api/signs3', (req, res) => {
  aws.config = {
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };

  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return res.send(returnData);
  });
});


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
app.get('/logout', authCtrl.logout)

// Dashboard endpoints
app.get('/api/user-workouts', workoutCtrl.readWorkouts)
app.get('/api/todays-workout', workoutCtrl.getTodaysWorkout)
app.post('/api/user-workout', workoutCtrl.createWorkout)
app.put('/api/user-workout/:id', workoutCtrl.updateWorkout)
app.delete('/api/user-workout/:id', workoutCtrl.deleteWorkout)

// Movement endpoints
app.get('/api/movements', movementsCtrl.readMovements)
app.post('/api/insert-movement', movementsCtrl.insertMove)
app.post('/api/add-movement', movementsCtrl.addMovement)



