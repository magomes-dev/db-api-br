/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
const bcrypt = require('bcryptjs');

const senha = bcrypt.hashSync('123456', 10);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      userName: 'admin',
      email: 'admin@gmail.com',
      firstName: 'admin',
      lastName: 'sys',
      hash: senha,
    }]);
    // ,
    // {
    //   userName: 'root',
    //   email: 'root@gmail.com',
    //   firstName: 'root',
    //   lastName: 'system',
    //   hash: senha,
    // }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
