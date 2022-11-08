"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientUpdateValidate {
    constructor() {
        this.findAll = (email, gender, companyId, cityId) => {
            if (!email || !gender || !companyId || !cityId) {
                return false;
            }
            return true;
        };
        this.validations = (req, res, next) => {
            const { email, gender, companyId, cityId, titleId, } = req.body;
            if (!this.findAll(email, gender, companyId, cityId) || !titleId) {
                return res.status(400).json({ message: 'All fields must be filled' });
            }
            next();
        };
    }
}
exports.default = ClientUpdateValidate;
//# sourceMappingURL=client.js.map