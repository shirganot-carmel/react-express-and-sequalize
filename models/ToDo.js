'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }

  }, {});
  ToDo.associate = function (models) {
    // associations can be defined here
    ToDo.belongsTo(models.User, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      as: 'user'
    })

  };

  ToDo.check=()=>{

  }

  return ToDo;
};