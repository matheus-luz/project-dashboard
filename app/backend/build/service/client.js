"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../database/models/Company");
const City_1 = require("../database/models/City");
const User_1 = require("../database/models/User");
const Office_1 = require("../database/models/Office");
const connectionTable = {
    include: [{
            model: Company_1.default,
            as: 'company',
            attributes: { exclude: ['id'] },
        },
        {
            model: City_1.default,
            as: 'city',
        },
        {
            model: Office_1.default,
            as: 'office',
            attributes: { exclude: ['id'] },
        },
    ],
};
class ClientService {
    constructor() {
        // public count = async () => 
        // // const city = await City.findOne({ where: { name: city } });
        // // await User.findAll();
        //   ({ status: 200 })
        // ;
        this.getAll = async () => {
            const data = await User_1.default.findAll(connectionTable);
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
            const cityFindId = await City_1.default.findOne({ where: { name: city } });
            const data = await User_1.default.findAll(connectionTable);
            if (!cityFindId) {
                return {
                    status: 404,
                    data: 'Invalid city',
                };
            }
            const response = data.filter((r) => r.city_id === cityFindId.id);
            return {
                status: 200,
                data: response,
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