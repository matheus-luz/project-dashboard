"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../middlewares/login");
const login_2 = require("../controllers/login");
const authorization_1 = require("../middlewares/authorization");
const routerLogin = (0, express_1.Router)();
const loginController = new login_2.default();
const authorization = new authorization_1.default();
const loginValidate = new login_1.default();
routerLogin.post('/', loginValidate.validations, loginController.authentication);
routerLogin.get('/validate', authorization.validate, authorization.token, loginController.userSucess);
exports.default = routerLogin;
//# sourceMappingURL=login.js.map