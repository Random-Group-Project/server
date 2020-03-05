'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: DataTypes.STRING,
    gif_url: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
  };
  return Activity;
};