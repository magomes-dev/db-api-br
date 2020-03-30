'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('series', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },

      description: {
        allowNull: false,
        type: Sequelize.STRING
      }, 

      image: Sequelize.STRING,
        
      // Timestamps
      createdAt: Sequelize.DATE,
      
      updatedAt: Sequelize.DATE,

    })
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('series');
  }
};
