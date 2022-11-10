module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        {
          "email": "luz.matheus11@gmail.com",
          "password": "12345"
        },
        {
          "email": "fabio.native@gmail.com",
          "password": "12345"
        },
      ],
      {},
      );
    },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};