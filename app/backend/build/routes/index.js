"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const Routes = (app) => {
    app.use('/user', users_1.default);
};
exports.default = Routes;
//# sourceMappingURL=index.js.map