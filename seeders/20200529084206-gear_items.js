// condition (clear / sun (0), rainy & Thunderstorm & clouds(1)) jika kondisi hujan tampilkan yg kondisi nya hujan saja, apabila panas tampilkan semua
// type (normal (0), ultralight (1))
// capacity (45 L (tas), 4org (tenda), )

'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('gear_items', [
        {gear_id:1,name: 'Naturhike Cloud Up',weight: 1500,condition:1,type:1,capacity:"3 Orang"},
        {gear_id:1,name: 'Consina Superlight 2',weight: 1200,condition:1,type:1,capacity:"2 Orang"},
        {gear_id:1,name: 'Consina Magnum 5',weight:4000,condition:1,type:0,capacity:"6 Orang"},
        {gear_id:1,name: 'Tenda Dome',weight:2600,condition:0,type:0,capacity:"5 Orang"},

        // musim panas 5-10 C, musim dingin -5 C
        //kalo bisa ambil suhu pada saat malam hari
        {gear_id:2,name: 'Onsight Sleeping Bag Mummy Extreem Peak 05',weight:1500,condition:0,type:0,capacity: "Panjang 205cm"},
        {gear_id:2,name: 'Deuter Sleeping Bag Dreamlite L500',weight:700,condition:1,type:1,capacity: "Panjang 220cm"},

        {gear_id:3,name: 'Aether AG 70',weight:2500,condition:1,type:0,capacity: "70 Liter"},
        {gear_id:3,name: 'Kestrel 48',weight:1700,condition:1,type:0,capacity: "48 Liter"},
        {gear_id:3,name: 'Rhinos 60L',weight:2000,condition:1,type:0,capacity: "60 Liter"},
        {gear_id:3,name: 'Daypack 35L',weight:1000,condition:1,type:1,capacity:"35 Liter"},

        {gear_id:4,name: 'Matras',weight: 800,condition:1,type:0,capacity:"Panjang 180cm"},
        {gear_id:4,name: 'Klymit Static V2',weight:450,condition:1,type:1,capacity:"Panjang 182cm"},

        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('gear_items', null, {})
    }
};
