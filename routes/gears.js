var express = require('express')
var router = express.Router()
var view = require('../views')
var Models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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

// condition (clear / sun (0), rainy & Thunderstorm & clouds(1)) jika kondisi hujan tampilkan yg kondisi nya hujan saja, apabila panas tampilkan semua
// type (normal (0), ultralight (1))

router.get('/:id/:condition/:type', async (req, res, next) => {
    const gears = await Models.outdoor_gears.findAll({
        where: { mount_id: req.params.id },
        include: [
            {model: Models.gears, include: [{model: Models.gear_items,
                where: {
                    [Op.and]: [
                        {condition: req.params.condition},
                        {type: req.params.type}
                    ]
                }
            }]}
        ]
    })

    if (gears.length !== 0) {
        res.json(view(gears))
    } else {
        res.json(view('gears empty'))
    }
})

module.exports = router