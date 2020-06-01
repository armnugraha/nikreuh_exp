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
        {// 5
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
        {//10
            name: 'Sarung Tangan'
        },
        {
            name: 'Senter'
        },
        {
            name: 'Lampu Tenda' //hapus
        },
        {
            name: 'Kompor'
        },
        {
            name: 'Gas Hicook'
        },
        {//15
            name: 'Nesting'
        }
        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('gears', null, {})
    }
};
