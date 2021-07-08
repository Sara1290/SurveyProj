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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", CLIENT_ORIGIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Credentials", true); 
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});


// fetch(`${API_BASE_URL}/dept/get/`, {
//       method: 'POST',
//       credentials: 'include', 
//     })
//       .then((res) => {
//         sendStatus(200)
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