const router = require("express").Router()
const HomeControll = require("../Controllers/home-controll")

router.get("/", HomeControll.home)
router.post("/", HomeControll.login)

router.get("/register", HomeControll.registerForm)
router.post("/register", HomeControll.registerNew)

router.get("/logout", HomeControll.logout)

module.exports = router