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
    xhr.open("POST", 'postgres://asehehahszkryh:552417fa473d19f6f490b9ef0d2be808db533287543a47a4dd84329f6041cc89@ec2-54-145-102-149.compute-1.amazonaws.com:5432/d5e4h7i0t16jgs');
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(sender.data));
    (console.log(sender.data))
});

}