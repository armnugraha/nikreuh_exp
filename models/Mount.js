'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mount = sequelize.define('mounts', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    altitude: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    thumb: DataTypes.TEXT,
    type: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    full_time: DataTypes.BOOLEAN,
    // start_day: DataTypes.STRING,
    start_day: { 
        type: DataTypes.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('start_day'));
        }, 
        set: function(val) {
            return this.setDataValue('start_day', JSON.stringify(val));
        }
    },
    status_open: DataTypes.BOOLEAN,
    // center_coordinate: DataTypes.STRING
    center_coordinate: { 
        type: DataTypes.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('center_coordinate'));
        }, 
        set: function(val) {
            return this.setDataValue('center_coordinate', JSON.stringify(val));
        }
    },
    place: { 
        type: DataTypes.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('place'));
        }, 
        set: function(val) {
            return this.setDataValue('place', JSON.stringify(val));
        }
    },
    track_line: { 
        type: DataTypes.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('track_line'));
        }, 
        set: function(val) {
            return this.setDataValue('track_line', JSON.stringify(val));
        }
    }
  }, {});
  Mount.associate = function(models) {
    Mount.hasMany(models.mount_files, {
        foreignKey: 'mount_id'
    })
  };
  return Mount;
};