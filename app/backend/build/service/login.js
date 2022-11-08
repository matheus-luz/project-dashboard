"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../database/models/Client");
const token_1 = require("../auth/token");
class LoginService {
    constructor() {
        this.find = async (user) => {
            const { name, email } = user;
            const emailUser = await Client_1.default.findOne({ where: { email } });
            if (!emailUser) {
                return {
                    status: 401,
                    data: {
                        message: 'Incorrect name and email',
                    },
                };
            }
            const token = this.token.generate({ name, email });
            return {
                status: 200,
                data: {
                    token,
                },
            };
        };
        this.token = new token_1.default();
    }
}
exports.default = LoginService;
//# sourceMappingURL=login.js.map