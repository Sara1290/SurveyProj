// import axios from "axios";
import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import "../index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
    // constructor() {
    //     super();
        
    // }
    render() {
        
        
        
        //example from the sandbox
        const json = {
            "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
            "completedHtmlOnCondition": [
                {
                    "expression": "{nps_score} > 8",
                    "html": "<h3>Thanks</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
                },
                {
    "expression": "{nps_score} < 7",
    "html": "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>"
}
 ],
 "pages": [
     {
         "name": "page1",
         "elements": [
            {
                "type": "text",
                "name": "name",
                "title": "Please enter your name:"
            },
            {
                "type": "dropdown",
                "name": "feelings",
                "isRequired": true,
                "title": "How are you feeling today",
                "choices": [
                    "Fantastic", 
                    "Great",
                    "Good", 
                    "Okay", 
                    "Numb", 
                    "Not Great", 
                    "Bad", 
                    "Horrible" 
                ] 
            },

             {
                 "type": "rating",
                 "name": "nps_score",
                 "title": "On a scale of zero to ten, how do you feel at work most days?",
                 "isRequired": true,
                 "rateMin": 0,
                 "rateMax": 10,
                 "minRateDescription": "(Horrible)",
                 "maxRateDescription": "(Fantastic)"
                },
                {
                    "type": "checkbox",
                    "name": "promoter_features",
                    "visibleIf": "{nps_score} >= 9",
                    "title": "What positive emotions did you have today?",
                    "isRequired": true,
                    "hasOther": true,
                    "choices": [
                        "Joy",
                        "Security",
                        "Optimism",
                        "Happiness"
                    ],
                },
    {
        "type": "comment",
        "name": "passive_experience",
        "visibleIf": "{nps_score} > 5  and {nps_score} <= 8",
        "title": "Seems like today was okay. What's the primary reason for you score?"
    },
    {
        "type": "comment",
        "name": "disappointed_experience",
        "visibleIf": "{nps_score} <= 5",
        "title": "What made today hard for you?"
    }, 

    {
        "type": "radiogroup",
        "name": "How did you feel yesterday", 
        "title": "How did you feel yesterday",
        "choices": [
            "Good",
            "Great", 
            "Terrible", 
            "Sad"
        ]
    },
    {
        "type": "boolean", 
        "name": "yes or no", 
        "title": "YES or NO"
    },
    {
        "type": "matrix", 
        "name": "matrix-response",
        "title": "Please rate each feeling according to how you feel now",
        "columns": [
            {
                "value": 1, 
                "text": "Agree"
            },
            {
                "value": 2, 
                "text": "Neutral"
            }, 
            {
                "value": 3, 
                "text": "Disagree"
            }
        ], 
        "rows": [
            {
                "value": 1,
                "text": "Happy"
            }, 
            {
                "value": 2, 
                "text": "Sad"
            }, 
            {
                "value": 3,
                "text": "Neutral"
            }
        ]
    },
    {
        "type": "comment", 
        "name": "feedback", 
        "title": "What else would you like to share about how you're feeling today?"
    }, 
    {
        "type": "text", 
        "name": "today's date",
        "inputType": "date", 
        "title": "Today's Date"
    }, 
    {
        "type": "text", 
        "name": "color", 
        "inputType": "color", 
        "title": "Your Favorite Color"
    }
],


}

],
"showQuestionNumbers": "off"

};

const survey = new Survey.Model(json);


survey.onComplete.add(function (sender, options) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/submit");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(sender.data));
    (console.log(sender.data))
});



return (
    <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;