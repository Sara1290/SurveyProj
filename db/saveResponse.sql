INSERT INTO user_responses
(nps_score, How_did_you_feel_yesterday, feedback, feelings, matrix_response, name_of_user, promoter_features, passive_experience, disappointed_experience, date_taken, true_false)
VALUES 
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);