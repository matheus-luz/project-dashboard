import * as express from 'express';
import * as http from 'http';
import path = require('path');
import { Server } from 'socket.io';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'frontend')));

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export { serverHttp, io };