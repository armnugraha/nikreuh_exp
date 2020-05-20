'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('roles', [{
            name: 'super user'
        },{
            name: 'admin gunung'
        },
        // {
        //     name: 'admin sewa'
        // },
        {
            name: 'user'
        }], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('roles', null, {})
    }
};
