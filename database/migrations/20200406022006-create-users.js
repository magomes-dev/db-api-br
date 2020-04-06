'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userName: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },


      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      hash: {
        allowNull: false,
        type: Sequelize.STRING(),
        unique: true
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate:{
          isEmail : true
        },
        unique: true
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
