"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Company_1 = require("./Company");
const Office_1 = require("./Office");
const City_1 = require("./City");
class Client extends sequelize_1.Model {
}
Client.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    company_id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    city_id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    title_id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'customers',
    timestamps: false,
});
Client.belongsTo(Company_1.default, { foreignKey: 'company_id', as: 'company' });
Client.belongsTo(City_1.default, { foreignKey: 'city_id', as: 'city' });
Client.belongsTo(Office_1.default, { foreignKey: 'title_id', as: 'office' });
exports.default = Client;
//# sourceMappingURL=Client.js.map