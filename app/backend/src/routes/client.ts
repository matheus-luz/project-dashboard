import { Router } from 'express';

import ClientController from '../controllers/client';

const routerClient = Router();

const clientController = new ClientController();

routerClient.get('/:id', clientController.findId);

export default routerClient;