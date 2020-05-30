'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('outdoor_gears', [{
            mount_id: 1,
            gear_id: 1
        },{
            mount_id: 1,
            gear_id: 2
        },
        {
            mount_id: 1,
            gear_id: 3
        },
        {
            mount_id: 1,
            gear_id: 4
        },
        {
            mount_id: 2,
            gear_id: 3
        },
        {
            mount_id: 2,
            gear_id: 4
        },
        {
            mount_id: 3,
            gear_id: 1
        },
        {
            mount_id: 3,
            gear_id: 2
        },
        {
            mount_id: 3,
            gear_id: 3
        },
        {
            mount_id: 3,
            gear_id: 4
        },
        {
            mount_id: 4,
            gear_id: 3
        }], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('outdoor_gears', null, {})
    }
};
