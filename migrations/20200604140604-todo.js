'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('todo', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      isComplete: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
      }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('todo');

  }
};
