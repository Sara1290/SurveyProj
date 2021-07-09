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
const SurveyCtrl = require('..server/SurveyCtrl');


exports.handler = async function (event) {
  const { CONNECTION_STRING } = process.env;
  
  survey.onComplete.add(function (sender, options) {
    //Show message about "Saving..." the results
    options.showDataSaving('RESULTS SAVED');//you may pass a text parameter to show your own text
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/submit", CONNECTION_STRING);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
        if (xhr.status == 200) {
            options.showDataSavingSuccess(); // you may pass a text parameter to show your own text
            // Or you may clear all messages:
            // options.showDataSavingClear();
        } else {
            //Error
            options.showDataSavingError('not sent'); // you may pass a text parameter to show your own text
        }
    };
    xhr.send(JSON.stringify(sender.data));
});

}