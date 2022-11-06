"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("../controllers/client");
const routerClient = (0, express_1.Router)();
const clientController = new client_1.default();
routerClient.get('/', clientController.getAll);
routerClient.get('/city', clientController.findCityToClient);
routerClient.get('/:id', clientController.findId);
routerClient.patch('/:id', clientController.updateId);
exports.default = routerClient;
//# sourceMappingURL=client.js.map