"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
};
class Token {
    constructor() {
        this.generate = (data) => {
            const token = jwt.sign(data, SECRET, jwtConfig);
            return token;
        };
    }
}
exports.default = Token;
//# sourceMappingURL=token.js.map