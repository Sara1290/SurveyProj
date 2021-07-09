require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
// const fetch = require("node-fetch");
const SurveyCtrl = require('./SurveyCtrl');

const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect();
})();

const app = express();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
// const API_BASE_URL = 'https://previdence-survey.netlify.app/'
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
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
//   next();
// });


// fetch(`${API_BASE_URL}/dept/post/`, {
//       method: 'POST',
//       credentials: 'include', 
//     })
//       .then((res) => {
        
//       });

//endpoints
app.get('/api/getAll', SurveyCtrl.getAll)
app.post('/api/submit', SurveyCtrl.saveResponse)


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