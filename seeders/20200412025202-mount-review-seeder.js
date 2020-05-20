'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mount_reviews', [{
      mount_id: 1,
      user_id: 6,
      rate: 4,
      desc: 'Wisata Batu Kuda terletak di Gunung Manglayang. Disini ada area untuk perkemahan yg tempat nya sangat luas dilindungi oleh rimbunnya pohon pinus dan udara nya sangat sejuk.'
    },{
      mount_id: 1,
      user_id: 7,
      rate: 4,
      desc: 'Kesini berdua rencana mau ke puncak Manglayang cuma Rp 7500/orang, parkir motor Rp 5000. Kalau mau ke puncak, ambil jalur kiri nanti akan melihat jalan naik yang lapang dan di atasnya ada view point berupa papan kayu seperti pentas'
    },{
      mount_id: 2,
      user_id: 8,
      rate: 4,
      desc: 'Tempat yang enak buat sekedar melepas penat dan menikmati suasana alam sudah 2 kali ke tempat ini dan tidak mengecewakan dan sekarang fasilitas nya makin banyak ada musholla,kamar mandi dan juga kalau yang mau camping gausah repot repot'
    },{
      mount_id: 2,
      user_id: 9,
      rate: 5,
      desc: 'Indahnya kuasa Alloh, jaga kelestarian Alam!!'
    },{
      mount_id: 3,
      user_id: 10,
      rate: 4,
      desc: 'View nya keren banget, gak bakalan nyesel yang kesini, Surganya Gunung untuk Pendaki yang gak mau cape'
    },{
      mount_id: 3,
      user_id: 11,
      rate: 4,
      desc: 'Subhanallah sekali pemandangannya ... Perjuangan sangat keras untuk menghampiri sang puncak...'
    },{
      mount_id: 4,
      user_id: 12,
      rate: 4,
      desc: 'Cocok untuk pendaki pemula. Jalur tracking cukup landai dan aman, tersedia beberapa toilet di beberapa titik sepanjang jalur pendakian.'
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mount_reviews', null, {})
  }
};