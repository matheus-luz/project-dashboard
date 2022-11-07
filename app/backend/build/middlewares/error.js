"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrorMiddleware = (err, _req, res) => {
    const { status, message } = err;
    res.status(status || 500).json({ message });
};
exports.default = httpErrorMiddleware;
//# sourceMappingURL=error.js.map