const express = require('express')
const jwt = require('../jwt')
const router = express.Router()
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $ilike: Op.ilike,
  $or: Op.or,
  $not: Op.not
}
var Mount = require('../models').mounts
var view = require('../views')
const pageLimit = 10

//PAGINATION Function
const paginate = (query, { page, pageSize }) => {
  // const offset = page * pageSize;
  const limit = pageLimit;
  const offset = 0 + (page - 1) * limit;
  return {
    ...query,
    offset,
    limit,
  };
};

router.get('/', async function (req, res, next) {
    const count_mount = await Mount.count({})
    const totalPage = Math.ceil(count_mount/pageLimit)

    let page = +req.query.page;
    let pageSize = count_mount;
    const mounts = await Mount.findAll(paginate(
        {
            where: {}, // conditions
            order: [
                ['id', 'DESC']
            ]
        },
        { page, pageSize },
    ))

    if (mounts.length !== 0) {
        res.status(200).json({
            'status': 'ok',
            'pageSize': totalPage,
            'data': mounts,
        })
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

router.get('/search/:text', async (req, res, next) => {

    let keyword = "%"+req.params.text+"%"

    const mounts = await Mount.findAll({
        where: {
            [Op.or]: [
                {name: {
                    [Op.iLike]: keyword
                }},
                {address: {
                    [Op.iLike]: keyword
                }}
            ]
        }
    })

    if (mounts.length !== 0) {
        res.json(view(mounts))
    } else {
        res.json(view('mounts empty'))
    }
})

router.post('/', async (req, res, next) => {
  try {
    const {user_id,name,address,altitude,rank,thumb,type,desc,price,start_time,end_time,full_time,start_day,center_coordinate,place,track_line} = req.body;
    const mounts = await Mount.create({
      user_id,name,address,altitude,rank,thumb,type,desc,price,start_time,end_time,full_time,start_day,center_coordinate,place,track_line
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
    const {user_id,name,address,altitude,rank,thumb,type,desc,price,start_time,end_time,full_time,start_day,center_coordinate,place,track_line} = req.body;
    const mounts = await Mount.update({
      user_id,name,address,altitude,rank,thumb,type,desc,price,start_time,end_time,full_time,start_day,center_coordinate,place,track_line
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