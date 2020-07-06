const express = require('express')
const jwt = require('../jwt')
const router = express.Router()
var Review = require('../models').mount_reviews
var Models = require('../models')
const bcrypt = require("bcrypt");
var view = require('../views')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const pageLimit = 8

router.get('/create/seed/auto', async (req, res, next) => {
    try {
        for (var i = 6; i <= 600; i++) {

            var data = [1,2,3,4]
            var iM = Math.floor(4*Math.random())

            var data_rate = [1,2,3,4,5]
            var iR = Math.floor(5*Math.random())

            const users = await Models.users.create({
                username:"data_testing"+i,name:"Data Testing"+i,email:"data_testing"+i+"@gmail.com",password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),phone:87822516+i,gender:0,role_id:3
            });
            const reviews = await Review.create({mount_id:data[iM],user_id:i,rate:data_rate[iR],desc:"Data Testing"+i});
        }
        
        res.json(view("ok"))
    } catch (err) {
        res.json(view(err.errors[0].message))
    }
})

module.exports = router