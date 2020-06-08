'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

   return queryInterface.createTable('user', { 
     id: {
       type:Sequelize.INTEGER,
       primaryKey:true,
       allowNull:false,
       autoIncrement:true
      },
      name:{
        type:Sequelize.STRING(11)
      }
    });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('user');

  }
};
