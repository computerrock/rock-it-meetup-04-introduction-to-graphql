'use strict';
module.exports = (sequelize) => {
  var TodoTag = sequelize.define(
    'TodoTag', 
    {}, 
    {
      freezeTableName: true,
    }
  );
  
  TodoTag.associate = function(models) {
    TodoTag.belongsTo(models.Tag, {foreignKey: 'tagId', as: 'tag'});
    TodoTag.belongsTo(models.Todo, {foreignKey: 'todoId', as: 'todo'});
  };
  
  return TodoTag;
};