// exports.handler = async function(event, context) {
//   return {
//     "path" : "/api/submit", 
//     "httpMethod" : "new XMLHttpRequest()",
//     "headers" : "Content-Type application/json; charset=utf-8",
//     "body" : "JSON.stringify (sender.data)", 
//     "isBase64Encoded" : false
//   }
// }

require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
// const fetch = require("node-fetch");
const SurveyCtrl = require('./SurveyCtrl');

const { CONNECTION_STRING } = process.env;

exports.handler = async function (event) {
  survey.onComplete.add(function (sender, options) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/api/submit');
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(sender.data));
    (console.log(sender.data))
});

}