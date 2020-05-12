/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('species', [{
      name: 'Saiyan',
      description: 'Uma raça de extraterrestres que desempenham um papel central na série, uma vez que é revelado que o protagonista, Goku , é na verdade um Saiyajin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Terráqueo',
      description: 'São os habitantes do planeta Terra . O termo é usado inclusive para se referir a todas as raças inteligentes nativas do planeta, incluindo seres humanos, antropomorfos e monstros.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sayan-Terráqueo',
      description: 'Devido à sua fisiologia semelhante, os Saiyajins e os Terráqueos são capazes de cruzar. Geralmente possuem as mesmas forças aprimoradas dos Saiyajins, desenvolvendo suas habilidades com muito mais facilidade do que os terráqueos, mas carecem da mesma força e instinto de combate.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Namekian',
      description: 'Também conhecido como Nameks, Namekians são capazes de fazer seu próprio conjunto de Dragon Balls . Eles são humanóides com características de plantas e lesmas, incluindo pele verde e antenas.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Majin',
      description: 'Uma raça de entidades demoníacas. Em Dragon Ball Fusions , eles são considerados parte da raça Offworlder.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Raça Frieza',
      description: 'É a raça misteriosa à qual Frieza , King Cold , Cooler , Frost , Chilled e Kuriza pertencem. Não se sabe muito sobre suas origens, pois seu planeta natal nunca é visto.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Android',
      description: 'São Cyborgs/Robôs, muitos dos Androids foram criados pelo Dr. Gero. Estão divididos entre: Android normal, Cyborg e Bio-Android. Dizem que a maioria dos androids possui energia ilimitada e vida eterna. Devido à sua natureza inorgânica, eles, ou pelo menos os criados pelo Dr. Gero, exceto Cell.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('species', null, {});
  },
};
