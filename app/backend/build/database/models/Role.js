"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Role extends sequelize_1.Model {
}
Role.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    tableName: 'role',
    timestamps: false,
});
exports.default = Role;
//# sourceMappingURL=Role.js.map