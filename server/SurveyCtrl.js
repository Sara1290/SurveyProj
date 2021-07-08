module.exports = {
  getAll: async(req, res) => {
    const db = await req.app.get('db');
    
    //need to define user_responses. I expect this to send every row in the table.//
    return db.getUserResponse()
    .then(user_responses => res.status(200).send(user_responses))
    .catch((err) => console.log(err))
  },

  saveResponse: (req, res) => {
    const db = req.app.get('db')

    const {nps_score, How_did_you_feel_yesterday, feedback, feelings, matrix_response, name_of_user, promoter_features, passive_experience, disappointed_experience, date_taken, true_false} = req.body;

    return db.saveResponse([nps_score, How_did_you_feel_yesterday, feedback, feelings, matrix_response, name_of_user, promoter_features, passive_experience, disappointed_experience, date_taken, true_false])
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err))
  },

};