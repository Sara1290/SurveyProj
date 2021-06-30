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
                    "html": "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
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
                 "type": "rating",
                 "name": "nps_score",
                 "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
                 "isRequired": true,
                 "rateMin": 0,
                 "rateMax": 10,
                 "minRateDescription": "(NAH)",
                 "maxRateDescription": "(SUPER DUPER LIKELY)"
                },
                {
                    "type": "checkbox",
                    "name": "promoter_features",
                    "visibleIf": "{nps_score} >= 9",
                    "title": "What features do you value the most?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "answercount",
                            "text": "Please select two features maximum.",
                            "maxCount": 2
                        }
                    ],
                    "hasOther": true,
                    "choices": [
                        "Safety",
                        "Confidentiality",
                        "Quality",
                        "Thoroughness"
                    ],
                    "otherText": "Other feature:",
                    "colCount": 2
                },
    {
        "type": "comment",
        "name": "passive_experience",
        "visibleIf": "{nps_score} > 5  and {nps_score} <= 8",
        "title": "What is the primary reason for your score?"
    },
    {
        "type": "comment",
        "name": "disappointed_experience",
        "visibleIf": "{nps_score} <= 5",
        "title": "What was disapointing about your experience with us?"
    }
]
}
],
"showQuestionNumbers": "off"
}
;
const survey = new Survey.Model(json);





return (
    <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;