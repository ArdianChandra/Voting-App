const {Candidate, Voter, CandidateVoter} = require("../models")

class VoterControll {
  static list(req, res){
    Voter.findByPk(req.params.id, {
      include: [Candidate]
    })
    .then(data => {
      res.render("voter", {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static vote(req, res){
    let newVotes = {
      CandidateId: req.params.candidateId,
      VoterId: req.params.id
    }
    CandidateVoter.create(newVotes)
    .then((data) => { 
      res.redirect(`/voters/${req.params.id}/candidates`)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static unVote(req, res){
    let option = {
      where: {
        CandidateId: req.params.candidateId,
        VoterId: req.params.id
      }
    }
    CandidateVoter.destroy(option)
    .then(() => {
      res.redirect(`/voters/${req.params.id}/candidates`)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static profile(req, res){
    let id = req.params.id

    Voter.findByPk(id)
    .then(data => {
      res.render("profile", {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateForm(req, res){
    let id = req.params.id

    Voter.findByPk(id)
    .then(data => {
      res.render("update-form", {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updatePost(req, res) {
    let newVoter = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age
    }

    Voter.update(newVoter, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect(`/voters/${req.params.id}/profile`)
    })
    .catch(err => {
      let errors = []
      err.errors.forEach(el => {
        errors.push(el.message)
      })
      res.send(errors)
    })
  }
}

module.exports = VoterControll