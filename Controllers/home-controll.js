const {Voter} = require("../models")
let nodemailer = require('nodemailer');

class HomeControll {
  static home(req, res){
    res.render('home')
  }

  static login(req, res){
    Voter.findOne({
      where:{
        username: req.body.username
      }
    })
    .then(data => {
      if(!data || data.password !== req.body.password){
        throw "Username atau Password Salah"
      }
      req.session.isLogin = true
      res.redirect(`/voters/${data.id}`)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static registerForm(req, res){
    res.render("register")
  }

  static registerNew(req, res){
    let newVoter = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      gender: req.body.gender,
      age: req.body.age
    }

    let sendMail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: "kardianc18@gmail.com",
          pass: 'ardiansatik'
      }
    });
    let receiveMail = {
      from: 'kardianc18@gmail.com',
      to: req.body.email,
      subject: 'Registration Success!',
      text: `Congratulation ${req.body.name} your account was successfully created!`
    };

    Voter.create(newVoter)
    .then(() => {
      sendMail.sendMail(receiveMail, (err, info) => {
        if (err) throw err;
        console.log('Email sent: ' + info.response);
      });

      res.redirect("/")
    })
    .catch(err => {
      let errors = []
      err.errors.forEach(el => {
        errors.push(el.message)
      })
      res.send(errors)
    })
  }

  static logout(req, res){
    req.session.isLogin = false
    res.redirect('/')
  }
}

module.exports = HomeControll