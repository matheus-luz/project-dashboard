"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as jwt from 'jsonwebtoken';
const User_1 = require("../database/models/User");
// const SECRET = process.env.JWT_SECRET || 'secret';
class LoginController {
    constructor() {
        this.getAll = async (_req, res) => {
            const users = await User_1.default.findAll();
            return res.status(200).json(users);
        };
    }
}
exports.default = LoginController;
//# sourceMappingURL=users.js.map