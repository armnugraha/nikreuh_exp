var express = require('express')
var router = express.Router()
var view = require('../views')

router.get('/', async (req, res, next) => {
  res.json(view([]))
})

module.exports = router
