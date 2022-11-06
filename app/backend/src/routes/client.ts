import { Router } from 'express';

import ClientController from '../controllers/client';

const routerClient = Router();

const clientController = new ClientController();

routerClient.get('/', clientController.getAll);
routerClient.get('/count', clientController.count);

routerClient.get('/city', clientController.findCityToClient);
routerClient.get('/:id', clientController.findId);

routerClient.patch('/:id', clientController.updateId);

export default routerClient;