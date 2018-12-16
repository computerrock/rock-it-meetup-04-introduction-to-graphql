'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define(
    'Todo', 
    {
      title: DataTypes.STRING,
      isDone: {
       type: DataTypes.BOOLEAN,
       default: false,
      },
      expireDate: DataTypes.DATE,
    }, 
    {
      freezeTableName: true,
    }
  );
    
  Todo.associate = function(models) {
    Todo.belongsToMany(models.Tag, {through: models.TodoTag, foreignKey: 'todoId', as: 'tags'});
    Todo.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
    
  };
  
  return Todo;
};