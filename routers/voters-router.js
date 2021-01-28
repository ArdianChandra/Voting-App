const router = require("express").Router()
const VoterControll = require("../Controllers/voter-controll")
const CandidateControll = require("../Controllers/candidate-controll")
const validateLogin = require("../middlewares/login-middleware") 

router.get("/:id", validateLogin, VoterControll.list)

router.get("/:id/candidates", validateLogin, CandidateControll.list)

router.get("/:id/candidates/vote/:candidateId", validateLogin, VoterControll.vote)
router.get("/:id/candidates/unvote/:candidateId", validateLogin, VoterControll.unVote)

router.get("/:id/profile", VoterControll.profile)

router.get("/:id/update", VoterControll.updateForm)
router.post("/:id/update", VoterControll.updatePost)

module.exports = router