'use strict';
module.exports = (sequelize, DataTypes) => {
  const gears = sequelize.define('gears', {
    name: DataTypes.STRING
  }, {});
  gears.associate = function(models) {
    // associations can be defined here
  };
  return gears;
};