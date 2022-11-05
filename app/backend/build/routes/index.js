"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const login_1 = require("./login");
const Routes = (app) => {
    app.use('/login', login_1.default);
    app.use('/client', client_1.default);
};
exports.default = Routes;
//# sourceMappingURL=index.js.map