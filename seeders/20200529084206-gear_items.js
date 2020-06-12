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
        {gear_id:2,name: 'Arei AG Sleeping Bag',weight:900,condition:1,type:0,capacity: "Panjang 210cm"},
        {gear_id:2,name: 'Eiger Sleeping Bag',weight:500,condition:0,type:1,capacity: "Panjang 205cm"},

        {gear_id:3,name: 'Aether AG 70',weight:2500,condition:1,type:0,capacity: "70 Liter"},
        {gear_id:3,name: 'Kestrel 48',weight:1700,condition:1,type:0,capacity: "48 Liter"},
        {gear_id:3,name: 'Rhinos 60L',weight:2000,condition:1,type:0,capacity: "60 Liter"},
        {gear_id:3,name: 'Daypack 35L',weight:1000,condition:0,type:1,capacity:"35 Liter"},
        {gear_id:3,name: 'Merapi 55L',weight:1000,condition:0,type:0,capacity:"55 Liter"},

        {gear_id:4,name: 'Matras Yoga',weight: 800,condition:1,type:0,capacity:"Panjang 180cm"},
        {gear_id:4,name: 'Klymit Static V2',weight:450,condition:1,type:1,capacity:"Panjang 182cm"},
        {gear_id:4,name: 'Matras Gulung',weight:700,condition:0,type:0,capacity:"Panjang 182cm"},
        {gear_id:4,name: 'Klymit Static V1',weight:500,condition:0,type:1,capacity:"Panjang 182cm"},

        {gear_id:5,name: 'Asolo Implus QL Quick Lock',weight:500,condition:1,type:0,capacity:"Telescope"},
        {gear_id:5,name: 'Eiger Tenacity',weight:260,condition:1,type:1,capacity:"Lipat"},
        {gear_id:5,name: 'Eiger Tenacity Long',weight:500,condition:0,type:1,capacity:"Telescope"},
        {gear_id:5,name: 'Black Diamond Trail Sport 3',weight:500,condition:0,type:0,capacity:"Telescope"},

        {gear_id:6,name: 'Flysheet 2x3',weight:600,condition:1,type:1,capacity:"2x3"},
        {gear_id:6,name: 'Flysheet 3x4',weight:700,condition:1,type:0,capacity:"3x4"},
        {gear_id:6,name: 'Flysheet Ultralight 2x3',weight:500,condition:0,type:1,capacity:"2x3"},
        {gear_id:6,name: 'Flysheet 4x4',weight:500,condition:0,type:0,capacity:"4x4"},

        {gear_id:7,name: 'Hike Light 1.1 Jacket',weight:550,condition:0,type:1,capacity:"Suhu 15-20 C"},
        {gear_id:7,name: 'Finder Insulation Jacket',weight:1000,condition:1,type:0,capacity:"Suhu 10-15 C"},
        {gear_id:7,name: 'Fordate 1.0 X Jacket',weight:400,condition:0,type:1,capacity:"Suhu 15-20 C"},
        {gear_id:7,name: 'Fordate 2.0 X Jacket',weight:600,condition:1,type:1,capacity:"Suhu 5-10 C"},
        {gear_id:7,name: 'Naturhike Jacket',weight:800,condition:0,type:0,capacity:"Suhu 0-15 C"},
        
        {gear_id:8,name: 'ASV Rubber Raincoat',weight:1750,condition:1,type:0,capacity:"Karet Sintetis"},
        {gear_id:8,name: 'Arei Raincoat Stormshield',weight:800,condition:1,type:0,capacity:"PVC Rubber"},
        {gear_id:8,name: 'Consina Ultralight Raincoat',weight:450,condition:1,type:1,capacity:"Nilon Coated PU"},

        {gear_id:9,name: 'Adidas Terrex AX2R',weight:1000,condition:0,type:0,capacity:"Size 40"},
        {gear_id:9,name: 'Merrel MOAB 2 Vent',weight:744,condition:0,type:0,capacity:"Size 37"},
        {gear_id:9,name: 'Consina Shard Men',weight:800,condition:1,type:0,capacity:"Size 40"},
        {gear_id:9,name: 'Eiger Shoes Boot Pollock',weight:1000,condition:1,type:0,capacity:"Size 38-45"},
        
        {gear_id:10,name: 'Men Tactical Gloves',weight:500,condition:1,type:0,capacity:"Size M-XL"},
        {gear_id:10,name: 'Men Tactical Gloves',weight:500,condition:0,type:0,capacity:"Size M-XL"},
        {gear_id:10,name: 'Outdoor Gloves',weight:100,condition:1,type:1,capacity:"Size M-XL"},
        {gear_id:10,name: 'Outdoor Gloves',weight:100,condition:0,type:1,capacity:"Size M-XL"},
        
        {gear_id:11,name: 'Lampu Senter Emergency Lentera',weight:250,condition:0,type:0,capacity:"300 Lumen"},
        {gear_id:11,name: 'Cree Flashlight C8',weight:250,condition:1,type:0,capacity:"3800 Lumen"},
        {gear_id:11,name: 'Pocketman LED Flashlight',weight:60,condition:1,type:1,capacity:"2000 Lumen"},
        {gear_id:11,name: 'Pocketman LED Flashlight',weight:60,condition:0,type:1,capacity:"2000 Lumen"},
        
        {gear_id:12,name: 'Kompor spirtus gel',weight:100,condition:0,type:1,capacity:"Spirtus"},
        {gear_id:12,name: 'Kompor trangia',weight:200,condition:0,type:0,capacity:"Spirtus"},
        {gear_id:12,name: 'Kompor mini wind prof',weight:300,condition:0,type:1,capacity:"Tabung Hicook"},
        {gear_id:12,name: 'Kompor mini wind prof',weight:300,condition:1,type:1,capacity:"Tabung Hicook"},
        {gear_id:12,name: 'Niko Kompor Portable NK – 268',weight:1000,condition:0,type:0,capacity:"Tabung Hicook"},
        {gear_id:12,name: 'Niko Kompor Portable NK – 268',weight:1000,condition:1,type:0,capacity:"Tabung Hicook"},
        {gear_id:12,name: 'Kompor ultralight',weight:80,condition:0,type:1,capacity:"Tabung Hicook"},
        
        {gear_id:13,name: 'Army Nesting Set',weight:100,condition:1,type:1,capacity:"2 Orang"},
        {gear_id:13,name: 'Camping Frying Pan',weight:50,condition:1,type:1,capacity:"2 Orang"},
        {gear_id:13,name: 'Cookware Set',weight:200,condition:1,type:1,capacity:"4 Orang"},
        {gear_id:13,name: '3-in-1 Pot Set',weight:500,condition:1,type:0,capacity:"6-8 Orang"},

        {gear_id:14,name: 'Tali Karmantel Statis',weight:5000,condition:1,type:0,capacity:"P=50m, L=10,5mm, Beban=250kg"},
        {gear_id:14,name: 'Tali Karmantel Statis',weight:5000,condition:0,type:0,capacity:"P=50m, L=10,5mm, Beban=250kg"},
        {gear_id:14,name: 'Tali Webbing Sling Tubular',weight:200,condition:1,type:1,capacity:"P=5-45m, L=2,5cm, Beban=250kg"},
        {gear_id:14,name: 'Tali Webbing Sling Tubular',weight:200,condition:0,type:1,capacity:"P=5-45m, L=2,5cm, Beban=250kg"},
        
        // {gear_id:15,name: '',weight:,condition:,type:,capacity:""},
        // {gear_id:15,name: '',weight:,condition:,type:,capacity:""},
        // {gear_id:15,name: '',weight:,condition:,type:,capacity:""},
        
        // {gear_id:,name: '',weight:,condition:,type:,capacity:""},
        // {gear_id:,name: '',weight:,condition:,type:,capacity:""},
        // {gear_id:,name: '',weight:,condition:,type:,capacity:""},
        // {gear_id:,name: '',weight:,condition:,type:,capacity:""},


        ], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('gear_items', null, {})
    }
};
