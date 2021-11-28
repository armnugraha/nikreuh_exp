var express = require('express')
var router = express.Router()
var User = require('../models').users
var Role = require('../models').roles
var view = require('../views')
var Models = require('../models')
const bcrypt = require("bcrypt-nodejs");
const pageLimit = 10

//PAGINATION Function
const paginate = (query, { page, pageSize }) => {
    // const offset = page * pageSize;
    const limit = pageLimit;
    const offset = 0 + (page - 1) * limit;
    return {...query,offset,limit};
};

router.get('/', async (req, res, next) => {
 	const count_user = await User.count({})
    const totalPage = Math.ceil(count_user/pageLimit)

	let page = +req.query.page;
    let pageSize = count_user;
 	const users = await User.findAll(paginate(
    	{
            where: {}, // conditions
            order: [
                ['id', 'DESC']
            ]
	    },
    	{ page, pageSize },
  	),{
 		include: [ Role ]
  	})

	if (users.length !== 0) {
        res.status(200).json({
            'status': 'ok','pageSize': totalPage,'data': users,
        })
	} else {
		res.json(view('users empty'))
	}
})

router.get('/admin_gunung', async function (req, res, next) {
    const users = await User.findAll({
        where: {
            role_id: 2
        },
        order: [
            ['id', 'DESC']
        ]
    })

    if (users.length !== 0) {
        res.json(view(users))
    } else {
        res.json(view('users empty'))
    }
})

router.get('/:id', async (req, res, next) => {
    const user = await User.findByPk(req.params.id, {
        include: [ Role ]
    })

    if (user.length !== 0) {
        res.json(view(user))
    } else {
        res.json(view('user empty'))
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {
            username,name,email,password,phone,gender,birth,
            // height,
            // weight,
            role_id
        } = req.body;
        const users = await Models.users.create({
            username,name,email,password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),phone,gender,birth,
            // height,
            // weight,
            role_id
        });
        if (users) {
            // res.status(201).json({
            //   'status': 'OK',
            //   'messages': 'User berhasil ditambahkan',
            //   'data': users,
            // })
            res.json(view(users))
        }
    } catch (err) {
       // res.status(400).json({
       //   'status': 'ERROR',
       //   'messages': err.message,
       //   'data': {},
       // })
       res.json(view(err.errors[0].message))
    }
})

router.patch('/:id', async function (req, res, next) {
    try {
        const usersId = req.params.id;
        const {
            username,name,email,password,phone,gender,birth,
            // height,
            // weight,
            role_id
        } = req.body;

        var updateData;

        var check = [null, "null"];

        if (check.indexOf(password) !== -1) {
            updateData = {
                username,name,email,phone,gender,birth,
                // height,
                // weight,
                role_id
            };
        }else{
            updateData = {
                username,name,email,password:bcrypt.hashSync(password, bcrypt.genSaltSync(10)),phone,gender,birth,
                // height,
                // weight,
                role_id
            };
        }

        const users = await Models.users.update(updateData, {
            where: {id: usersId}
        });
        if (users) {
            // res.json({
            //   'status': 'OK',
            //   'messages': 'User berhasil diupdate',
            //   'data': users,
            // })
            res.json(view(users))
        }
    } catch (err) {
        // res.status(400).json({
        //   'status': 'ERROR',
        //   'messages': err.message,
        //   'data': {},
        // })
        res.json(view(err.errors[0].message))
        // res.json(view(err))
    }
});

router.delete('/:id', async function (req, res, next) {
    try {
        const usersId = req.params.id;
        const users = await Models.users.destroy({ where: {id: usersId}})
        if (users) {
            res.json({
                'status': 'OK',
                'messages': 'User berhasil dihapus',
                'data': users,
            })
        }
    } catch (err) {
        res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
        })
    }
});

module.exports = router