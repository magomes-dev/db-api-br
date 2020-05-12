/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('planets', [{
      name: 'Vegeta',
      image: 'https://vignette.wikia.nocookie.net/dragonball/images/d/d6/PlanetVegetaBeforeItWasD.png/revision/latest?cb=20130814022903&path-prefix=pt-br',
    },
    {
      name: 'Namek',
      image: 'https://vignette.wikia.nocookie.net/dragonball/images/4/43/NamekGreenPlanet.png/revision/latest?cb=20100731172310',
    },
    {
      name: 'Terra',
      image: 'https://pm1.narvii.com/6244/30e0b5b1c3d7ed4bc2f8ba4e63cea56e53eaca76_hq.jpg',
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('planets', null, {});
  },
};
