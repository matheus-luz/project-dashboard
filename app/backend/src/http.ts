import * as express from 'express';
import * as http from 'http';
import path = require('path');
import { Server } from 'socket.io';
import routerCity from './routes/city';
import routerClient from './routes/client';
import routerUsers from './routes/login';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.use('/city', routerCity);
app.use('/login', routerUsers);
app.use('/client', routerClient);

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export { serverHttp, io };