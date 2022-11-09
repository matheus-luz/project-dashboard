"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const Client_1 = require("../database/models/Client");
const login_1 = require("../service/login");
const SECRET = process.env.JWT_SECRET || 'secret';
class LoginController {
    constructor() {
        this.authentication = async (req, res) => {
            const client = req.body;
            const { status, data } = await this.service.find(client);
            return res.status(status).json(data);
        };
        this.userSucess = async (req, res) => {
            const token = req.headers.authorization;
            const decode = jwt.verify(token, SECRET);
            const { email } = decode;
            const user = await Client_1.default.findOne({ where: { email } });
            if (user) {
                return res.status(200).json({ id: user.id });
            }
        };
        this.service = new login_1.default();
    }
}
exports.default = LoginController;
//# sourceMappingURL=login.js.map