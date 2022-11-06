"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../database/models/User");
class ClientService {
    constructor() {
        this.getAll = async () => {
            const data = await User_1.default.findAll();
            return { status: 200, data };
        };
        this.count = async () => {
            const data = await User_1.default.findAndCountAll();
            return { status: 200, data };
        };
        this.findId = async (id) => {
            const data = await User_1.default.findOne({ where: { id } });
            return {
                status: 200,
                data,
            };
        };
        this.findCityToClient = async (city) => {
            const data = await User_1.default.findOne({ where: { city } });
            return {
                status: 200,
                data,
            };
        };
        this.updateId = async (body, id) => {
            const { email, gender, company, city, title } = body;
            const data = await User_1.default.update({
                email,
                gender,
                company_id: company,
                city_id: city,
                title_id: title,
            }, { where: { id } });
            return {
                status: 200,
                data,
            };
        };
    }
}
exports.default = ClientService;
//# sourceMappingURL=client.js.map