'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('species', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },

      description: {
        allowNull: true,
        type: Sequelize.STRING(2000)
      },

      // Timestamps
      createdAt: Sequelize.DATE,

      updatedAt: Sequelize.DATE,

    })

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('species')

  }
};
