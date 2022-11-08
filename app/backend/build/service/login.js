"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../database/models/User");
const token_1 = require("../auth/token");
class LoginService {
    constructor() {
        this.find = async (user) => {
            const { firstName, email } = user;
            const emailUser = await User_1.default.findOne({ where: { email } });
            if (!emailUser) {
                return {
                    status: 401,
                    data: {
                        message: 'Incorrect firstName and email',
                    },
                };
            }
            const token = this.token.generate({ name: firstName, email });
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