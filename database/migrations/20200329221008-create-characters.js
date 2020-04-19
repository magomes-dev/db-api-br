'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable('characters', {

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

          gender: {
            allowNull: false,
            type: Sequelize.STRING(1),
          },
    
          image: {
            allowNull: true,
            type: Sequelize.STRING
          },

          speciesId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'species',
              key: 'id'
            },
            allowNull: false
          },

          originPlanetId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'planets',
              key: 'id'
            },
            allowNull: false
          },

          originalSerieId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'series',
              key: 'id'
            },
            allowNull: false
          },
    
          // Timestamps
          createdAt: Sequelize.DATE,
    
          updatedAt: Sequelize.DATE,
    
        }, {transaction: t}),

        queryInterface.addConstraint('characters', ['gender'], {
          type: 'check',
          where: {
            gender: ['m', 'f', 'l']
          }
        }, {transaction: t})
      ])

    });

      
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('characters');
    
  }
};
