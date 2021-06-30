require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const SurveyCtrl = require('./SurveyCtrl');

const app = express();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

//middleware
app.use(express.json());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
})
);

//endpoints
app.get('/api/getAll', SurveyCtrl.getAll)
app.post('/api/submit-high', SurveyCtrl.saveHighScore)
app.post('/api/submit-med', SurveyCtrl.saveMedScore)
app.post('/api/submit-low', SurveyCtrl.saveLowScore)

//port stuff
massive ({
    connectionString : CONNECTION_STRING,
    ssl : {
        rejectUnauthorized: false,
    }
})
.then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => console.log(`Db Up And Server Running On ${SERVER_PORT}`));
})
.catch(err => console.log(err));