"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../database/models/Company");
const City_1 = require("../database/models/City");
const Client_1 = require("../database/models/Client");
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
        this.count = async () => {
            const count = await Client_1.default.count({
                distinct: true,
                col: 'city_id',
            });
            return { status: 200, data: count };
        };
        this.getAll = async () => {
            const data = await Client_1.default.findAll(connectionTable);
            return { status: 200, data };
        };
        this.findId = async (id) => {
            const data = await Client_1.default.findByPk(id, connectionTable);
            return {
                status: 200,
                data,
            };
        };
        this.findCityToClient = async (name) => {
            const cityFindId = await City_1.default.findOne({ where: { name } });
            const data = await Client_1.default.findAll(connectionTable);
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
            const { email, gender, companyId, cityId, titleId } = body;
            await Client_1.default.update({
                email,
                gender,
                company_id: companyId,
                city_id: cityId,
                title_id: titleId,
            }, { where: { id } });
            return {
                status: 200,
                data: 'Updated',
            };
        };
    }
}
exports.default = ClientService;
//# sourceMappingURL=client.js.map