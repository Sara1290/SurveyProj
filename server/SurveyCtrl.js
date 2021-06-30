module.exports = {
  getAll: async(req, res) => {
    const db = await req.app.get('db');
    
    //need to define user_responses. I expect this to send every row in the table.//
    return db.getUserResponse()
    .then(user_responses => res.status(200).send(user_responses))
    .catch((err) => console.log(err))
  },

  saveHighScore: (req, res) => {
    const db = req.app.get('db')

    const {nps_score, atmosphere, confidentiality, quality, thoroughness} = req.body;

    return db.saveHighScore([nps_score, atmosphere, confidentiality, quality, thoroughness])
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err))
  },

  saveMedScore: (req, res) => {
    const db = req.app.get('db')
    const {nps_score, passive_experience} = req.body;

    return db.saveMedScore([nps_score, passive_experience])
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(402))
  }, 

  saveLowScore: (req, res) => {
    const db = req.app.get('db')
    const {nps_score, disappointed_experience} = req.body;

    return db.saveLowScore([nps_score, disappointed_experience])
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(402))
  }
};