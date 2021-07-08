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