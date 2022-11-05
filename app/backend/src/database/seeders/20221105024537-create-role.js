module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('role',
      [
        {
          "name": "Biostatistician III",
        },
        {
          "name": "VP Marketing",
        },
        {
          "name": "Senior Sales Associate",
        },
        {
          "name": "Physical Therapy Assistant",
        },
        {
          "name": "Account Coordinator",
        },
        {
          "name": "Database Administrator IV",
        },
        {
          "name": "VP Product Management",
        },
        {
          "name": "Structural Engineer",
        },
        {
          "name": "Marketing Manager",
        },
        {
          "name": "Registered Nurse",
        },
        {
          "name": "Research Associate",
        },
        {
          "name": "Paralegal",
        },
        {
          "name": "Health Coach IV",
        },
      ],
      {},
      );
    },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('role', null, {});
  },
};
