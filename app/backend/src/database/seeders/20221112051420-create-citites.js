module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('cities',
      [
        {
          "name": "Warner, NH",
        },
        {
          "name": "East Natchitoches, PA",
        },
        {
          "name": "Lyon, WV",
        },
        {
          "name": "Willow Run, IL",
        },
        {
          "name": "Conyersville, AZ",
        },
        {
          "name": "Mount Baker, NY",
        },
        {
          "name": "Farmington Lake, OK",
        },
        {
          "name": "Martins Corner, TX",
        },
        {
          "name": "Pickerel Narrows, MT",
        },
        {
          "name": "Willaha, OH",
        },
        {
          "name": "Center, MA",
        },
        {
          "name": "Spring City, MS",
        },
        {
          "name": "Mittenlane, TX",
        },
        {
          "name": "East Waterford, ME",
        },
        {
          "name": "Coltman, WV",
        }
      ],
      {},
      );
    },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  },
};