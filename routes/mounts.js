const express = require('express')
const jwt = require('../jwt')
const router = express.Router()
var Mount = require('../models').mounts
var view = require('../views')

router.get('/', async function (req, res, next) {
  const mounts = await Mount.findAll({})
  if (mounts.length !== 0) {
    res.json(view(mounts))
  } else {
    res.json(view('mounts empty'))
  }
})

router.get('/:id', async (req, res, next) => {
  const mounts = await Mount.findAll({
    where: { id: req.params.id }
  })

  if (mounts.length !== 0) {
    res.json(view(mounts))
  } else {
    res.json(view('mounts empty'))
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {user_id,name,address,altitude,rank,thumb,type,desc,price,start_time,end_time,full_time,start_day,center_coordinate} = req.body;
    const mounts = await Mount.create({
      user_id,name,address,altitude,rank,thumb,type,desc,price,start_time,end_time,full_time,start_day,center_coordinate
    });
  if (mounts) {
    res.json(view(mounts))
  }
 } catch (err) {
   res.json(view(err.errors[0].message))
 }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const mountId = req.params.id;
    const {user_id,name,address,altitude,rank,thumb,type,desc,price,start_time,end_time,full_time,start_day,center_coordinate} = req.body;
    const mounts = await Mount.update({
      user_id,name,address,altitude,rank,thumb,type,desc,price,start_time,end_time,full_time,start_day,center_coordinate
    }, {
      where: {
        id: mountId
      }
    });
    if (mounts) {
      res.json(view(mounts))
    }
  } catch (err) {
    res.json(view(err.errors[0].message))
  }
})

router.delete('/:id', async function (req, res, next) {
  try {
    const mountId = req.params.id;
    const mounts = await Mount.destroy({ where: {
      id: mountsId
    }})
    if (mounts) {
      res.json(view(mounts))
    }
  } catch (err) {
    res.json(view(err.errors[0].message))
  }
});

module.exports = router