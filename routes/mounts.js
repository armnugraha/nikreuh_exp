const express = require('express')
const jwt = require('../jwt')
const router = express.Router()
const Sequelize = require('sequelize');
const moment = require('moment');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $ilike: Op.ilike,
  $or: Op.or,
  $not: Op.not
}
var Mount = require('../models').mounts
var User = require('../models').users
var Announce = require('../models').mount_announcements
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
            include:[{model: User},{model: Announce,
                where: {
                    [Op.and]: [
                        {start_date: {
                          // use between ?
                            [Op.lte]: moment().toDate()
                        }},
                        {end_date: {
                          // use between ?
                            [Op.gte]: moment().toDate()
                        }}
                    ]
                },
                order: [
                    ['end_date', 'DESC']
                ],
                limit: 1
            }],
            where: {}, // conditions
            order: [
                ['id', 'DESC']
            ],
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

router.get('/mount/:id', async (req, res, next) => {
    const mounts = await Mount.findByPk(req.params.id)

    var data_time = []
    var data_distance = []

    for(var i=0; i < mounts.place.length; i++){
        if (i == 0) {
            data_time.push(-1)
            data_distance.push(-1)
        }

        if(i < mounts.place.length-1){
            var j = i+1;
            var now = moment(mounts.place[i].properties.created_at, "HH:mm:ss");
            var end = moment(mounts.place[j].properties.created_at, "HH:mm:ss");
            var duration = moment.duration(now.diff(end));
            var minutes = duration.asMinutes();
            data_time.push(Math.abs(minutes))

            var lat1 = mounts.place[i].geometry.coordinates[1]
            var lat2 = mounts.place[j].geometry.coordinates[1]
            var lon1 = mounts.place[i].geometry.coordinates[0]
            var lon2 = mounts.place[j].geometry.coordinates[0]
            
            var R = 6371;
            var dLat = (lat2-lat1) * (Math.PI/180);
            var dLon = (lon2-lon1) * (Math.PI/180); 
            var a = 
              Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos((lat1)*(Math.PI/180)) * Math.cos((lat2)*(Math.PI/180)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km

            data_distance.push(Math.round(d*1000))
        }
    }

    if (mounts.length !== 0) {
        res.status(200).json({
            'status': 'ok','data_place': mounts,'data_time':data_time,'data_distance':data_distance
        })
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
        },
        include:[{model: User},{model: Announce,
            where: {
                [Op.and]: [
                    {start_date: {
                        [Op.lte]: moment().toDate()
                    }},
                    {end_date: {
                        [Op.gte]: moment().toDate()
                    }}
                ]
            },
            order: [
                ['end_date', 'DESC']
            ],
            limit: 1
        }]
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