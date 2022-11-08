"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginValidate {
    constructor() {
        this.findValidations = (email) => {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        };
        this.validations = (req, res, next) => {
            const { name, email } = req.body;
            if (!name || !email) {
                return res.status(400).json({ message: 'All fields must be filled' });
            }
            if (!this.findValidations(email)) {
                return res.status(400).json({ message: 'email must be a valid email' });
            }
            next();
        };
    }
}
exports.default = LoginValidate;
//# sourceMappingURL=login.js.map