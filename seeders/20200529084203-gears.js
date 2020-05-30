'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('gears', [{
            name: 'Tenda'
        },{
            name: 'Sleeping Bag'
        },
        {
            name: 'Carrier'
        },
        {
            name: 'Matras'
        },
        {
            name: 'Trekking Pole'
        },
        {
            name: 'Flysheet'
        },
        {
            name: 'Jaket'
        },
        {
            name: 'Jas Hujan'
        },
        {
            name: 'Sepatu'
        },
        {
            name: 'Sarung Tangan'
        },
        {
            name: 'Senter'
        },
        {
            name: 'Lampu Tenda'
        },
        {
            name: 'Kompor'
        },
        {
            name: 'Gas Hicook'
        },
        {
            name: 'Nesting'
        }
        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('gears', null, {})
    }
};
