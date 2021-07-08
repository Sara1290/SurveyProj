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
app.post('/api/submit', SurveyCtrl.saveResponse)


//port stuff
massive ({
    connectionString : 'postgres://asehehahszkryh:552417fa473d19f6f490b9ef0d2be808db533287543a47a4dd84329f6041cc89@ec2-54-145-102-149.compute-1.amazonaws.com:5432/d5e4h7i0t16jgs',
    ssl : {
        rejectUnauthorized: false,
    }
})
.then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => console.log(`Db Up And Server Running On ${SERVER_PORT}`));
})
.catch(err => console.log(err));