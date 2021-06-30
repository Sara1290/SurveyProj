module.exports = {
  saveHighScore: (req, res) => {
    const db = req.app.get('db')

    const {nps_score, Safety, Confidentiality, Throroughness} = req.body;

    return db.saveHighScore([nps_score, Safety, Confidentiality, Throroughness])
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(402))
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
}