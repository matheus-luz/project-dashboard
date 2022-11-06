"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const routerUsers = (0, express_1.Router)();
const userController = new users_1.default();
routerUsers.get('/user', userController.getAll);
exports.default = routerUsers;
//# sourceMappingURL=users.js.map