'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
      'User', 
      {
        username: DataTypes.STRING
      }, 
      {
        freezeTableName: true,
      }
  );
  User.associate = function(models) {
      User.hasMany(models.Todo, { foreighKey: 'userId', as: 'todos'});
  };

  return User;
};