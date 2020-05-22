const express = require('express')
const jwt = require('../jwt')
const router = express.Router()
const bcrypt = require("bcrypt");
var User = require('../models').users
var view = require('../views')

// router.get('/', async function (req, res, next) {
//   let user = await User.findAll({
//     where: {
//       username: req.query.username
//     }
//   })

//   if (user.length === 0) {
//     res.send(view('username not found'))
//   } else {
//     user = user[0]

//     const match = await bcrypt.compare(req.query.password, user.password);

//     if(match) {
//       var token = jwt.sign({ id: user.id, email: user.email, role_id: user.role_id, username: user.username })
//       res.send(view(token))
//     }else{
//       res.send(view('password is wrong'))
//     }

//   }
// })

router.post('/', async function (req, res, next) {

  let user = await User.findAll({
    where: {
      username: req.body.username
    }
  })

  if (user.length === 0) {
    res.send(view('username or password is wrong'))
  } else {
    user = user[0]
    const match = await bcrypt.compare(req.body.password, user.password);

    if(match) {
      var token = jwt.sign({ id: user.id, email: user.email, role_id: user.role_id, username: user.username, name: user.name })
      res.send(view(token))
    }else{
      res.send(view('password is wrong'))
    }
  }
})

// router.get('/refresh', function (req, res, next) {
//   jwt.verifyLong(req.params.token)

//   res.send('respond with a resource')
// })

// router.get('/logout', function (req, res, next) {
//   res.send('respond with a resource')
// })

// router.get('/reset', function (req, res, next) {
//   res.send('reset password')
// })

module.exports = router