const express = require("express")
const dateFormat = require("./helper/dateFormat")
const session = require("express-session")
const app = express()
const port = process.env.PORT || 4000;
const router = require("./routers/index-router")

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.locals.dateFormat = dateFormat

app.use("/", router)

app.listen(port, () => {
  console.log("running on port", port);
})