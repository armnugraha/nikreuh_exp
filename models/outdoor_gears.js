'use strict';
module.exports = (sequelize, DataTypes) => {
  const outdoor_gears = sequelize.define('outdoor_gears', {
    mount_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  outdoor_gears.associate = function(models) {
    // associations can be defined here
  };
  return outdoor_gears;
};