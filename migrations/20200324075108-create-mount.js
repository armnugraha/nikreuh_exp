'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
        // references: { model: 'users', key: 'id' }
      },
      name: {
        unique: true,
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      altitude: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      thumb: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.TIME
      },
      end_time: {
        type: Sequelize.TIME
      },
      full_time: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      start_day: {
        type: Sequelize.STRING
      },
      status_open: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      center_coordinate: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.TEXT
      },
      track_line: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mounts');
  }
};