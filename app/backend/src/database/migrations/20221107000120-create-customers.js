module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'id'
        }
      },
      city_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cities',
          key: 'id'
        }
      },
      title_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'office',
          key: 'id'
        }
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('customers');
  },
};
