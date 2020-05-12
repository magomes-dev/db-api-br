/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
const { Species } = require('../models');
const { Planet } = require('../models');
const { Serie } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saiyan = await Species.findOne({
      where: { name: 'Saiyan' },
    });

    const terraqueo = await Species.findOne({
      where: { name: 'Terráqueo' },
    });

    const saiyanTerraqueo = await Species.findOne({
      where: { name: 'Sayan-Terráqueo' },
    });

    const namekian = await Species.findOne({
      where: { name: 'Namekian' },
    });

    const majin = await Species.findOne({
      where: { name: 'Majin' },
    });

    const frieza = await Species.findOne({
      where: { name: 'Raça Frieza' },
    });

    const android = await Species.findOne({
      where: { name: 'Android' },
    });

    const db = await Serie.findOne({
      where: { name: 'Dragon Ball' },
    });

    const dbz = await Serie.findOne({
      where: { name: 'Dragon Ball Z' },
    });

    const terra = await Planet.findOne({
      where: { name: 'Terra' },
    });

    const vegeta = await Planet.findOne({
      where: { name: 'Vegeta' },
    });

    const namek = await Planet.findOne({
      where: { name: 'Namek' },
    });

    return queryInterface.bulkInsert('characters', [{
      name: 'Goku',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_goku.png',
      speciesId: saiyan.id,
      originPlanetId: vegeta.id,
      originalSerieId: db.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Trunks',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_trunks.png',
      speciesId: saiyanTerraqueo.id,
      originPlanetId: terra.id,
      originalSerieId: dbz.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Vegeta',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_vegeta.png',
      speciesId: saiyan.id,
      originPlanetId: vegeta.id,
      originalSerieId: dbz.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Gohan',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_gohan.png',
      speciesId: saiyanTerraqueo.id,
      originPlanetId: terra.id,
      originalSerieId: dbz.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Piccolo',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_piccolo.png',
      speciesId: namekian.id,
      originPlanetId: namek.id,
      originalSerieId: db.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Yamcha',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_yamcha.png',
      speciesId: terraqueo.id,
      originPlanetId: terra.id,
      originalSerieId: db.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Krillin',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_krillin.png',
      speciesId: terraqueo.id,
      originPlanetId: terra.id,
      originalSerieId: db.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Frieza',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_freeza.png',
      speciesId: frieza.id,
      originPlanetId: null,
      originalSerieId: dbz.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Cell',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_cell.png',
      speciesId: android.id,
      originPlanetId: null,
      originalSerieId: dbz.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Majin Buu',
      gender: 'M',
      image: 'https://static.bandainamcoent.eu/mid-high/dragon-ball/dragonball-project-z/05-characters/dbzk_majin-buu.png',
      speciesId: majin.id,
      originPlanetId: null,
      originalSerieId: dbz.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('characters', null, {});
  },
};
