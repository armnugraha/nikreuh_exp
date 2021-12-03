const Mount = require('../models').mounts,
      User = require('../models').users,
      Announce = require('../models').mount_announcements,
      pageLimit = 10;

var view = require('../../views')
const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $ilike: Op.ilike,
  $or: Op.or,
  $not: Op.not
}

//PAGINATION Function
const paginate = (query, { page, pageSize }) => {
    const limit = pageLimit;
    const offset = 0 + (page - 1) * limit;
    return {
        ...query,
        offset,
        limit,
    };
};

var sendNotification = function(data) {
    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic Y2E5ZjliNDctZmYzOC00NDVmLWIzODItYmZmNGMxYjAwMzZh"
    };

    var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };
  
    var https = require('https');
    var req = https.request(options, function(res) {  
        res.on('data', function(data) {
        });
    });
  
    req.on('error', function(e) {});
  
    req.write(JSON.stringify(data));
    req.end();
};

module.exports = {
  // create(req, res) {
  //   return Todo
  //     .create({
  //       title: req.body.title,
  //     })
  //     .then(todo => res.status(201).send(todo))
  //     .catch(error => res.status(400).send(error));
  // },
  list(req, res) {
    const count_mount = Mount.count({})
    const totalPage = Math.ceil(count_mount/pageLimit)

    let page = +req.query.page;
    let pageSize = count_mount;
    const mounts = Mount.findAll(paginate(
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
                ['id', 'ASC']
            ],
        },
        { page, pageSize },
    ))

    return mounts
      .then(data => res.status(200).json({
         'status': 'ok',
         'pageSize': totalPage,
         'data': data,
      }))
      .catch(error => res.status(400).send(error));

    // if (mounts.length !== 0) {
    //   res.status(200).json({
    //      'status': 'ok',
    //      'pageSize': totalPage,
    //      'data': mounts,
    //   })
    // } else {
    //     res.json(view('mounts empty'))
    // }
  },
  retrieve(req, res) {
    const mounts = Mount.findOne({
        where: { id: req.params.id },
        include:[{model: Announce,
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
        }],
        limit: 1
    })
    return mounts
      .then(data => {
        if (!data) {
          return res.status(404).send({
            message: 'Mount Not Found',
          });
        }
        return res.status(200).send(data);
      })
      .catch(error => res.status(400).send(error));
  },
};