require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');

const app = express();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.json());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
})
);

massive ({
  CONNECTION_STRING: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  }
})
.then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () => console.log(`DB up and running on ${SERVER_PORT}`))
})
.catch(err => console.log(err));