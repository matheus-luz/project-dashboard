"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../service/client");
class LoginController {
    constructor() {
        // Total de clientes por cidade
        this.count = async (_req, res) => {
            const { status, data } = await this.service.count();
            return res.status(status).json(data);
        };
        // Clientes
        this.getAll = async (_req, res) => {
            const { status, data } = await this.service.getAll();
            return res.status(status).json(data);
        };
        // Consultar um único cliente por ID
        this.findId = async (req, res) => {
            const { id } = req.params;
            const { status, data } = await this.service.findId(id);
            return res.status(status).json(data);
        };
        // Listar clientes por cidade
        this.findCityToClient = async (req, res) => {
            const { name } = req.body;
            const { status, data } = await this.service.findCityToClient(name);
            return res.status(status).json(data);
        };
        // Editar um cliente por ID
        this.updateId = async (req, res) => {
            const { body } = req;
            const { id } = req.params;
            const { status, data } = await this.service.updateId(body, id);
            return res.status(status).json(data);
        };
        this.service = new client_1.default();
    }
}
exports.default = LoginController;
//# sourceMappingURL=client.js.map