"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class User extends sequelize_1.Model {
}
User.init({
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
    company: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=User.js.map