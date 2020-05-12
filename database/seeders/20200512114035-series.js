/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('series', [{
      name: 'Dragon Ball',
      description: 'Goku foi encontrado por Gohan quando era apenas um bebê e o bondoso velhinho o adotou como neto. Gohan deu de presente a Goku a esfera de quatro estrelas.',
      image: 'https://animesonline.cc/wp-content/uploads/2019/06/3wx3EAMtqnbSLhGG8NrqXriCUIQ.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dragon Ball Z',
      description: 'Dragon Ball Z continua as aventuras de Goku , que, juntamente com seus companheiros, defende a Terra contra vilões que variam de alienígenas ( Freeza ), andróides ( Cell ) e outras criaturas ( Majin Buu ). Enquanto o anime original de Dragon Ball seguia Goku desde a infância até o início da idade adulta, Dragon Ball Z é uma continuação de sua vida adulta, mas ao mesmo tempo paralela a vida de seu filho Gohan , bem como o desenvolvimento de seu rival Vegeta .',
      image: 'https://animespro.com/wp-content/uploads/poster_dragon_ball_z__z_warriors_by_dony910-d5bhg75.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('series', null, {});
  },
};
