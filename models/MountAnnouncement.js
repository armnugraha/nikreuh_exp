'use strict';
module.exports = (sequelize, DataTypes) => {
  const MountAnnouncement = sequelize.define('mount_announcements', {
    mount_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    note: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    file: DataTypes.TEXT
  }, {});
  MountAnnouncement.associate = function(models) {
    // associations can be defined here
  };
  return MountAnnouncement;
};