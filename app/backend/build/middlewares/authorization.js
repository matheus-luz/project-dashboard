"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const User_1 = require("../database/models/User");
const SECRET = process.env.JWT_SECRET || 'secret';
class Authorization {
    constructor() {
        this.validate = (req, res) => {
            const token = req.headers.authorization;
            if (!token)
                return res.status(400).json({ message: 'Token not found' });
        };
        this.token = async (req, res, next) => {
            const token = req.headers.authorization;
            try {
                const decode = jwt.verify(token, SECRET);
                const { email } = decode;
                const user = await User_1.default.findOne({ where: { email } });
                if (!user) {
                    return res.status(401).json({ message: 'Token must be a valid token' });
                }
                next();
            }
            catch (err) {
                if (err instanceof Error && err.name.includes('Token')) {
                    return res.status(401).json({ message: 'Token must be a valid token' });
                }
                return next(err);
            }
        };
    }
}
exports.default = Authorization;
//# sourceMappingURL=authorization.js.map