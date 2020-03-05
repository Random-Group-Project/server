'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Activity extends Model {
    static associate (models) {
      Activity.belongsTo(models.User)
    }
  }

  Activity.init({
    name: DataTypes.STRING,
    gif_url: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {sequelize});

  return Activity;
};