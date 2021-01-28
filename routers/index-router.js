const router = require("express").Router()
const home = require("./home-router")
const candidates = require("./candidates-router")
const voters = require("./voters-router")

router.use("/", home)

router.use("/voters", voters)

module.exports = router