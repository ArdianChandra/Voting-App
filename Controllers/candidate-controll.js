const {Candidate, Voter} = require("../models")

class CandidateControll {
  static list(req, res){
    Candidate.findAll({
      include: [Voter],
      order: [
        ["name", "ASC"]
      ]
    })
    .then(data => {
      res.render("candidates", {data, idVoter: req.params.id})
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = CandidateControll