'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define(
    'Tag', 
    {
      name: DataTypes.STRING
    }, {
      freezeTableName: true,
    }
  );

  Tag.associate = function(models) {
    Tag.belongsToMany(models.Todo, {through: models.TodoTag, foreignKey: 'tagId', as: 'todos'});
  };
  
  return Tag;
};