'use strict'

const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Super User',
      username: 'super_user',
      email: 'superuser@unikom.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      gender:0,
      birth:"1998-05-19",
      role_id: 1
    },{
      name: 'Aan',
      username: 'admin_manglayang',
      email: 'admin@manglayang.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      phone:('0' + 87812316625).slice(-12),
      gender:0,
      birth:"1980-05-19",
      role_id: 2
    },
    {
      name: 'Kostaman',
      username: 'admin_cilengkrang',
      email: 'admin_curug@cilengkrang.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      phone:('0' + 87812316626).slice(-12),
      gender:0,
      birth:"1982-05-19",
      role_id: 2
    },
    {
      name: 'Admin Jayagiri',
      username: 'admin_jayagiri',
      email: 'admin@jayagiri.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      phone:('0' + 87812316627).slice(-12),
      gender:0,
      birth:"1986-05-19",
      role_id: 2
    },
    {
      name: 'Admin CIC',
      username: 'admin_cic',
      email: 'admin@cic.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      phone:('0' + 87812316628).slice(-12),
      gender:0,
      birth:"1989-05-19",
      role_id: 2
    },
    // {
    //   name: 'Admin Sewa',
    //   username: 'admin_sewa',
    //   email: 'admin_sewa@unikom.com',
    //   password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
    // gender:0,
    // birth:,
  
    //   role_id: 3
    // },
    // {
    //   name: 'arman',
    //   username: 'arman',
    //   email: 'arman@unikom.com',
    //   password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
    //   gender:0,
    //   birth:"1998-05-19",
  
    //   role_id: 3
    // },
    // {
    //   name: 'shiffa',
    //   username: 'shiffa',
    //   email: 'shiffa@unikom.com',
    //   password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
    //   gender:1,
    //   birth:"1998-06-17",
  
    //   role_id: 3
    // },
    // {
    //   name: 'rikad',
    //   username: 'rikad',
    //   email: 'rikad@unikom.com',
    //   password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
    //   gender:0,
    //   birth:"1997-02-19",
  
    //   role_id: 3
    // },
    // {
    //   name: 'indra',
    //   username: 'indra',
    //   email: 'indra@unikom.com',
    //   password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
    //   gender:0,
    //   birth:"1997-10-19",
  
    //   role_id: 3
    // },
    // {
    //   name: 'faishal',
    //   username: 'faishal',
    //   email: 'faishal@unikom.com',
    //   password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
    //   gender:0,
    //   birth:"1998-05-19",
  
    //   role_id: 3
    // },
    // {
    //   name: 'heruwin',
    //   username: 'heruwin',
    //   email: 'heruwin@unikom.com',
    //   password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
    //   gender:0,
    //   birth:"1998-05-19",
  
    //   role_id: 3
    // },
    // {
    //   name: 'ihan',
    //   username: 'ihan',
    //   email: 'ihan@unikom.com',
    //   password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
    //   gender:0,
    //   birth:"1998-05-19",
  
    //   role_id: 3
    // }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
