'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mounts', [{
      user_id:2,
      name:'Gunung Manglayang (Via Batu Kuda)',
      address:'Cibiru Wetan, Cileunyi, Bandung, Jawa Barat 40625',
      altitude:1818,
      rank:5,
      thumb:null,
      type:"Medium",
      desc:"Gunung Manglayang adalah sebuah gunung bertipe Stratovolcano yang terletak di antara Kota Bandung dan Kabupaten Sumedang, Jawa Barat, Indonesia dan memiliki ketinggian sekitar 1818 mdpl. Pemandangannya cukup indah, tetapi karena relatif tidak terlalu tinggi, sehingga kurang dikenal oleh pendaki-pendaki gunung pada umumnya. Dalam deretan gunung-gunung Burangrang – Tangkuban Perahu – Bukit Tunggul – Gunung Manglayang, Gunung Manglayang menjadi gunung yang terindah dari rangkaian keempat gunung tersebut. Mungkin itulah sebabnya di kalangan para penggiat alam bebas, gunung ini sempat terlupakan terkecuali para penggiat alam bebas dari Bandung dan sekitarnya. Walaupun begitu, Gunung Manglayang tetap menawarkan pesona alamnya tersendiri.",
      price:7000,
      full_time:true,
      start_day:"[\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\",\"Minggu\"]",
      center_coordinate:"[107.7405641, -6.8902561]",
      place:"[{\"type\": \"Feature\",\"properties\": {\"icon\": \"ic_n_gate\",\"title\":\"Pintu Masuk\",\"desc\": \"Pos 1 - Pos 2(Estimasi 1 Jam) - (2 KM)\"},\"geometry\": {\"type\": \"Point\",\"coordinates\": [107.745091, -6.893077]}}]",
      track_line:"[[107.745091, -6.893077],[107.745667, -6.890376],[107.749103, -6.892071],[107.748759, -6.892859],[107.744036, -6.889353],[107.742451, -6.889072],[107.744297, -6.884726],[107.742107, -6.882979],[107.742837, -6.880423],[107.743569, -6.878727],[107.743934, -6.877944]]",
    },{
      user_id:3,
      name:'Curug Cilengkrang',
      address:'Cilengkrang, Bandung, Jawa Barat 40615',
      altitude:1200,
      rank:5,
      thumb:null,
      type:"Medium",
      desc:"Curug Cilengkrang adalah salah satu objek wisata alam yang ada di Bandung. Curug (bahasa sunda) artinya air terjun, sedangkan Cilengkrang di ambil dari bentuk batu dimana air terjun ini berasal. Bila diperkotaan Anda jarang menemukan pepohonan yang sejuk untuk berteduh dari panasnya sengatan matahari, di kawasan wisata ini Anda akan menemukan keindahan alam luar biasa dari Curug Cilengkrang.",
      price:5000,
      start_time:"07:00:00",
      end_time:"18:00:00",
      start_day:"[\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\",\"Minggu\"]",
      center_coordinate:"[107.7405641, -6.8902561]",
      place:"[{\"type\": \"Feature\",\"properties\": {\"icon\": \"ic_n_gate\",\"title\":\"Pintu Masuk\",\"desc\": \"Pos 1 - Pos 2(Estimasi 1 Jam) - (2 KM)\"},\"geometry\": {\"type\": \"Point\",\"coordinates\": [107.745091, -6.893077]}}]",
      track_line:"[[107.745091, -6.893077],[107.745667, -6.890376],[107.749103, -6.892071],[107.748759, -6.892859],[107.744036, -6.889353],[107.742451, -6.889072],[107.744297, -6.884726],[107.742107, -6.882979],[107.742837, -6.880423],[107.743569, -6.878727],[107.743934, -6.877944]]",
    },{
      user_id:4,
      name: 'LHI Jaya Giri',
      address:'kecamatan Lembang, Bandung Barat, Jawa Barat',
      altitude:1450,
      rank: 5,
      thumb:null,
      type: "Medium",
      desc:"Wana Wisata Lintas Hutan Indah (LHI) Jayagiri merupakan tempat wisata dengan nuansa alam yang berada di Lembang, Bandung. Tempat wisata LHI Jayagiri merupakan area hutan alami yang asri, memiliki udara yang masih segar, penuh dengan oksigen yang dapat kita hirup sepuasnya. Sebagian besar area ini, merupakan hutan pinus dengan luas mencapai 7 hektar dan memiliki ketinggian 1. 450 meter di atas permukaan laut.",
      price:15000,
      start_time:"07:00:00",
      end_time:"18:00:00",
      start_day:"[\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\",\"Minggu\"]",
      center_coordinate:"[107.7405641, -6.8902561]",
      place:"[{\"type\": \"Feature\",\"properties\": {\"icon\": \"ic_n_gate\",\"title\":\"Pintu Masuk\",\"desc\": \"Pos 1 - Pos 2(Estimasi 1 Jam) - (2 KM)\"},\"geometry\": {\"type\": \"Point\",\"coordinates\": [107.745091, -6.893077]}}]",
      track_line:"[[107.745091, -6.893077],[107.745667, -6.890376],[107.749103, -6.892071],[107.748759, -6.892859],[107.744036, -6.889353],[107.742451, -6.889072],[107.744297, -6.884726],[107.742107, -6.882979],[107.742837, -6.880423],[107.743569, -6.878727],[107.743934, -6.877944]]",
    },{
      user_id:5,
      name: 'Ciwangun Indah Camp',
      address:'Kp. Ciwangun, RT. 03 / 15, Desa Cihanjuang Rahayu, Jl. Kolonel Masturi, Cihanjuang Rahayu, Kec. Parongpong, Kabupaten Bandung Barat, Jawa Barat 40559',
      altitude:1100,
      rank: 5,
      thumb:null,
      type:"Medium",
      desc:"CIC merupakan kompleks perkemahan yang tidak hanya berfungsi sebagai tempat camping. Dengan luas sekitar 22 Ha, memiliki beberapa fungsi lainnya yang dijamin membuat liburan anda dan keluarga menjadi asyik. Terletak di ketinggian 1.100 Mdpl, membuat CIC memiliki hawa dingin khas pegunungan. Sangat cocok untuk anda yang ingin melepas penat setelah seharian bekerja dibawah terik matahari. Bukan hanya untuk dijadikan tempat berlibur, CIC juga bisa menjadi salah satu tempat pilihan anda untuk ngabuburit. Dengan semua fasilitas yang dimiliki CIC, sudah pasti ngabuburit anda tidak akan membosankan. Dimulai dengan pemandangan indah yang dimiliki Ciwangun Indah Camp. Pemandangan ini didapat dari tekstur tanah yang berbukit – bukit. Sehingga anda tidak akan jemu meskipun anda melepas pandangan selama beberapa menit. Disamping itu, anda bisa menikmati pemandangan yang berwarna hijau yang bersumber dari kebun teh dekat area CIC, juga pohon – pohon pinus yang menjulang, akan menambah kesyahduan anda saat menikmati alam sekitar.",
      price:10000,
      start_time:"07:00:00",
      end_time:"19:30:00",
      start_day:"[\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\",\"Minggu\"]",
      center_coordinate:"[107.7405641, -6.8902561]",
      place:"[{\"type\": \"Feature\",\"properties\": {\"icon\": \"ic_n_gate\",\"title\":\"Pintu Masuk\",\"desc\": \"Pos 1 - Pos 2(Estimasi 1 Jam) - (2 KM)\"},\"geometry\": {\"type\": \"Point\",\"coordinates\": [107.745091, -6.893077]}}]",
      track_line:"[[107.745091, -6.893077],[107.745667, -6.890376],[107.749103, -6.892071],[107.748759, -6.892859],[107.744036, -6.889353],[107.742451, -6.889072],[107.744297, -6.884726],[107.742107, -6.882979],[107.742837, -6.880423],[107.743569, -6.878727],[107.743934, -6.877944]]",
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mounts', null, {})
  }
};