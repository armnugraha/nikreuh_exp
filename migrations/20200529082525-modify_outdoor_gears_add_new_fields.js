'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'outdoor_gears', // table name
        'gear_id', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      ),
      // queryInterface.addColumn(
      //   'outdoor_gears',
      //   'linkedin',
      //   {
      //     type: Sequelize.STRING,
      //     allowNull: true,
      //   },
      // ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('outdoor_gears', 'gear_id'),
      // queryInterface.removeColumn('Users', 'twitter'),
      // queryInterface.removeColumn('Users', 'bio'),
    ]);
  },
};