'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('planets', {

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

      image: {
        allowNull: false,
        type: Sequelize.STRING
      },

      // Timestamps
      createdAt: Sequelize.DATE,

      updatedAt: Sequelize.DATE,

    })

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users');

  }
};
